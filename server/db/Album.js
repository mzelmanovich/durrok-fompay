const Sequelize = require('sequelize');
const conn = require('./conn');

const Album = conn.define('album', {
  name: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  year: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  genre: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: null
  },
  imgURL: {
    type: Sequelize.STRING,
    defaultValue: null
  }
});

module.exports = Album;
