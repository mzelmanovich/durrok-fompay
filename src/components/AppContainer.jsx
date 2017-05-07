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
              <li role="presentation"><a href="/login"><i className="fa fa-sign-in"/> Log In</a></li>
              <li role="presentation"><a href="/singup"><i className="fa fa-user-plus"/> Sign Up</a></li>
              <li role="presentation"><a href="/#/cart"><i className="fa fa-shopping-cart fa-lg" /> Cart</a></li>
            </ul>
          </nav>
          <div className="maindiv">
          <img src ="./public/logo.png"/>
          </div>
        </div>
        <div className="maindiv">
        {children}
        <Footer />
        </div>
        
      </div>
  );
};

export default AppContainer;
