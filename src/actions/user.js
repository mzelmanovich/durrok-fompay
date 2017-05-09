import {SET_LOGGEDIN_USER, SET_CART} from '../constants';
import {addToOffLineCart} from './cart';
import axios from 'axios';

export const setUser = (data) => {
  return {
    type: SET_LOGGEDIN_USER,
    data
  };
};

export const setCart = (data) => {
  return {
    type: SET_CART,
    data
  };
};

export const fetchLoggedInUser = () => (dispatch, state) => axios
    .get(`/api/users/me`)
    .then(({data}) => data)
    .then(data => {
      dispatch(setUser(data));
      return data;
    })
    .catch(console.error);


export const fetchCart = () => (dispatch, state) => {
  if (state().loggedInUser.firstName){
    return axios
    .get(`/api/users/me/cart`)
    .then(({data}) => data)
    .then(data => {
      dispatch(setCart(data));
      return data;
    })
    .catch(console.error);
  }
  return dispatch(addToOffLineCart(-1));
};

