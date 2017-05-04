const Sequelize = require('sequelize');
const conn = require('./conn');

const Artist = conn.define('artist', {
  name: {
    type: Sequelize.STRING
  },
  imgURL: {
    type: Sequelize.STRING
  }
});

module.exports = Artist;
