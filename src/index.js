import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider, connect} from 'react-redux';
import store from './store';
import App from  './components/AppContainer.jsx';
import {fetchJumbotron, fetchAlbum} from './actions/albums';
import {fetchGenres, fetchAlbums} from './actions/genres';
import IndexContainer from './components/IndexContainer.jsx';
import GenreAlbums from './components/GenreAlbums.jsx';
import SingleAlbum from './components/SingleAlbum.jsx';

const root = document.getElementById('root');

let Test2 = () => (<h1>hi1245</h1>);
let Test3 = () => (<h1>Test3</h1>);

const Routes = ({index, genreAlbums, singleAlbum}) => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <IndexRoute component={ IndexContainer } onEnter={ index } />
      <Route path="login/:id" component={ Test3 } />
      <Route path = "genres/:genreId/albums" component={GenreAlbums} onEnter={ genreAlbums } />
      <Route path = "/albums/:albumId" component={SingleAlbum} onEnter={ singleAlbum } />
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
  }

});

const RoutesContainer = connect(null, mapDispatchToProps)(Routes);

const ProviderSetUp = (
  <Provider store = {store}>
   <RoutesContainer />
  </Provider>
);


render(ProviderSetUp, root);
