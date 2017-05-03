const artistsToAdd = [
    {id: 1, firstName: 'Nsync', imgURL: 'test.jpg'},
    {id: 2, firstName: 'Justin', lastName: 'Timberlake', imgURL: 'test2.tiff'},
    {id: 3, firstName: 'Katy', lastName: 'Perry', imgURL: 'test2.tiff'},
    {id: 4, firstName: 'Gorillaz', imgURL: 'test2.tiff'}
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

module.exports = {
  artistsToAdd,
  usersToAdd,
  ordersToAdd,
  genresToAdd,
  reviewsToAdd,
  paymentsToAdd,
  albumsToAdd,
  songsToAdd
};
