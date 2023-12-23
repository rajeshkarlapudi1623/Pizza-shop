import { Container, Row, Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pizza from '../assets/pizza.jpeg';
import { useState } from "react";

const Menu = () => {
  const [menu] = useState([1,2,3,4,5,6])
  return (
    <section id="menu" className="bg-light">
      <Container>
        <div className="text-center">
          <h3 className="my-3 py-5" style={{color:"orangered"}}>Treat yourself with our Everyday Menu<i className="bi bi-tiktok"></i></h3>
        </div>
        <Row>
          {menu.map((item)=>{
            return (
              <Col md={6} lg={4} key={item}>
                <Card className="mt-4 mx-2" style={{width:"21rem"}}>
                  <Card.Img variant="top" src={Pizza} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card content.
                    </Card.Text>
                    <Button variant="primary" style={{background:"orangered"}}>Add to Basket</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
          
        </Row>
      </Container>
    </section>
  )
}

export default Menu
