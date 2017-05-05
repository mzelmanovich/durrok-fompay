import {SET_JUMBOTRON} from '../constants';
import {mapApiToCarrousel} from '../components/elements/Jumbotron.jsx';
import axios from 'axios';

export const setJumbotronData = (data) => {
  return {
    type: SET_JUMBOTRON,
    data
  };
};

export const fetchJumbotron = () => dispatch => axios
    .get(`/api/albums/jumbo`)
    .then(({data}) => data)
    .then(mapApiToCarrousel)
    .then(data => dispatch(setJumbotronData(data)))
    .catch(console.error);

