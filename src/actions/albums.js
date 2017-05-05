import {SET_ALBUMS} from '../constants';
import axios from 'axios';

export const setAlbums = (data) => {
  return {
    type: SET_ALBUMS,
    data
  };
};

export const fetchJumbotron = () => dispatch => axios
    .get(`/api/albums/jumbo`)
    .then(({data}) => data)
    .then(data => {
      dispatch(setAlbums(data));
      return data;
    })
    .catch(console.error);

