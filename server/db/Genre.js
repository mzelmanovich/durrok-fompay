const Sequelize = require('sequelize');
const conn = require('./conn');

const Genre = conn.define('genre', {
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  imgURL: Sequelize.STRING

});

module.exports = Genre;
