import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../asset/css/style.css';
import amq from '../../asset/img/logo/amq.png';

//bootstrap bg color class (dark light primary )
 const Navberr = () => {
   return (
<Fragment>
   <Navbar className='navBack' collapseOnSelect expand="lg" bg="" variant="dark">
      <Container>                      
         <Navbar.Brand as={Link} to='/'><img className='manLogo' src={amq} /></Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to='/'>Home</Nav.Link>
                  <Nav.Link as={Link} to='/About'>About Us</Nav.Link>
                  <Nav.Link as={Link} to='/Contact'>Contact Us</Nav.Link>
                     <NavDropdown title="More" id="collasible-nav-dropdown">
                         <NavDropdown.Item as={Link} to='/Terms_and_conditions'>Terms and Conditions</NavDropdown.Item>
                         <NavDropdown.Item as={Link} to='/Privacy_policy'>Privacy Policy</NavDropdown.Item>
                         <NavDropdown.Divider />
                         <NavDropdown.Item as={Link} to='/Practice'>p</NavDropdown.Item>
                     </NavDropdown>
                 </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</Fragment>
   )
}
 export default Navberr;





{/* <Fragment>
    <Navbar className='navBack' bg="" variant="dark">
          <Container>
              <Navbar.Brand as={Link} to='/'><img className='manLogo' src={amq} /></Navbar.Brand>
              <Nav className="me-auto">
                  <Nav.Link as={Link} to='/'>Home</Nav.Link>
                  <Nav.Link as={Link} to='/About'>About</Nav.Link>
                  <Nav.Link as={Link} to='/Contact'>Contact</Nav.Link>
              </Nav>
          </Container>
    </Navbar> 
</Fragment>  */}




//import { Link, Outlet} from "react-router-dom";
//     <Fragment>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/About">About</Link>
//           </li>
//           <li>
//             <Link to="/Contact">Contact</Link>
//           </li>
//           </ul>
//       </nav>
//       <Outlet /> 
//     </Fragment>