import {SET_JUMBOTRON} from '../constants';
import {mapApiToCarrousel} from '../components/JumbotronComponent.jsx';
import axios from 'axios';

export const setJumbotronData = (data) => {
  return {
    type: SET_JUMBOTRON,
    data
  };
};

export const fetchJumbotron = () => axios
    .get(`/api/albums/jumbo`)
    .then(({data}) => data)
    .then(mapApiToCarrousel)
    .catch(console.error);

