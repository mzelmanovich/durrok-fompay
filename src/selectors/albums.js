import {hashHistory} from 'react-router';
export const selectLoading = (state) => state.albums.loading;
export const selectAlbums = (state) => state.albums.allAlbums;
export const selectGenreId = (state, genreId) => genreId;

export const selectAlbumsByGenre = (state, genreId) =>
   selectAlbums(state).filter(album => album.genreId === genreId);

export const selectSingleAlbum = (state, albumId) =>
    selectAlbums(state).filter(album => album.id === albumId);

export const mapToJumbo = (apiArr) =>
apiArr.map(data => ({
  src: data.jumboImg,
  h3: data.artist ? data.artist.name : 'UNKNOWN',
  p: data.name,
  click: () => hashHistory.push('/albums/' + data.id)
}));

export const mapToGridAlbums = (apiArr) => {
  if (apiArr.length > 0) {
    const newArray = apiArr[0].map(data => ({
      id: data.id,
      src: data.imgURL,
      p: data.name,
      to: `/albums/${data.id}`
    }));
    return newArray;
  }
  return [];
};

export const mapToReviews = (apiArr) => {

  if (apiArr.length > 0){
    const newArray = apiArr[0].map( data => ({
      content: data.content,
      firstName: data.firstName,
      rating: data.rating
    }));
    return newArray;
  }
  return [];
};


// export const selectAlbumsByGenre = createSelector(
//     [selectAlbums, selectGenreId],
//     (albums, genreId) => albums.filter(album => album.genreId === genreId)
// );
