import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
import store from './store';
import App from  './components/AppContainer.jsx';
import JumbotronComponent from './components/JumbotronComponent.jsx';
import {setJumbotronData} from './actions/jumbotron';

const root = document.getElementById('root');

let Test3 = () => (<h1>hi1245</h1>);

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
];

const Routes = ({init}) => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } onEnter={ init }>
      <IndexRoute component={ JumbotronComponent } />
      <Route path="login" component={ Test3 } />
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
