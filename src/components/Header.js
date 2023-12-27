import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary header">
      <Container>
        <Navbar.Brand href="#home"><h2 style={{color:"orangered"}}><i className="bi bi-yelp"></i>Pizza Shop</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className='fw-bold'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#must-try">Must Try</Nav.Link>
            <Nav.Link href="#contact">Contact us</Nav.Link>
            <Cart/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
