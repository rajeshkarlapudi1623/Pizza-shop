import Carousel from 'react-bootstrap/Carousel';
import One from '../assets/one.jpeg'
import Two from '../assets/two.jpeg'
import Three from '../assets/three.jpeg'
import { Container, Row, Col } from 'react-bootstrap';

const ScrollBar = () => {
  return (
    <Container fluid id='home'>
      <Row className='justify-content-center align-items-center scroll'>
        <Col lg={8}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img className='d-block w-100' src={One} alt=''/>
              <Carousel.Caption>
                <h3>Margherita</h3>
                <p className='d-none d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
            <img className='d-block w-100' src={Two} alt=''/>
              <Carousel.Caption>
                <h3>Cheese Pizza</h3>
                <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
            <img className='d-block w-100' src={Three} alt=''/>
              <Carousel.Caption>
                <h3>Pepporoni</h3>
                <p className='d-none d-sm-block'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
        <h2 className='display-5 mt-3'>Pizzas for Every Occasion!</h2>
        <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </Container>
  )
}

export default ScrollBar
