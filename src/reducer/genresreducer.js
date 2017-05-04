import axios from 'axios';

const SET_GENRE = 'SET_GENRE';

export const setGenre = genre => ({
  type: SET_GENRE,
  selectedGenre: genre
});

const setGenreReducer = (state = '', action) => {
  switch (action.type) {
    case SET_GENRE:
      return action.selectedGenre;
    default:
      return state;
  }
};

export default setGenreReducer;
