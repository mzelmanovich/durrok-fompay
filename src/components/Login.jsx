import React from 'react';

export default class Login extends React.Component {


  render() {
    const keepRoute = () => {
      const path = '#/';
      localStorage.setItem('lastPath', path);
    };

    return (
      <nav className = "login">
        <h2>Login</h2>
        <button className="facebook"><a href="/auth/facebook" onClick={keepRoute}>Log In with Facebook</a></button>
        <button className="google"><a href="/auth/google" onClick={keepRoute}>Log In with Google</a></button>
      </nav>
    );
  }
}
