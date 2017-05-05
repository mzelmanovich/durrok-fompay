import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider, connect} from 'react-redux';
import store from './store';
import App from  './components/AppContainer.jsx';
import {fetchJumbotron} from './actions/albums';
import {fetchGenres, setGenres} from './actions/genres';
import IndexContainer from './components/IndexContainer.jsx';
import GenreAlbums from './components/GenreAlbums.jsx';
import SingleAlbum from './components/SingleAlbum.jsx';

const root = document.getElementById('root');

let Test2 = () => (<h1>hi1245</h1>);
let Test3 = () => (<h1>Test3</h1>);

const Routes = ({init}) => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <IndexRoute component={ IndexContainer } onEnter={ init } />
      <Route path="login" component={ Test3 } />
      <Route path = "genres/:genreId/albums" component={GenreAlbums} />
      <Route path = "/albums/:albumId" component={SingleAlbum} />
    </Route>
  </Router>
);

const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(fetchJumbotron());
    dispatch(setGenres([
      {
        id: 4,
        name: 'Country',
        imgURL: 'http://www.billboard.com/files/styles/article_main_image/public/media/Brad-Paisley-live-nov-2016-billboard-4-1548.jpg',
        createdAt: '2017-05-05T01:21:33.771Z',
        updatedAt: '2017-05-05T01:21:33.771Z'
      },
      {
        id: 1,
        name: 'Electronic',
        imgURL: 'http://www.billboard.com/files/styles/900_wide/public/media/EDM-workout-playlist-2017-billboard-summer-1548.jpg',
        createdAt: '2017-05-05T01:21:33.771Z',
        updatedAt: '2017-05-05T01:21:33.771Z'
      },
      {
        id: 2,
        name: 'Pop Music',
        imgURL: 'http://www.billboard.com/files/styles/1092x722/public/media/lady-gaga-rei-kawakubo-dress-2017-billboard-1548.jpg',
        createdAt: '2017-05-05T01:21:33.771Z',
        updatedAt: '2017-05-05T01:21:33.771Z'
      },
      {
        id: 3,
        name: 'Rock Music',
        imgURL: 'http://www.billboard.com/files/styles/article_main_image/public/media/guns-n-roses-press-photo-sept-live-billboard-1548.jpg',
        createdAt: '2017-05-05T01:21:33.771Z',
        updatedAt: '2017-05-05T01:21:33.771Z'
      }
    ]));
    // dispatch(fetchGenres());
  }
});

const RoutesContainer = connect(null, mapDispatchToProps)(Routes);

const ProviderSetUp = (
  <Provider store = {store}>
   <RoutesContainer />
  </Provider>
);


render(ProviderSetUp, root);
