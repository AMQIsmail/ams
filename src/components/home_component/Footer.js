import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import {Nav, Navbar, Container, Row, Col} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../asset/css/style.css';

const Futer = () => {

    return (
<Fragment>
   <Navbar className='content_futer' collapseOnSelect expand="lg" bg="" variant="dark">
      <Container>                      
                <Nav className="me-auto">
                  <Nav.Link as={Link} to='/About'>About Us</Nav.Link>
                  <Nav.Link as={Link} to='/Contact'>Contact Us</Nav.Link>
                  <Nav.Link as={Link} to='/Terms_and_conditions'>Terms and Conditions</Nav.Link>
                  <Nav.Link as={Link} to='/Privacy_policy'>Privacy Policy</Nav.Link>
                 </Nav>
        </Container>
    </Navbar>
<div className='Powerwd'>
<Container>
    <Row>
        <Col lg={4} md={12} sm={12}></Col>
        <Col lg={4} md={12} sm={12}><Navbar><Nav><Nav.Link as={Link} to='/'>Powerwd by Md.Ismail Saheb</Nav.Link></Nav></Navbar></Col>
        <Col lg={4} md={12} sm={12}></Col>
    </Row>
</Container>
</div>
</Fragment>
    )
}
export default Futer;