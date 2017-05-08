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
  },

  completeCart: function(){
    if (this.cart){
      this.cart.completedDate = new Date();
      const {userId, id} = this.cart;
      return this.cart.save()
      .then(cart => cart.computePrice())
      .then(() => this.setCart(null))
      .then(() => conn.model('order').findById(id))
      .then(order => {
        order.userId = this.id;
        return order.save();
      })
      .then(() => conn.model('user').findById(this.id, {include: [{all: true}]}));
    }
    return Promise.resolve(this);
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
