import { Container, Row, Col } from "react-bootstrap"
import Center from '../assets/center.jpeg'

const BestSelling = () => {
  return (
    <section id="must-try">
      <div className="text-center my-5 py-3">
        <h2 className="display-5" style={{color:"orangered"}}><i className="bi bi-search-heart"></i> Pick of the Week!</h2>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col><img style={{width:"40rem"}} src={Center} alt="Pizza" /></Col>     {/*doubt*/}
          <Col>
            <h2 style={{fontSize:"3rem"}}>Double Cheese Fajita</h2>
            <p style={{fontSize:"1.2rem"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur nam asperiores nostrum? Incidunt recusandae ea odio provident!</p>
            <button className="buy"><i className="bi bi-basket-fill"></i><span>Buy Now</span></button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BestSelling

