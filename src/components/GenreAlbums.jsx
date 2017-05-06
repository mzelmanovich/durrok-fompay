import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const GenreAlbums = ({albums}) => (
      <div className="container-fluid center-block">
        <div className="col-xs-12">
          {albums.map(({ id, imgURL, name }) => (
              <div key={id} className="col-xs-4 thumb center-block">
                <Link to={`/albums/${id}`}><img src={imgURL} className="img-responsive center-block" /></Link>
                <Link to={`/albums/${id}`} className="col-xs-12" style={{textAlign: 'center', fontSize: '20px'}}>{name}</Link>
              </div>
            ))}
        </div>
      </div>
);


const mapStateToProps = ({albums}) => ({
  albums
});

// const mapDispatchToProps = (dispatch) => ({
//    loadAllAlbums: dispatch(loadAllAlbums()),
//});

export default connect(mapStateToProps)(GenreAlbums);