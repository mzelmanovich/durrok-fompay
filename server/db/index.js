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
Orders.belongsTo( Payments );
Orders.belongsToMany( Songs, {through: 'OrderSongs'} );
Orders.belongsToMany( Albums, {through: 'OrderAlbums'} );
Orders.belongsTo(Users);

Songs.belongsToMany(Orders, {through: 'OrderSongs'});
Songs.hasMany(Reviews);
Songs.belongsTo(Artists);
Songs.belongsTo(Albums);
Songs.belongsTo(Genres);

Albums.belongsToMany(Orders, {through: 'OrderAlbums'});
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
Payments.hasOne( Orders );


const sync = force => conn.sync({ force });

const seed = () => {

  const artistsToAdd = [
    {id: 1, firstName: 'Nsync', imgURL: 'test.jpg'},
    {id: 2, firstName: 'Justin', lastName: 'Timberlake', imgURL: 'test2.tiff'}
  ];

  const usersToAdd = [
    {id: 1, userName: 'summerguan', firstName: 'Summer', lastName: 'Guan', email: 'summergun10@gmail.com', salt: '1234'},
    {id: 2, userName: 'danniwang', firstName: 'Danni', lastName: 'Wang', email: 'danni@gmail.com', salt: '1234'},
    {id: 3, userName: 'mazelmanovich', firstName: 'Mitch', lastName: 'Zelmanovich', email: '', salt: '1234'}

  ];


  const ordersToAdd = [
    { id: 1, completedDate: Date.now(), orderPrice: 1.99, tax: 1.99 * 0.07 },
    {id: 2 }
  ];

  const genresToAdd = [
    {id: 1, name: 'Jazz'},
    {id: 2, name: 'Pop Music'},
    {id: 3, name: 'Rock Music'}
  ];

  const reviewsToAdd = [
    {id: 1, rating: '5', title: 'Best Album Ever!', content: 'The title says it all, i simply love this band and this album. Bought this for my collection.'}
  ];

  const paymentsToAdd = [
    {id: 1, cardType: 'mastercard', creditCardNumber: 123456789, name: 'Fake 123', expDate: new Date('01/01/2017')},
    {id: 2, cardType: 'visa', creditCardNumber: 123456, name: 'Faker 123', expDate: new Date('01/01/2016')}
  ];

  const albumsToAdd = [
    {id: 1,
      name: 'Talkie Walkie',
      year: '2004',
      price: 15,
      description: 'Best album from Air',
      imgURL: null
    },
    {id: 2,
      name: 'Zoot Woman',
      year: '2003',
      price: 15,
      description: 'Best album from Zoot Woman',
      imgURL: null
    },
    {
      id: 3,
      name: 'Monkey Around',
      jumboImg: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/03/Gorillaz_2017-920x584.jpg',
      showJumbo: true,
      year: '2017',
      price: 9.99,
      description: 'New Gorilla Album',
    },
    {
      id: 4,
      jumboImg: 'http://assets.bonappetit.com/photos/59035f282278cd3dbd2c0d99/16:9/w_1200,c_limit/katy-perry-bon-appetit.jpg',
      showJumbo: true,
      name: 'Bon Appetit',
      year: '2017',
      price: 9.99,
      description: 'New KP Album'
    },
  ];

  const songsToAdd = [
    {id: 1,
      name: 'Calmer',
      year: '2004',
      duration: 238,
      price: 1.99 * 1,
      imgURL: null
    },
    {id: 2,
      name: 'Venus',
      year: '2004',
      duration: 244,
      price: 1.99 * 1,
      imgURL: null
    },
    {id: 3,
      name: 'Miss You',
      year: '2003',
      duration: 250,
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
  //following is needed cause our test data sets ids on their own and can mess up the seq
  .then(() => Promise.all([
    conn.query(`ALTER SEQUENCE albums_id_seq RESTART WITH ${albumsToAdd.length + 1}`),
    conn.query(`ALTER SEQUENCE artists_id_seq RESTART WITH ${artistsToAdd.length + 1}`),
    conn.query(`ALTER SEQUENCE users_id_seq RESTART WITH ${usersToAdd.length + 1}`),
    conn.query(`ALTER SEQUENCE orders_id_seq RESTART WITH ${ordersToAdd.length + 1}`),
    conn.query(`ALTER SEQUENCE genres_id_seq RESTART WITH ${genresToAdd.length + 1}`),
    conn.query(`ALTER SEQUENCE reviews_id_seq RESTART WITH ${reviewsToAdd.length + 1}`),
    conn.query(`ALTER SEQUENCE payments_id_seq RESTART WITH ${paymentsToAdd.length + 1}`),
    conn.query(`ALTER SEQUENCE songs_id_seq RESTART WITH ${songsToAdd.length + 1}`)
  ]))
  .then(() => {
    return Promise.all([
      Artists.findAll({order: ['id']}),
      Users.findAll({order: ['id']}),
      Orders.findAll({order: ['id']}),
      Payments.findAll({order: ['id']}),
      Genres.findAll({order: ['id']}),
      Reviews.findAll({order: ['id']}),
      Songs.findAll({order: ['id']}),
      Albums.findAll({order: ['id']})
    ]);
  })
  .then(([artists, users, [completedOrder, emptyCart], payments, genres, reviews, songs, albums]) => {
    const userorder = users[0].addOrder(completedOrder); //order belongs to user
    const reviewalbum = albums[0].setReviews(reviews[0]) ; //review belongs to album
    const reviewuser = users[0].setReviews(reviews[0]); // Reviews.belongsTo(Users);
    const reviewsong = songs[0].setReviews(reviews[0]); // Reviews.belongsTo(Songs);
    const paymentuser = users[0].addPayment(payments[0]);//Payments.belongsTo( Users );
    const songartist = artists[0].addSongs(songs[0]);//Songs.belongsTo(Artist);
    const songGenres = genres[0].addSongs(songs[0]);//Songs.belongsTo(Genre);
    const songOrder = completedOrder.setSongs(songs[0]);
    const albumOrder = completedOrder.setAlbums(albums[0]);
    const paymentOrder = completedOrder.setPayment(payments[0]);
    const albumGenre = albums[0].setGenre(genres[0]);
    const albumSongs = Promise.all([albums[0].addSongs(songs[0]), albums[0].addSongs(songs[1])]);
    const albumArtist = albums[0].setArtist(artists[0]);
    const songGenere = songs[0].setGenre(genres[0]);

    return Promise.all([
      userorder,
      reviewalbum,
      reviewuser,
      reviewsong,
      paymentuser,
      songartist,
      songGenres,
      songOrder,
      albumOrder,
      paymentOrder,
      albumGenre,
      albumSongs,
      albumArtist,
      songGenere
    ]);

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

