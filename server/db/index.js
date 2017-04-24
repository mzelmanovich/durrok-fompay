const conn = require('./conn');
const Orders = require('./Order');
const Songs = require('./Song');
const Albums = require('./Album');
const Users = require('./User');
const Reviews = require('./Review');
const Artists = require('./Artist');
const Genres = require('./Genre');
const Payments = require('./Payment');



// User Associations
Users.hasMany( Orders );
Users.hasMany( Payments );
Users.hasMany( Reviews );


//Review Association
 Reviews.belongsTo( Albums );
 Reviews.belongsTo( Songs );
 Reviews.belongsTo(Users, {through: 'userReview'} ) ;


// //Artist Association
// Artists.hasMany( Songs );
// Artists.hasMany( Albums );
// Artists.hasMany( Genres );
// Artists.belongsTo(Artists, {as: 'Band'});

// //Payment Association
// Payments.belongsTo( Users );
// Payments.belongsTo( Orders );



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

  const albumsToAdd = [
    {
      name: 'Talkie Walkie',
      year: '2004',
      genre: 'Electronica',
      price: 15,
      description: 'Best album from Air',
      imgURL: null
    },
    {
      name: 'Zoot Woman',
      year: '2003',
      genre: 'Rock',
      price: 15,
      description: 'Best album from Zoot Woman',
      imgURL: null
    }
  ];

  const songsToAdd = [
    {
      name: 'Calmer',
      year: '2004',
      duration: 238,
      price: 1.99 * 1,
      imgURL: null
    },
    {
      name: 'Venus',
      year: '2004',
      duration: 244,
      price: 1.99 * 1,
      imgURL: null
    }
  ];

  return sync(true).then(() => {
    const artistPromises = Artists.bulkCreate(artistsToAdd);
    const userPromises = Users.bulkCreate(usersToAdd);
    const orderPromises = Orders.bulkCreate(ordersToAdd);
    const genrePromises = Genres.bulkCreate(genresToAdd);
    const reviewPromises = Reviews.bulkCreate(reviewsToAdd);
    const paymentsPromises = Payments.bulkCreate(paymentsToAdd);
    const songPromises = Songs.bulkCreate(songsToAdd);
    const albumPromises = Albums.bulkCreate(albumsToAdd);
    return Promise.all([
      artistPromises,
      userPromises,
      orderPromises,
      paymentsPromises,
      genrePromises,
      reviewPromises,
      songPromises,
      albumPromises
    ]);
  })
  .then(([artists, users, [completedOrder, emptyCart], payments, genres, reviews, songs, albums]) => {
    //make ass. seed data here using sequelize ass methods

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
