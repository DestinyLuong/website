import logo from '../logo.svg';
import Carousel from 'react-bootstrap/Carousel';

export function Scroller() {
    return (
      <div className='carousel'>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-50"
                src={require('../images/profile.jpg')}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-50"
                src={require('../images/profile.jpg')}
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-50"
                src={require('../images/profile.jpg')}
                alt="Third slide"
              />
      
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  };
