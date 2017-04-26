import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

const root = document.getElementById('root');

let Test = ({children}) => (
<div>
  123
{children}
</div>);

let Test2 = () => (<h1>hi123</h1>);
let Test3 = () => (<h1>hi1245</h1>);

const Routes = (
  <Router history={ hashHistory }>
    <Route path="/" component={ Test }>
      <IndexRoute component={ Test2 } />
      <Route path="login" component={ Test3 } />
    </Route>
  </Router>
);


const ProviderSetUp = (
  <Provider store = {store}>
   {Routes}
  </Provider>
);


render(ProviderSetUp, root);
