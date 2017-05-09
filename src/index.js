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
import {fetchLoggedInUser} from './actions/user';

const root = document.getElementById('root');


const Routes = ({index, genreAlbums, singleAlbum, allAlbums, loginCheck}) => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } onEnter ={loginCheck} >
      <IndexRoute component={ IndexContainer } onEnter={ index } />
      <Route path = "genres/:genreId/albums" component={GenreAlbums} onEnter={ genreAlbums } />
      <Route path = "/albums/:albumId" component={SingleAlbum} onEnter={ singleAlbum } />
      <Route path="/cart" component = {Cart} />
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
    dispatch(fetchReviews(params.albumId));
  },
  allAlbums: ({params}) => {
    dispatch(fetchAllAlbum(params.albumId));
  },
  loginCheck: () => {
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
