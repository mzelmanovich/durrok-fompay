import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import GridPhotoComponent from './elements/GridPhotoComponent.jsx';
import {mapToGridAlbums} from '../selectors/albums';

const AlbumsContainer = ({gridItems}) => {
  return (
    <div className="container center">
      <div className="row">
        <h1>Albums</h1>   
        {gridItems.map((data, i) => {
          return (
            <GridPhotoComponent {...data} key ={'grid' + i} />
          );
        })}
      </div>
  </div>
  );
};

const mapStateToProps = ({albums}) => {
  return {
    gridItems: mapToGridAlbums(albums)
  };
};


export default connect(mapStateToProps)(AlbumsContainer) ;

