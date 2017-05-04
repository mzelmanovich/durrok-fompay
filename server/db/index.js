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

    return Genres.bulkCreate(genresToAdd)
    .then(() => Users.bulkCreate(usersToAdd))
     .then(() => Artists.bulkCreate(artistsToAdd))
     .then(() => Albums.bulkCreate(albumsToAdd))
     .then(() => Reviews.bulkCreate(reviewsToAdd));
    // const userPromises = Users.bulkCreate(usersToAdd);
    // const orderPromises = Orders.bulkCreate(ordersToAdd);
    // const genrePromises = Genres.bulkCreate(genresToAdd);
    // const reviewPromises = Reviews.bulkCreate(reviewsToAdd);
    // const paymentsPromises = Payments.bulkCreate(paymentsToAdd);
    // const songPromises = Songs.bulkCreate(songsToAdd);
    // const albumPromises = Albums.bulkCreate(albumsToAdd);
    // return Promise.all([
    //   artistPromises,
    //   userPromises,
    //   orderPromises,
    //   paymentsPromises,
    //   genrePromises,
    //   reviewPromises,
    //   songPromises,
    //   albumPromises
    // ]);
  })
  //following is needed cause our test data sets ids on their own and can mess up the seq
  .then(() => Promise.all([
    conn.query(`ALTER SEQUENCE albums_id_seq RESTART WITH ${albumsToAdd.length + 1}`),
    conn.query(`ALTER SEQUENCE artists_id_seq RESTART WITH ${artistsToAdd.length + 1}`),
    conn.query(`ALTER SEQUENCE users_id_seq RESTART WITH ${usersToAdd.length + 1}`),
    // conn.query(`ALTER SEQUENCE orders_id_seq RESTART WITH ${ordersToAdd.length + 1}`),
    conn.query(`ALTER SEQUENCE genres_id_seq RESTART WITH ${genresToAdd.length + 1}`),
    conn.query(`ALTER SEQUENCE reviews_id_seq RESTART WITH ${reviewsToAdd.length + 1}`),
    // conn.query(`ALTER SEQUENCE payments_id_seq RESTART WITH ${paymentsToAdd.length + 1}`),
    // conn.query(`ALTER SEQUENCE songs_id_seq RESTART WITH ${songsToAdd.length + 1}`)
  ]));
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

