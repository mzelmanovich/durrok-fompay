import {SET_LOGGEDIN_USER} from '../constants';
import axios from 'axios';

export const setUser = (data) => {
  return {
    type: SET_LOGGEDIN_USER,
    data
  };
};

export const fetchLoggedInUser = () => dispatch => axios
    .get(`/api/users/me`)
    .then(({data}) => data)
    .then(data => {
      dispatch(setUser(data));
      return data;
    })
    .catch(console.error);

