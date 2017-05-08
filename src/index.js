import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider, connect} from 'react-redux';
import store from './store';
import App from  './components/AppContainer.jsx';
import {fetchJumbotron, fetchAlbum, fetchAllAlbum} from './actions/albums';
import {fetchGenres, fetchAlbums} from './actions/genres';
import IndexContainer from './components/IndexContainer.jsx';
import Login from './components/Login.jsx'
import GenreAlbums from './components/GenreAlbums.jsx';
import SingleAlbum from './components/SingleAlbum.jsx';
import Cart from './components/CartComponent.jsx';
import AlbumsContainer from './components/AlbumsContainer.jsx';
import {fetchLoggedInUser} from './actions/user';

const root = document.getElementById('root');

let Test2 = () => (<h1>hi1245</h1>);
let Test3 = () => (<h1>Test3</h1>);

const Routes = ({index, genreAlbums, singleAlbum, allAlbums, loginCheck}) => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } onEnter ={loginCheck} >
      <IndexRoute component={ IndexContainer } onEnter={ index } />
      <Route path="login" component={Login} />
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
  },
  allAlbums: ({params}) => {
    dispatch(fetchAllAlbum(params.albumId));
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
