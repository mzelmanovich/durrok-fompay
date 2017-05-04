import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider, connect, OnEnter } from 'react-redux';
import store from './store';
import App from  './components/AppContainer.jsx';
//import JumbotronComponent from './components/JumbotronComponent.jsx';
import {setJumbotronData} from './actions/jumbotron';
// import {setGenre} from './reducer/genresreducer';
import GenreContainer from './components/GenreContainer.jsx';
import GenreAlbums from './components/GenreAlbums.jsx';

const root = document.getElementById('root');

let Test2 = () => (<h1>hi1245</h1>);
let Test3 = () => (<h1>Test3</h1>);

const testCaroselData = [
  {
    src: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/03/Gorillaz_2017-920x584.jpg',
    h3: 'Gorillaz',
    p: '2017 New Album from $9.99'
  },
  {
    src: 'http://assets.bonappetit.com/photos/59035f282278cd3dbd2c0d99/16:9/w_1200,c_limit/katy-perry-bon-appetit.jpg',
    h3: 'Katty Perry',
    p: 'Bon Appetit'
  },
    {
    src: 'https://s-media-cache-ak0.pinimg.com/736x/02/f6/e6/02f6e6495ea7d9813fe5dad14c669379.jpg',
    h3: 'The Beatles',
    p: "Sgt. Pepper's Longly Hearts Club Band"
  },
];

const Routes = ({init}) => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } onEnter={ init }>
      <IndexRoute component={ GenreContainer } />
      <Route path="login" component={ Test3 } />
      <Route path = "genres/:genreId/albums" component={GenreAlbums} />
    </Route>
  </Router>
);

const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(setJumbotronData(testCaroselData));
  }
});

const RoutesContainer = connect(null, mapDispatchToProps)(Routes);

const ProviderSetUp = (
  <Provider store = {store}>
   <RoutesContainer />
  </Provider>
);


render(ProviderSetUp, root);
