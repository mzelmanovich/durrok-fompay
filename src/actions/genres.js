import {SET_GENRES} from '../constants';
import {setAlbums} from './albums';
import axios from 'axios';

export const setGenres = (data) => {
  return {
    type: SET_GENRES,
    data
  };
};

export const fetchGenres = () => dispatch => axios
    .get(`/api/genres`)
    .then(({data}) => data)
    .then(data => {
      dispatch(setGenres(data));
      return data;
    })
    .catch(console.error);

export const fetchAlbums = (id) => dispatch => axios
    .get(`/api/genres/${id}/albums`)
    .then(({data}) => data)
    .then(data => {
      dispatch(setAlbums(data));
      return data;
    })
    .catch(console.error);
