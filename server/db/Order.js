const conn = require('./conn');
const Sequelize = require('sequelize');

const attrs = {
  completedDate: Sequelize.DATE,
  orderPrice: Sequelize.DECIMAL,
  tax: Sequelize.DECIMAL,
  date: Sequelize.DATE
};

module.exports = conn.define('order', attrs);
