import {Link} from 'react-router';
const GridPhotoComponent = ({to, src, p}) => (
      <div className="col-sm-10 col-md-6 grid-photo">
            <Link data-id= "1" to={to}>
                <img style={{opacity: 0.5}} src={src} className="col-sm-12" />
                <div className="caption">
                <p>{p}</p>
                </div>
            </Link>
    </div>
);

export default GridPhotoComponent;
