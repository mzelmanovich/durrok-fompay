import {ADD_TO_CART, REMOVE_FROM_CART} from '../constants';
import {fetchCart} from './user';

import axios from 'axios';

export const addToCart = (album) => ({
  type: ADD_TO_CART,
  data: album
});

export const saveOfflineCart = () => dispatch =>
deserializeCart()
.then(({albums}) => albums.length ?
axios.post('/api/users/me/cart', albums)
.then(() => dispatch(fetchCart())) : null)
.then(console.log);


export const putInCart = ({id}) => dispatch => {
  axios.put('/api/users/me/cart', {albumId: id})
  .then(() => dispatch(fetchCart()))
  .catch(console.log);
};

export const removeFromCart = ({id}) => dispatch => {
  axios.delete('/api/users/me/cart', {data: {albumId: id}})
  .then(() => dispatch(fetchCart()))
  .catch(console.log);
};


export const serializeCart = (albums) => {
  albums = albums.map(({id}) => id).filter(item => item > 0);
  localStorage.setItem('cart', albums.join(','));
};

export const deserializeCart = () => {
  let ids = localStorage.getItem('cart').split(',');
  ids = ids.map((id) => axios.get('/api/albums/' + id).then(({data}) => data));
  return Promise.all(ids).then((albums) => ({albums}));
};

export const addToOffLineCart = (album) => dispatch => {
  deserializeCart().then(({albums = []}) => {
    const index = albums.findIndex(({id}) => id === album.id);
    if (index < 0){
      albums.push(album);
    }
    albums = albums.filter(({id}) => id > -1);
    serializeCart(albums);
    dispatch(setCart({albums}));
  });
};

export const removeFromOfflineCart = (album) => dispatch => {
  deserializeCart().then(({albums = []}) => {
    const index = albums.findIndex(({id}) => id === album.id);
    if (index > -1){
      albums.splice(index, 1);
      albums = Array.from(albums);
    }
    serializeCart(albums);
    dispatch(setCart({albums}));

  });
};
