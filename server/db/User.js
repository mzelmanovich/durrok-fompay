const Sequelize = require('sequelize')
const conn = require('./conn');


const User = conn.define('users', {
  userName: {
      type:Sequelize.STRING,
      unique:true
  },
  firstName:{
      type:Sequelize.STRING
  },
  lastName:{
      type:Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    validate: {
			isEmail: true,
			notEmpty: true,
		}
  }

}) ;

module.exports = User;