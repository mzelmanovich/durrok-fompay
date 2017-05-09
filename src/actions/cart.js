import {ADD_TO_CART, REMOVE_FROM_CART} from '../constants';
import {fetchCart} from './user';

import axios from 'axios';

export const addToCart = (album) => ({
  type: ADD_TO_CART,
  data: album
});


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
