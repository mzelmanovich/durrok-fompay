const Sequelize = require('sequelize');
const conn = require('./conn');

const Song = conn.define('song', {
  name: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  year: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  duration: {
    type: Sequelize.INTEGER,
    defaultValue: null
  },
  price: {
    type: Sequelize.DECIMAL,
    defaultValue: null
  },
  imgURL: {
    type: Sequelize.STRING,
    defaultValue: null
  }
});

module.exports = Song;
