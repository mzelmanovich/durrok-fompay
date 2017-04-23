const conn = require('./conn');
const Orders = require('./Order');
const Songs = require('./Song');
const Albums = require('./Album');
const Users = require('./User');
const Reviews = require('./Review');
const Artists = require('./Artist');
const Genres = require('./Genre');

const sync = force => conn.sync({ force });

const seed = () => {
  const artistToAdd = [
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

  const genreToAdd = [
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

  const reviewToAdd = [
    {
      rating: '5'
    },
    {
      title: 'Best Music Ever!'
    },
    {
      content: 'The title says it all, i simply love this band and this album. Bought this for my collection.'
    }
  ];


  return sync(true)
    .then(() => {
      const artistPromises = artistToAdd.map(artist => Artists.create(artist));
      const userPromises = usersToAdd.map(user => Users.create(user));
      const genrePromises = genreToAdd.map(genre => Genres.create(genre));
      const reviewPromises = reviewToAdd.map(review => Review.create(review));
      return Promise.all([artistPromises, userPromises]);
    })
    .then(() =>
      Orders.bulkCreate([
        { completedDate: Date.now(), orderPrice: 1.99, tax: 1.99 * 0.07 },
        {}
      ])
    );
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
    Genres
  }
};
