import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Jumbotron from './elements/Jumbotron.jsx';
import {mapToJumbo} from '../selectors/albums';
import GridPhotoComponent from './elements/GridPhotoComponent.jsx';
import {mapToGrid} from '../selectors/genres';

const GenreContainer = ({carrouselItems, gridItems}) => {
  return (
    <div className="container center">
        <Jumbotron carrouselItems={carrouselItems} />
      <div className="row">
        {gridItems.map((data, i) => {
          return (
            <GridPhotoComponent {...data} key ={'grid' + i} />
          );
        })}
      </div>
  </div>
  );
};

const mapStateToProps = ({albums, genres}) => {
  return {
    carrouselItems: mapToJumbo(albums),
    gridItems: mapToGrid(genres)
  };
};


export default connect(mapStateToProps)(GenreContainer) ;
