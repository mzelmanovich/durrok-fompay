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

export const fetchAllAlbum = () => dispatch => axios
    .get(`/api/albums`)
    .then(({data}) => data)
    .then(data => {
      dispatch(setAlbums([data]));
      return data;
    })
    .catch(console.error);

export const getSpotify = (album) => dispatch => axios
.get(`https://api.spotify.com/v1/search?q=album:${album.name} artist:${album.artist.name}&type=album`)
.then(({data}) => data.albums.items[0].id)
.then(spotId => {
  album.spotId = spotId;
  console.log(spotId);
  dispatch(setAlbums([album]));
  return album;
})
.catch(() => dispatch(setAlbums([album])));


export const fetchAlbum = (id) => dispatch => axios
    .get(`/api/albums/${id}`)
    .then(({data}) => data)
    .then(data => {
      dispatch(getSpotify(data));
      return data;
    })
    .catch(console.error);
