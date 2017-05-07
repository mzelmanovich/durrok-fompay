import {Link} from 'react-router';
import React from 'react';

const GridPhotoComponent = ({to, src, p, id}) => (
    <div className="GridPhoto">
      <div className="col-sm-10 col-md-6 each-photo">
            <Link data-id= {id} to={to}>
                <img style={{height: 370, width: 560}} src={src} className="col-sm-12" />
                <div className="middle">
                    <p className="text">View Details</p>
                    </div>
                <div className="caption">
                <p>{p}</p>
                </div>
            </Link>
    </div>
    </div>
);

export default GridPhotoComponent;
