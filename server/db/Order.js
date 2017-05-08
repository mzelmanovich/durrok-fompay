const conn = require('./conn');
const Sequelize = require('sequelize');

const instanceMethods = {
  computePrice: function(tax){
    this.tax = tax || 0.07;
    this.save().then(() => conn.model('order').findById(this.id, {include: [{all: true}]}))
    .then(order => {
      order.price = 0;
      order.userId = this.userId;
      order.albums.forEach(({price}) => {
        order.price = isNaN(price) ? order.price + 0 : order.price + (price * 1);
      });
      return order.save();
    });
  }
};
const attrs = {
  completedDate: Sequelize.DATE,
  price: Sequelize.DECIMAL,
  tax: Sequelize.DECIMAL,
  date: Sequelize.DATE
};

module.exports = conn.define('order', attrs, {instanceMethods});
