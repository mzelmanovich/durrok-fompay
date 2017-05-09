import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const GenreAlbums = ({albums}) => (
      <div className="container-fluid center-block">
        <div className="col-xs-12">
          {albums.map(({ id, imgURL, name }) => (
              <div key={id}  className="col-xs-4 thumb center-block" id="genrealbum">
                <Link to={`/albums/${id}`}><img src={imgURL} className="img-responsive center-block" />
                                <div className="middle-sm">
                    <p className="text">View Details</p>
                    </div>
                </Link>
                <Link to={`/albums/${id}`} className="col-xs-12" style={{textAlign: 'center', fontSize: '20px'}}>{name}</Link>
              </div>
            ))}
        </div>
      </div>
);


const mapStateToProps = ({albums}) => ({
  albums
});

export default connect(mapStateToProps)(GenreAlbums);
