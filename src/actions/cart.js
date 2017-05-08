import {ADD_TO_CART} from '../constants';

export const addToCart = (album) => ({
  type: ADD_TO_CART,
  data: album
});
