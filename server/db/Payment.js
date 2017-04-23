const conn = require('./conn');
const Sequelize = require('sequelize');

const attrs = {
  cardType: Sequelize.STRING,
  creditCardNumber: Sequelize.BIGINT,
  expDate: conn.Sequelize.DATE,
  billingAddress: conn.Sequelize.TEXT
};

module.exports = conn.define('payment', attrs);
