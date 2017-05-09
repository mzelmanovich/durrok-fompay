const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require('./db');

passport.use(new GoogleStrategy(
  require('../config').googleAuth,
  function(accessToken, refreshToken, profile, done) {
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
  req.logout();
  res.redirect('/');
});

app.get('/auth/google', passport.authenticate('google',  { scope:  ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  }
);

passport.serializeUser(function(user, done) {
  db.models.Users.findOne({where: {googleId: user.id}})
  .then(dbUser => {
    if (dbUser){
      return dbUser;
    }
    return db.models.Users.create({
      firstName: user.name.givenName,
      lastName: user.name.familyName,
      email: user.emails[0].value,
      googleId: user.id
    });
  })
  .then(found => done(null, found.id))
  .catch(done);
});

passport.deserializeUser(function(id, done) {
  db.models.Users.findOne({where: {id}})
   .then(user => done(null, user))
   .catch(done);
});

app.get('*', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'index.html')));

module.exports = app;
