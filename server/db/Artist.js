const Sequelize = require('sequelize');
const conn = require('./conn');

const Artist = conn.define('artist',{
	firstName:{
		type:Sequelize.STRING,

	},
	lastName: {
		type:Sequelize.STRING,
	},
	imageURL: {
		type:Sequelize.VARCHAR
	}

});

module.exports = Artist;