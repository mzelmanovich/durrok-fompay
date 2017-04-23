const conn = require('./conn');
const Orders = require('./Order');
const Songs = require('./Song');
const Albums = require('./Album');
const Users = require('./User');
const Reviews = require('./Review');
const Artists = require('./Artist');
const Genres = require('./Genre');
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

  const genresToAdd = [
      {
        genreName: 'Jazz'
      },
      {
        genreName: 'Pop Music'
      },
      {
        genreName: 'Rock Music'
      },
    ];

  const reviewsToAdd = [
    {
      rating: '5',
      title: 'Best Album Ever!',
      content: 'The title says it all, i simply love this band and this album. Bought this for my collection.'
    }
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
    const artistPromises = Artists.bulkCreate(artistsToAdd);
    const userPromises = Users.bulkCreate(usersToAdd);
    const orderPromises = Orders.bulkCreate(ordersToAdd);
    const genrePromises = Genres.bulkCreate(genresToAdd);
    const reviewPromises = Reviews.bulkCreate(reviewsToAdd);
    const paymentsPromises = Payments.bulkCreate(paymentsToAdd);
    return Promise.all([artistPromises, userPromises, orderPromises, paymentsPromises, genrePromises, reviewPromises]);
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
    Genres,
    Payments
  }
};
