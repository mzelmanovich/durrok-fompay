import {Link} from 'react-router';
import React from 'react';

const GridPhotoComponent = ({to, src, p, id}) => (
      <div className="col-sm-10 col-md-6 each-genre">
            <Link data-id= {id} to={to}>
                <img style={{opacity: 0.5, height: 370, width: 560}} src={src} className="col-sm-12" />
                <div className="caption">
                <p>{p}</p>
                </div>
            </Link>
    </div>
);

export default GridPhotoComponent;
