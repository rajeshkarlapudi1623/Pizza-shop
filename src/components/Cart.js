import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Cart = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Button style={{backgroundColor:"orangered", border:"none"}} onClick={()=>setShow(!show)} className="me-2">Cart</Button>
      <Offcanvas show={show} onHide={()=>setShow(!show)} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Added Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body></Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Cart
