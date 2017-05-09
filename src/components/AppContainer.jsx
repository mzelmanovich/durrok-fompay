import React from 'react';
import Footer from './Footer.jsx';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';

export const keepRoute = () => {
  const path = window.location.hash;
  localStorage.setItem('lastPath', path);
};
const AppContainer = ({children, user, albumCount}) => {
  return (
      <div className="container">
        <div className="header clearfix">
          <nav className="homepage-navbar">
            <ul className="nav nav-pills pull-right">
              {user.firstName ? (<li role="presentation"><a href="#">{'Welcome: ' + user.firstName + '!'}</a></li>)
              : <li role="presentation"><a href="/auth/google" onClick={keepRoute}><i className="fa fa-google-plus-square" /> Google Login</a></li>}
              <li role="presentation"><a href="#">Home</a></li>
              <li role="presentation"><a href="/#/cart"><i className="fa fa-shopping-cart fa-lg" /> Cart ({albumCount || 0})</a></li>
               {user.firstName ? <li role="presentation"><a href="/#/orders"><i className="fa fa-barcode" /> Orders </a></li> : null}
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

const mapStateToProps = ({loggedInUser, cart}) => ({
  user: loggedInUser,
  albumCount: cart.albums ? cart.albums.length : null
});
export default connect(mapStateToProps, null)(AppContainer);
