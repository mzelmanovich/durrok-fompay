const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GithubStrategy(
  require('../config').github,
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.use(new GoogleStrategy(
  require('../config').googleAuth,
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    return done(null, profile);
  }
));

app.use(session({
  secret: 'kitty',
  name: 'summer',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());

app.use('/vendor', express.static(path.join(__dirname, '..', 'node_modules')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
app.use('/public', express.static(path.join(__dirname, '..', 'public')));
app.use(routes);
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'index.html')));

app.get('/logout', function(req, res){
  console.log('logging out');
  req.logout();
  res.redirect('/');
});

app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  }
);

app.get('/auth/google', passport.authenticate('google',  { scope:  ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  }
);
passport.serializeUser(function(user, done) {
  console.log(123);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log('abc');
  done(null, user);
});

app.get('*', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'index.html')));

module.exports = app;
