import {ADD_TO_CART, REMOVE_FROM_CART} from '../constants';
import {setCart} from './user';
import {fetchCart, fetchLoggedInUser} from './user';
import axios from 'axios';
import {hashHistory} from 'react-router';

export const addToCart = (album) => ({
  type: ADD_TO_CART,
  data: album
});


export const checkOut = () => (dispatch, state) => {
  if (state().loggedInUser.firstName){
    return axios.post('/api/users/me/checkout')
  .then(() => dispatch(fetchLoggedInUser()))
  .then(() => dispatch(fetchCart()))
  .then(() =>     hashHistory.push('/orders'))
  .then(console.log);
  }
  window.location = '/auth/google';
};
export const serializeCart = (albums) => {
  albums = albums.map(({id}) => id).filter(item => item > 0);
  localStorage.setItem('cart', albums.join(','));
};

export const deserializeCart = () => {
  let cart = localStorage.getItem('cart');
  if (!cart){
    localStorage.setItem('cart', '');
    cart = localStorage.getItem('cart');
  }
  let ids = localStorage.cart.split(',').filter(id => id.length > 0);
  ids = ids.map((id) => axios.get('/api/albums/' + id).then(({data}) => data));
  return Promise.all(ids).then((albums) => ({albums})).catch(() => ({albums: []}));
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

export const saveOfflineCart = () => (dispatch, state) =>
{
  if (state().loggedInUser.firstName){
    return deserializeCart()
    .then(({albums}) => {
      console.log(albums);
      localStorage.setItem('cart', '');
      const haveAlbums = ( albums.length > 0 );
      if (haveAlbums){
        return axios.post('/api/users/me/cart', albums.map(({id}) => id));
      }
    });
  }
};

export const putInCart = ({id}) => (dispatch, state) => {
  if (state().loggedInUser.firstName){
    return axios.put('/api/users/me/cart', {albumId: id})
  .then(() => dispatch(fetchCart()))
  .catch(console.log);
  }
  dispatch(addToOffLineCart({id}));
};

export const removeFromCart = ({id}) => (dispatch, state) => {
  if (state().loggedInUser.firstName){
    return axios.delete('/api/users/me/cart', {data: {albumId: id}})
  .then(() => dispatch(fetchCart()))
  .catch(console.log);
  }
  dispatch(removeFromOfflineCart({id}));
};
