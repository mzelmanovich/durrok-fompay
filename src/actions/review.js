import { SET_REVIEWS, FETCH_ALL_REVIEWS } from '../constants';
import axios from 'axios';
import { fetchAlbum } from './albums';

export const setReviews = reviews => ({
  type: SET_REVIEWS,
  data: reviews
});

export const fetchallreviews = allReviews => ({
  type: FETCH_ALL_REVIEWS,
  allReviews
});

export const fetchReviews = (id) => {
  return dispatch => {
    axios.get(`/api/albums/${id}/reviews`)
      .then(response => {
        dispatch(setReviews(response.data));
      });
  };
};

export const addSingleAlbumReview = (content, rating, albumId ) => dispatch =>
axios.post(`api/albums/${albumId}/reviews`, {content, rating})
.then(() => dispatch(fetchReviews(albumId)))
.catch(console.error) ;

