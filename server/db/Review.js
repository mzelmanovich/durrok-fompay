const Sequelize = require('sequelize');
const conn = require('./conn');

const Review = conn.define('review', {
    content: {
    type: Sequelize.TEXT,
    defaultValue: null
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  }

});

module.exports = Review;


