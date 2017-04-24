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
  price:{
    type:Sequelize.DECIMAL,
    defaultValue:15*1
  }
  imgURL: {
    type: Sequelize.STRING,
    defaultValue: null
  }
});

module.exports = Album;
