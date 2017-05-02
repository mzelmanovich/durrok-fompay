import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import App from  './components/AppContainer.jsx';


const root = document.getElementById('root');

let Test = ({children}) => (
<div>
  <App />
{children}
</div>);


 let Test3 = () => (<h1>hi1245</h1>);

const Routes = (
  <Router history={ hashHistory }>
    <Route path="/" component={ Test }>
      <IndexRoute component={ Test3 } />
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
