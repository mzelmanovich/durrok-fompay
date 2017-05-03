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

  const {
  artistsToAdd,
  usersToAdd,
  ordersToAdd,
  genresToAdd,
  reviewsToAdd,
  paymentsToAdd,
  albumsToAdd,
  songsToAdd
} = require('./seedData');

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

