import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider, connect} from 'react-redux';
import store from './store';
import App from  './components/AppContainer.jsx';
import {fetchJumbotron} from './actions/albums';
import IndexContainer from './components/IndexContainer.jsx';
import GenreAlbums from './components/GenreAlbums.jsx';
import SingleAlbum from './components/SingleAlbum.jsx';

const root = document.getElementById('root');

let Test2 = () => (<h1>hi1245</h1>);
let Test3 = () => (<h1>Test3</h1>);

const Routes = ({init}) => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } onEnter={ init }>
      <IndexRoute component={ IndexContainer } />
      <Route path="login" component={ Test3 } />
      <Route path = "genres/:genreId/albums" component={GenreAlbums} />
      <Route path = "/albums/:albumId" component={SingleAlbum} />
    </Route>
  </Router>
);

const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(fetchJumbotron());
  }
});

const RoutesContainer = connect(null, mapDispatchToProps)(Routes);

const ProviderSetUp = (
  <Provider store = {store}>
   <RoutesContainer />
  </Provider>
);


render(ProviderSetUp, root);
