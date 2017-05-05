import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Jumbotron from './elements/Jumbotron.jsx';
import {mapToJumbo} from '../selectors/albums';


const GenreContainer = ({carrouselItems}) => {
  return (
    <div className="container center">
        <Jumbotron carrouselItems={carrouselItems} />
      <div className="row">
          <div className="col-sm-10 col-md-6 grid-photo">
            <Link data-id= "1" to="/genres/1/albums">
                <img style={{opacity: 0.5}} src="http://www.billboard.com/files/styles/900_wide/public/media/EDM-workout-playlist-2017-billboard-summer-1548.jpg" className="col-sm-12" />
                <div className="caption">
                <p>Electronic</p>
                </div>
            </Link>
          </div>
          <div className="col-sm-10  col-md-6 each-genre">
            <Link data-id= "2" to="/genres/2/albums">
                <img style={{opacity: 0.5}} src="http://www.billboard.com/files/styles/1092x722/public/media/lady-gaga-rei-kawakubo-dress-2017-billboard-1548.jpg" className="col-sm-12" />
                <div className="caption">
                <p>POP</p>
                </div>
            </Link>
          </div>
          <div className="col-sm-10  col-md-6 each-genre">
            <Link data-id= "3" to="/genres/3/albums">
                <img style={{opacity: 0.5}} src="http://www.billboard.com/files/styles/article_main_image/public/media/guns-n-roses-press-photo-sept-live-billboard-1548.jpg" className="col-sm-12" />
                <div className="caption">
                <p>Rock</p>
                </div>
            </Link>
          </div>
          <div className="col-sm-10  col-md-6 each-genre">
            <Link data-id= "4" to="/genres/4/albums">
                <img style={{opacity: 0.5}} src="http://www.billboard.com/files/styles/article_main_image/public/media/Brad-Paisley-live-nov-2016-billboard-4-1548.jpg" className="col-sm-12" />
                <div className="caption">
                <p>COUNTRY</p>
                </div>
            </Link>
          </div>
      </div>
  </div>
  );
};

const mapStateToProps = ({albums}) => ({
  carrouselItems: mapToJumbo(albums)
});


export default connect(mapStateToProps)(GenreContainer) ;
