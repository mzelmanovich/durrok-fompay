import React, { Component } from "react";
import { browserHistory } from "react-router";
import JumbotronComponent from "./JumbotronComponent.jsx";
import Footer from "./Footer.jsx";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    // this.onSignUpClick = this.onSignUpClick.bind(this);
    // this.onLogInClick = this.onLogInClick.bind(this);
  }

  onClick(value) {
    browserHistory.push(value);
  }

  // onSignUpClick() {
  //   browserHistory.push("/signup");
  // }

  // onLogInClick() {
  //   browserHistory.push("/login");
  // }

  render() {
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
        <JumbotronComponent />
        <Footer />
      </div>
    );
  }
}
export default AppContainer;
