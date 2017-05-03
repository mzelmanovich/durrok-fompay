import {SET_ALBUMS} from '../constants';

export const setAlbums = (data) => {
  return {
    type: SET_ALBUMS,
    data
  };
};
