import axios from "axios";
const GET_ALL_ALBUMS = 'GET_ALL_ALBUMS';
const GET_SINGLE_ALBUMS = 'GET_SINGLE_ALBUMS';
const GET_SEARCH_ALBUMS = 'GET_SEARCH_ALBUMS';
const SET_LOADING = 'SET_LOADING';

const defaultState = {
  loading: false,
  allAlbums: [],
  selectedAlbums: {},
  searchResultAlbums: []
};



const reducer = (state = defaultState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_LOADING: 
      newState.loading = action.loading;
      break;

    case GET_ALL_ALBUMS:
      newState.allAlbums = action.allAlbums;
      break;

    case GET_SINGLE_ALBUMS:
      newState.selectedAlbums = action.selectedAlbums;
      break;

    case GET_SEARCH_ALBUMS:
      newState.searchResultAlbums = action.searchResultAlbums;
      break;

    default:
      return state;
  }

  return newState;
};

export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});

export const getAllAlbums = allAlbums => ({
  type: GET_ALL_ALBUMS,
  allAlbums
});

export const getSingleAlbums = selectedAlbums => ({
  type: GET_SINGLE_ALBUMS,
  selectedAlbums
});

export const getSearchAlbums = searchResultAlbums => ({
  type: GET_SEARCH_ALBUMS,
  searchResultAlbums
});

export const loadAllAlbums = () => dispatch => {
  dispatch(setLoading(true));
  axios
    .get("/api/albums")
    .then(albums => {
      dispatch(getAllAlbums(albums.data))
      dispatch(setLoading(false));
    })
    .catch(console.error);
};

export const loadSingleAlbums = albumId => dispatch =>
  axios
    .get(`/api/albums/${albumId}`)
    .then(selectedAlbums => dispatch(getSingleAlbums(selectedAlbums.data)))
    .catch(console.error);

// export const loadSearchAlbums = (searchAlbumName) =>
//   dispatch => {
//     let uri = `/api/albums?${albumName ? 'name='+ searchAlbumName : ''}`
//     axios.get(uri)
//         .then((albums) => dispatch(getSearchAlbums(albums.data)))
//         .catch(console.error)
//   }

export default reducer;
