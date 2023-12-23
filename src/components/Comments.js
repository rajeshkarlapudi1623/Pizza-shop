import { Container, Row, Col } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Comments = () => {
  return (
    <section id="contact" className="bg-light">
      <div className="text-center my-5 py-3">
        <h3 style={{color:"orangered"}}>Comments <i className="bi bi-chat-left-heart"></i></h3>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <InputGroup>
                <InputGroup.Text id="basic-addon1"><i className="bi bi-envelope-open"></i></InputGroup.Text>
                <FloatingLabel controlId="floatingInput" label="Email address">
                <Form.Control type="email" placeholder="name@example.com" /></FloatingLabel>
              </InputGroup>
              <InputGroup className="mt-3">
                <InputGroup.Text id="basic-addon1"><i className="bi bi-person"></i></InputGroup.Text >
                <FloatingLabel controlId="floatingInput" label="Name">
                <Form.Control type="email" placeholder="name" /></FloatingLabel>
              </InputGroup>
              <FloatingLabel controlId="floatingTextarea"label="Comments"className=" mt-3 mb-3">
                <Form.Control as="textarea" placeholder="Leave a comment here" />
              </FloatingLabel>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Comments
