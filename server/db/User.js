const Sequelize = require('sequelize');
const conn = require('./conn');


const instanceMethods = {
  refreshCart: function(albumArr){
    Promise.resolve(this.cart ? this :  conn.model('user').findById(this.id, {include: [{all: true}]}))
     .then((user) => {
       return !user.cart ? user.createCart() : user.cart;
     })
     .then((cart) => {
       return cart.setAlbums(albumArr).then(() => cart);
     })
  .then((cart) => {
    return conn.model('order').findById(cart.id, {include: [{all: true}]});
  });
  }
};
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
  googleId: Sequelize.STRING
}, {instanceMethods});

module.exports = User;
