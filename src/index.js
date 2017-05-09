import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider, connect} from 'react-redux';
import store from './store';
import App from  './components/AppContainer.jsx';
import {fetchJumbotron, fetchAlbum, fetchAllAlbum} from './actions/albums';
import {fetchGenres, fetchAlbums} from './actions/genres';
import IndexContainer from './components/IndexContainer.jsx';
import GenreAlbums from './components/GenreAlbums.jsx';
import SingleAlbum from './components/SingleAlbum.jsx';
import Cart from './components/CartComponent.jsx';
import AlbumsContainer from './components/AlbumsContainer.jsx';
import {fetchLoggedInUser, fetchCart} from './actions/user';
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

let Test2 = () => (<h1>hi1245</h1>);
let Test3 = () => (<h1>Test3</h1>);

const Routes = ({index, genreAlbums, singleAlbum, allAlbums, loginCheck, getCart}) => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } onEnter ={loginCheck} >
      <IndexRoute component={ IndexContainer } onEnter={ index } />
      <Route path = "genres/:genreId/albums" component={GenreAlbums} onEnter={ genreAlbums } />
      <Route path = "/albums/:albumId" component={SingleAlbum} onEnter={ singleAlbum } />
      <Route path="/cart" component = {Cart} onEnter={getCart} />
      <Route path="/albums" component ={AlbumsContainer} onEnter={allAlbums} />
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
    dispatch(fetchLoggedInUser());
  }

});

const RoutesContainer = connect(null, mapDispatchToProps)(Routes);

const ProviderSetUp = (
  <Provider store = {store}>
   <RoutesContainer />
  </Provider>
);


render(ProviderSetUp, root);
