const conn = require('./conn');
const Orders = require('./Order');
const Songs = require('./Song');
const Albums = require('./Album');
const Users = require('./User');
const Reviews = require('./Review');
const Artists = require('./Artist');
const Genres = require('./Genre');
const Payments = require('./Payment');

//Order Association
Orders.hasOne( Payments );
Orders.hasMany( Songs );
Orders.hasMany( Albums );
Orders.belongsTo(Users);

Songs.belongsTo(Orders);
Songs.hasMany(Reviews);
Songs.belongsTo(Artists);
Songs.belongsTo(Albums);
Songs.belongsTo(Genres);

Albums.belongsTo(Orders);
Albums.hasMany(Reviews);
Albums.hasMany(Songs);
Albums.belongsTo(Artists);
Albums.belongsTo(Genres);

// User Associations
Users.hasMany(Orders);
Users.hasMany(Payments);
Users.hasMany(Reviews);


//Review Association
Reviews.belongsTo( Albums );
Reviews.belongsTo( Songs );
Reviews.belongsTo(Users);


//Artist Association
Artists.hasMany( Songs );
Artists.hasMany( Albums );
Artists.belongsTo(Artists, {as: 'Band'});
Artists.belongsTo( Genres );

Genres.hasMany( Artists );
Genres.hasMany( Songs );
Genres.hasMany( Albums );

//Payment Association
Payments.belongsTo( Users );
Payments.belongsTo( Orders );


const sync = force => conn.sync({ force });

const seed = () => {

  const artistsToAdd = [
    {firstName: 'Nsync', imgURL: 'test.jpg'},
    {firstName: 'Justin', lastName: 'Timberlake', imgURL: 'test2.tiff'}
  ];

  const usersToAdd = [
    {userName: 'summerguan', firstName: 'Summer', lastName: 'Guan', email: 'summergun10@gmail.com', salt: '1234'},
    {userName: 'danniwang', firstName: 'Danni', lastName: 'Wang', email: 'danni@gmail.com', salt: '1234'},
    {userName: 'mazelmanovich', firstName: 'Mitch', lastName: 'Zelmanovich', email: '', salt: '1234'}

  ];


  const ordersToAdd = [
    { completedDate: Date.now(), orderPrice: 1.99, tax: 1.99 * 0.07 },
    {}
  ];

  const genresToAdd = [
    {name: 'Jazz'},
    {name: 'Pop Music'},
    {name: 'Rock Music'}
  ];

  const reviewsToAdd = [
    {rating: '5', title: 'Best Album Ever!', content: 'The title says it all, i simply love this band and this album. Bought this for my collection.'}
  ];

  const paymentsToAdd = [
    {cardType: 'mastercard', creditCardNumber: 123456789, name: 'Fake 123', expDate: new Date('01/01/2017')},
    {cardType: 'visa', creditCardNumber: 123456, name: 'Faker 123', expDate: new Date('01/01/2016')}
  ];

  const albumsToAdd = [
    {
      name: 'Talkie Walkie',
      year: '2004',
      price: 15,
      description: 'Best album from Air',
      imgURL: null
    },
    {
      name: 'Zoot Woman',
      year: '2003',
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
    const artistPromises = artistsToAdd.map(art => Artists.create(art));
    const userPromises = usersToAdd.map(user => Users.create(user));
    const orderPromises = ordersToAdd.map(order => Orders.create(order));
    const genrePromises = Genres.bulkCreate(genresToAdd);
    const reviewPromises = Reviews.bulkCreate(reviewsToAdd);
    const paymentsPromises = Payments.bulkCreate(paymentsToAdd);
    const songPromises = Songs.bulkCreate(songsToAdd);
    const albumPromises = Albums.bulkCreate(albumsToAdd);
    return Promise.all([
      Promise.all(artistPromises),
      Promise.all(userPromises),
      orderPromises,
      paymentsPromises,
      genrePromises,
      reviewPromises,
      songPromises,
      albumPromises
    ]);
  });
  // .then(([artists, users, [completedOrder, emptyCart], payments, genres, reviews, songs, albums]) => {
  //   const userorder = users[0].addOrder(completedOrder); //order belongs to user
  //   const reviewalbum = albums[0].setReviews(reviews[0]) ; //review belongs to album
  //   const reviewuser = users[0].setReviews(reviews[0]); // Reviews.belongsTo(Users);
  //   const paymentuser = users[0].addPayment(payments[0]);//Payments.belongsTo( Users );
  //   const songartist = artists[0].addSongs(songs[0]);//Songs.belongsTo(Artist);
  //   const songOrder = completedOrder.setSongs(songs[0]);
  //   const albumOrder = completedOrder.setAlbums(albums[0]);
  //   const paymentOrder = completedOrder.setPayment(payments[0]);

  //   return Promise.all([userorder, reviewalbum, reviewuser, paymentuser, songartist, songOrder, albumOrder, paymentOrder]);

  // });
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

