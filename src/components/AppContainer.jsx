import React from 'react';
import Footer from './Footer.jsx';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';

const AppContainer = ({children, user}) => {
  return (
      <div className="container">
        <div className="header clearfix">
          <nav className="homepage-navbar">
            <ul className="nav nav-pills pull-right">
              {user.firstName ? (<li role="presentation"><a href="#">{'Welcome: ' + user.firstName + '!'}</a></li>)
              : <li role="presentation"><a href="/login"><i className="fa fa-google-plus-square" /><i className="fa fa-facebook-square" /> Login</a></li>}
              <li role="presentation"><a href="#">Home</a></li>
              <li role="presentation"><a href="/#/cart"><i className="fa fa-shopping-cart fa-lg" /> Cart</a></li>
              {user.firstName ? <li role="presentation"><a href="/logout"><i className="fa fa-sign-out" /> Log Out</a></li> : null}
            </ul>
          </nav>
          <div className="maindiv">
          <img src ="./public/logo.png" />
          </div>
        </div>
        <div className="maindiv">
        {children}
        <Footer />
        </div>

      </div>
  );
};

const mapStateToProps = ({loggedInUser}) => ({
  user: loggedInUser
});
export default connect(mapStateToProps, null)(AppContainer);
