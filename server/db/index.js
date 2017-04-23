const conn = require('./conn');
const Orders = require('./Order');
const Songs = require('./Song');
const Albums = require('./Album');
const Users = require('./User');
const Reviews = require('./Review');
const Artists = require('./Artist');
const Payments = require('./Payment');

const sync = force => conn.sync({ force });

const seed = () => {
  const artistsToAdd = [
    {
      firstName: 'Nsync',
      imgURL: 'test.jpg'
    },
    {
      firstName: 'Justin',
      lastName: 'Timberlake',
      imgURL: 'test2.tiff'
    }
  ];

  const usersToAdd = [
    {
      userName: 'summerguan',
      firstName: 'Summer',
      lastName: 'Guan',
      email: 'summergun10@gmail.com',
      salt: '1234'
    }
  ];

  const ordersToAdd = [
    { completedDate: Date.now(), orderPrice: 1.99, tax: 1.99 * 0.07 },
    {}
  ];

  const paymentsToAdd = [
    {
      cardType: 'mastercard',
      creditCardNumber: 123456789,
      name: 'Fake 123',
      expDate: new Date('01/01/2017')
    },
    {
      cardType: 'visa',
      creditCardNumber: 123456,
      name: 'Faker 123',
      expDate: new Date('01/01/2016')
    }
  ];

  return sync(true).then(() => {
    const artistPromises = artistsToAdd.map(artist => Artists.create(artist));
    const userPromises = usersToAdd.map(user => Users.create(user));
    const orderPromises = ordersToAdd.map(order => Orders.create(order));
    const paymentsPromises = paymentsToAdd.map(payment => Payments.create(payment));
    return Promise.all([artistPromises, userPromises, orderPromises, paymentsPromises]);
  });
};

module.exports = {
  sync,
  seed,
  models: {
    Orders,
    Users,
    Reviews,
    Artists,
    Songs,
    Albums,
    Payments
  }
};
