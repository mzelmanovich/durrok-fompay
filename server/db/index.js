const conn = require('./conn');
const Orders = require('./Order');
const Songs = require('./Song');
const Albums = require('./Album');
const Users = require('./User');
const Reviews = require('./Review');
const Artists = require('./Artist');

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

  const albumToAdd = [
    {
      name:'Talkie Walkie',
      year: '2004',
      genre: 'Electronica',
      description: 'Best album from Air',
      imgURL: null
    },
    {
      name: 'Zoot Woman',
      year: '2003',
      genre: 'Rock',
      description: 'Best album from Zoot Woman',
      imgURL: null
    }
  ];

  const songToAdd = [
    {
      name:'Calmer',
      year: '2004',
      duration: 238,
      price: 1.99*1,
      imgURL: null
    },
    {
      name: 'Venus',
      year: '2004',
      duration: 244,
      price: 1.99*1,
      imgURL: null
    }
  ];

  return sync(true)
    .then(() => {
      const artistPromises = artistToAdd.map(artist => Artists.create(artist));
      const userPromises = usersToAdd.map(user => Users.create(user));
      return Promise.all([artistPromises, userPromises]);
    })
    .then(() =>
      Orders.bulkCreate([
        { completedDate: Date.now(), orderPrice: 1.99, tax: 1.99 * 0.07 },
        {}
      ])
    )
    .then(()=>{
      const albumPromises = albumToAdd.map(album=> Albums.create(album));
      const songPromises = songToAdd.map(song=> Songs.create(song));
      return Promise.all([albumPromises,songPromises]);
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
    Albums
  }
};
