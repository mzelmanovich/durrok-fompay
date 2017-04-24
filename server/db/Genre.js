const Sequelize = require('sequelize');
const conn = require('./conn');

const Genre = conn.define('genre', {
  genreName: {
    type: Sequelize.STRING,
    unique: true
  }

});

module.exports = Genre;
