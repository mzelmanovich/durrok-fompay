const artistsToAdd = [
    {id: 1, name: 'Katy Perry', genreId: 2},
    {id: 2, name: 'Gorillaz', genreId: 3},
    {id: 3, name: 'Zedd', genreId: 1},
    {id: 4, name: 'Odesza', genreId: 1},
    {id: 5, name: 'The Beatles', genreId: 3},
    {id: 6, name: 'Lady Gaga', genreId: 2},
    {id: 7, name: 'Justin Bieber', genreId: 2},
    {id: 8, name: 'Pink Floyd', genreId: 3},
    {id: 9, name: 'Blur', genreId: 3},
    {id: 10, name: 'Blake Shelton', genreId: 4},
    {id: 11, name: 'George Strait', genreId: 4},
    {id: 12, name: 'Lauren Alaina', genreId: 4},
];

const usersToAdd = [
    {id: 1, firstName: 'Summer', lastName: 'Guan', email: 'summergun10@gmail.com', googleId: '100494953576356654376'},
  {id: 2, firstName: 'Mitch', lastName: 'Z', email: 'mitch@gmail.com', googleId: '123'}
];


const ordersToAdd = [
    { id: 1, completedDate: Date.now(), orderPrice: 1.99, tax: 1.99 * 0.07 },
    {id: 2 }
];

const genresToAdd = [
    {id: 1, name: 'Electronic', imgURL: 'http://www.billboard.com/files/styles/900_wide/public/media/EDM-workout-playlist-2017-billboard-summer-1548.jpg'},
    {id: 2, name: 'Pop Music', imgURL: 'http://www.billboard.com/files/styles/1092x722/public/media/lady-gaga-rei-kawakubo-dress-2017-billboard-1548.jpg'},
    {id: 3, name: 'Rock Music', imgURL: 'http://www.billboard.com/files/styles/article_main_image/public/media/guns-n-roses-press-photo-sept-live-billboard-1548.jpg' },
    {id: 4, name: 'Country', imgURL: 'http://www.billboard.com/files/styles/article_main_image/public/media/Brad-Paisley-live-nov-2016-billboard-4-1548.jpg'}
];


const paymentsToAdd = [
    {id: 1, cardType: 'mastercard', creditCardNumber: 123456789, name: 'Fake 123', expDate: new Date('01/01/2017')},
    {id: 2, cardType: 'visa', creditCardNumber: 123456, name: 'Faker 123', expDate: new Date('01/01/2016')}
];

const albumsToAdd = [
  {id: 1,
    name: 'True Colors',
    year: '2015',
    price: 15,
    description: 'True Colors is the second studio album by Russian-German electronic music producer Zedd released on 18 May 2015 by Interscope Records.',
    imgURL: 'https://images-na.ssl-images-amazon.com/images/I/51S1Gyriq0L._SS500.jpg',
    genreId: 1,
    artistId: 3
  },
  {id: 2,
    name: 'In Return',
    year: '2015',
    price: 8.99,
    description: 'In Return is the second studio album by American electronic music duo Odesza, released on September 9, 2014 by Counter Records and Ninja Tune. The album was released in CD, vinyl, and digital download formats.',
    imgURL: 'https://images-na.ssl-images-amazon.com/images/I/61Qs0sDP7qL._SX522_.jpg',
    genreId: 1,
    artistId: 4
  },
  {
    id: 3,
    name: 'Humanz',
    jumboImg: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/03/Gorillaz_2017-920x584.jpg',
    year: '2017',
    price: 9.99,
    description: 'New Gorilla Album',
    imgURL: 'https://images-na.ssl-images-amazon.com/images/I/512q76cqy4L._SS500.jpg',
    genreId: 1,
    artistId: 2
  },

  {
    id: 5,
    jumboImg: 'https://s-media-cache-ak0.pinimg.com/736x/02/f6/e6/02f6e6495ea7d9813fe5dad14c669379.jpg',
    name: "Sgt. Pepper's Lonly Hearts Club Band",
    year: '2017',
    price: 12.99,
    description: 'The Beatles in 2017',
    imgURL: 'https://images-na.ssl-images-amazon.com/images/I/815LGpEtiwL._SX522_.jpg',
    genreId: 3,
    artistId: 5
  },
  {
    id: 6,
    name: 'Joanne',
    year: '2017',
    price: 8.99,
    description: 'Joanne is the fifth studio album recorded by American singer Lady Gaga. It was released on October 21, 2016, through Streamline and Interscope Records as a follow-up to Artpop and Cheek to Cheek',
    imgURL: 'https://images-na.ssl-images-amazon.com/images/I/41WNJweHfkL._SS500.jpg',
    genreId: 2,
    artistId: 6
  },
  {
    id: 7,
    name: 'Purpose',
    year: '2015',
    price: 12.99,
    description: 'Purpose is the fourth studio album by Canadian singer and songwriter Justin Bieber. It was released on November 13, 2015 by Def Jam Recordings and School Boy Records',
    imgURL: 'https://images-na.ssl-images-amazon.com/images/I/51eR0TF0KML.jpg',
    genreId: 2,
    artistId: 7
  },
  {
    id: 4,
    jumboImg: 'http://assets.bonappetit.com/photos/59035f282278cd3dbd2c0d99/16:9/w_1200,c_limit/katy-perry-bon-appetit.jpg',
    name: 'Bon Appetit',
    year: '2017',
    price: 9.99,
    description: 'New KP Album',
    imgURL: 'https://images-na.ssl-images-amazon.com/images/I/51XMo-yhnvL._SS500.jpg',
    genreId: 2,
    artistId: 1
  },
  {
    id: 8,
    name: 'The Wall',
    year: '1982',
    price: 42.99,
    description: "In this visual riff on Pink Floyd's album The Wall, successful but drugged-out musician Pink (Bob Geldof) is looking back on his isolated childhood from the confines of a Los Angeles hotel room.",
    imgURL: 'https://images-na.ssl-images-amazon.com/images/I/71XAL%2BtmzbL._SX522_.jpg',
    genreId: 3,
    artistId: 8
  },
  {
    id: 9,
    name: 'The Best of Blur',
    year: '2000',
    price: 12.99,
    description: 'Blur: The Best Of is a greatest hits compilation album by English Britpop band Blur, first released in late 2000 and is the final Blur album by Food Records.',
    imgURL: 'https://images-na.ssl-images-amazon.com/images/I/51zNsPeshQL._SS500.jpg',
    genreId: 3,
    artistId: 9
  },
  {
    id: 10,
    name: 'Blake Shelton',
    year: '2016',
    price: 2.99,
    description: "If I'm Honest is the tenth studio album by American country music singer Blake Shelton. The album was released on May 20, 2016, by Warner Bros. Nashville.",
    imgURL: 'https://images-na.ssl-images-amazon.com/images/I/51-Itu%2B58QL._SS500_PJStripe-Robin-Large,TopLeft,0,0.jpg',
    genreId: 4,
    artistId: 10,
  },
  {
    id: 11,
    name: 'Cold Beer Conversation',
    year: '2015',
    price: 5.99,
    description: 'Cold Beer Conversation is the twenty-ninth studio album by American country music artist George Strait. It was released on September 25, 2015 via MCA Nashville.',
    imgURL: 'https://images-na.ssl-images-amazon.com/images/I/61ppBUlKY0L._SS500_PJStripe-Robin-Large,TopLeft,0,0.jpg',
    genreId: 4,
    artistId: 11
  },
  {
    id: 12,
    name: 'Road Less Traveled',
    year: '2017',
    price: 12.99,
    description: 'Road Less Traveled is the second studio album by American country music artist Lauren Alaina. The album was released on January 27, 2017, by Mercury Nashville and Interscope Records. It includes the number one single of the same name.',
    imgURL: 'https://images-na.ssl-images-amazon.com/images/I/61RpJz%2BnNRL._SS500.jpg',
    genreId: 4,
    artistId: 12
  },
];

const reviewsToAdd = [
  {
    id: 1,
    albumId: 1,
    userId: 1,
    rating: 4,
    content: 'Amazing!'
  },
  {
    id: 2,
    albumId: 2,
    userId: 1,
    rating: 5,
    content: 'Groudbreaking!'
  },
    {
    id: 3,
    albumId: 3,
    userId: 1,
    rating: 4,
    content: 'Test4!'
  },
    {
    id: 4,
    albumId: 4,
    userId: 1,
    rating: 2,
    content: 'woohoo!'
  },
    {
    id: 5,
    albumId: 5,
    userId: 1,
    rating: 5,
    content: 'classy!'
  },
    {
    id: 6,
    albumId: 6,
    userId: 1,
    rating: 5,
    content: 'Empowering!'
  },
    {
    id: 7,
    albumId: 7,
    userId: 1,
    rating: 3,
    content: 'Hate it!'
  },
    {
    id: 8,
    albumId: 8,
    userId: 1,
    rating: 5,
    content: 'My favorite of all time!'
  },
    {
    id: 9,
    albumId: 9,
    userId: 1,
    rating: 4,
    content: 'The best!!'
  },
    {
    id: 10,
    albumId: 3,
    userId: 1,
    rating: 2,
    content: 'Meh!'
  },
    {
    id: 11,
    albumId: 1,
    userId: 2,
    rating: 3,
    content: 'Another Amazing!'
  },


];

// albumsToAdd.forEach(({id}) => {
//   reviewsToAdd.push({id, albumId: id, userId: 1, rating: 2, content: 'Music Rocked me So hard!'});
// });

module.exports = {
  artistsToAdd,
  usersToAdd,
  ordersToAdd,
  genresToAdd,
  reviewsToAdd,
  paymentsToAdd,
  albumsToAdd
};
