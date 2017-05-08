const Sequelize = require('sequelize');
const conn = require('./conn');

const User = conn.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  socialId: Sequelize.STRING
});

module.exports = User;
