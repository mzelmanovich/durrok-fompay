import React from 'react';
import Footer from './Footer.jsx';
import Jumboton from './elements/Jumbotron.jsx';


const AppContainer = ({children}) => {
  return (
      <div className="container">
        <div className="header clearfix">
          <nav className="homepage-navbar">
            <ul className="nav nav-pills pull-right">
              <li role="presentation"><a href="#">Home</a></li>
              <li role="presentation"><a href="/login">Log In</a></li>
              <li role="presentation"><a href="/singup">Sign Up</a></li>
              <li role="presentation"><a href="/cart">Cart</a></li>
            </ul>
          </nav>
          <h3 className="homepage-header">Durrok Fompay Music store</h3>
        </div>
        <div>
        {children}
        </div>
        <Footer />
      </div>
  );
};

export default AppContainer;
