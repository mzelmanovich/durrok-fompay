import React  from 'react';
import {Carousel} from 'react-bootstrap';

const JumbotronComponent = () => (

            <div className="jumbotron">
            <Carousel>
	            <Carousel.Item>
	            <div className="jumbotron-image">
			      <img width={910} height={500} alt="900x500" src="https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/03/Gorillaz_2017-920x584.jpg" />
			     </div>
			      <Carousel.Caption>
			        <h3>Gorillaz</h3>
			        <p>2017 New Album from $9.99</p>
			      </Carousel.Caption>
			    </Carousel.Item>   
             <Carousel.Item>
			    <div className="jumbotron-image">
			    <img width={950} height={500} alt="1000x500" src="http://assets.bonappetit.com/photos/59035f282278cd3dbd2c0d99/16:9/w_1200,c_limit/katy-perry-bon-appetit.jpg" />
			    </div>
			      <Carousel.Caption className="jumbotron-caption">
			        <h3>Katy Perry</h3>
			        <p>Bon Appetit</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			    <div className="jumbotron-image">
			      <img width={900} height={500} alt="900x500" src="https://s-media-cache-ak0.pinimg.com/736x/02/f6/e6/02f6e6495ea7d9813fe5dad14c669379.jpg" />
			     </div>
			      <Carousel.Caption>
			        <h3>The Beatles</h3>
			        <p>"Sgt. Pepper's Lonly Hearts Club Band'"</p>
			      </Carousel.Caption>
			    </Carousel.Item>
                 </Carousel>
			 </div>
    )

export default JumbotronComponent ;

