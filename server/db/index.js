const conn = require('./conn');
const Orders = require('./Orders');
const Songs = require('./Song');
const Albums = require('./Album');
const Users = require('./User');


const sync = (force) => conn.sync({ force });


const seed = () => sync(true)
.then(() => Orders.bulkCreate([
  {completedDate: Date.now(), orderPrice: 1.99, tax: (1.99 * 0.07)},
  {}
]));

module.exports = {
  sync,
  seed,
  models: {
    Orders,
    Users
    Songs,
    Albums
  }
};
