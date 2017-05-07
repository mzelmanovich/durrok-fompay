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

const root = document.getElementById('root');

let Test2 = () => (<h1>hi1245</h1>);
let Test3 = () => (<h1>Test3</h1>);

const Routes = ({index, genreAlbums, singleAlbum, allAlbums}) => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <IndexRoute component={ IndexContainer } onEnter={ index } />
      <Route path="login/:id" component={ Test3 } />
      <Route path = "genres/:genreId/albums" component={GenreAlbums} onEnter={ genreAlbums } />
      <Route path = "/albums/:albumId" component={SingleAlbum} onEnter={ singleAlbum } />
      <Route path="/cart" component = {Cart} />
      <Route path="/albums" component ={AlbumsContainer} onEnter={allAlbums}/>
    </Route>
  </Router>
);

const mapDispatchToProps = (dispatch) => ({
  index: ({params}) => {
    dispatch(fetchJumbotron());
    dispatch(fetchGenres());
  },
  genreAlbums: ({params}) => {
    dispatch(fetchAlbums(params.genreId));
  },
  singleAlbum: ({params}) => {
    dispatch(fetchAlbum(params.albumId));
  },
  allAlbums:({params}) => {
    dispatch(fetchAllAlbum(params.albumId))
  }

});

const RoutesContainer = connect(null, mapDispatchToProps)(Routes);

const ProviderSetUp = (
  <Provider store = {store}>
   <RoutesContainer />
  </Provider>
);


render(ProviderSetUp, root);
