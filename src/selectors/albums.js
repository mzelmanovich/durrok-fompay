import {createSelector} from 'reselect';

export const selectLoading = (state) => state.albums.loading;
export const selectAlbums = (state) => state.albums.allAlbums;
export const selectGenreId = (state, genreId) => genreId;

export const selectAlbumsByGenre = (state, genreId) => 
   selectAlbums(state).filter(album => album.genreId === genreId);

export const selectSingleAlbum = (state, albumId) =>   
    selectAlbums(state).filter(album => album.id === albumId);

// export const selectAlbumsByGenre = createSelector(
//     [selectAlbums, selectGenreId],
//     (albums, genreId) => albums.filter(album => album.genreId === genreId)
// );
