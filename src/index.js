import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider, connect} from 'react-redux';
import store from './store';
import App from  './components/AppContainer.jsx';
import {fetchJumbotron, fetchAlbum, fetchAllAlbum} from './actions/albums';
import {fetchGenres, fetchAlbums} from './actions/genres';
import {fetchReviews, addSingleAlbumReview} from './actions/review';
import IndexContainer from './components/IndexContainer.jsx';
import GenreAlbums from './components/GenreAlbums.jsx';
import SingleAlbum from './components/SingleAlbum.jsx';
import Cart from './components/CartComponent.jsx';
import AlbumsContainer from './components/AlbumsContainer.jsx';
import OrderConfirmation from './components/OrderConfirmation.jsx';
import {fetchLoggedInUser, fetchCart} from './actions/user';
import {saveOfflineCart} from './actions/cart';
import OrderContainer from './components/OrderContainer.jsx';
import axios from 'axios';


window.test = (data) => {
  axios.post('/api/users/me/cart', data)
  .then(console.log);
};

window.test3 = (data) => {
  axios.put('/api/users/me/cart', {albumId: data})
  .then(console.log);
};

window.test2 = (data) => {
  axios.post('/api/users/me/checkout', data)
  .then(console.log);
};

const root = document.getElementById('root');


const Routes = ({index, genreAlbums, singleAlbum, allAlbums, loginCheck, getCart}) => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } onEnter ={loginCheck} >
      <IndexRoute component={ IndexContainer } onEnter={ index } />
      <Route path = "genres/:genreId/albums" component={GenreAlbums} onEnter={ genreAlbums } />
      <Route path = "/albums/:albumId" component={SingleAlbum} onEnter={ singleAlbum } />
      <Route path="/cart" component = {Cart} onEnter={getCart} />
      <Route path="/albums" component ={AlbumsContainer} onEnter={allAlbums} />
      <Route path="/confirmation" component ={OrderConfirmation} />
      <Route path="/orders" component={OrderContainer} />
    </Route>
  </Router>
);

const mapDispatchToProps = (dispatch) => ({
  index: () => {
    dispatch(fetchJumbotron());
    dispatch(fetchGenres());
  },
  genreAlbums: ({params}) => {
    dispatch(fetchAlbums(params.genreId));
  },
  singleAlbum: ({params}) => {
    dispatch(fetchAlbum(params.albumId));
    dispatch(fetchReviews(params.albumId));
  },
  allAlbums: ({params}) => {
    dispatch(fetchAllAlbum(params.albumId));
  },
  getCart: () => {
    dispatch(fetchCart());
  },
  loginCheck: () => {
    const lastPath = localStorage.getItem('lastPath');
    if (lastPath && lastPath !== 'null'){
      localStorage.setItem('lastPath', null);
      hashHistory.push(lastPath.split('#')[1]);
    }
    dispatch(fetchLoggedInUser())
    .then(() => dispatch(saveOfflineCart()))
    .then(() => dispatch(fetchCart()));
  }

});

const RoutesContainer = connect(null, mapDispatchToProps)(Routes);

const ProviderSetUp = (
  <Provider store = {store}>
   <RoutesContainer />
  </Provider>
);


render(ProviderSetUp, root);
