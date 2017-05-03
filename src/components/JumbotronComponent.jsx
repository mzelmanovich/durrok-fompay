import React  from 'react';
import {Carousel} from 'react-bootstrap';
import { connect } from 'react-redux';

const JumbotronComponent = ({carrouselItems}) => {
  carrouselItems = carrouselItems || [];
  carrouselItems = carrouselItems.map(({src, h3, p}, i) => {
    return (<Carousel.Item key={i + 'carrousel'}>
	            <div className="jumbotron-image">
			      <img width={910} height={500} alt="900x500" src={src} />
			     </div>
			      <Carousel.Caption>
			        <h3>{h3}</h3>
			        <p>{p}</p>
			      </Carousel.Caption>
			    </Carousel.Item>);

  });

  return (<div className="jumbotron">
            <Carousel>
	            {carrouselItems}
          	</Carousel>
	</div>);
};

const mapStateToProps = ({jumbotron}) => {
  return {
    carrouselItems: jumbotron
  };
};
export default connect(mapStateToProps)(JumbotronComponent) ;

