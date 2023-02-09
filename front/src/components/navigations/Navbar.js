import React, {Fragment} from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { logout } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';


function  NavigationBar  ({isAuthenticated, user}) {
  const dispatch = useDispatch()

  const logoutHandler = (e) =>{
    dispatch(logout())
  }
  
  const publicLinks = () => (
    <Fragment>
      <Nav.Link to="/register">Sing up</Nav.Link>
      <Nav.Link href="/login">Sing in</Nav.Link> 
    </Fragment>

  );

  const authLinks = () =>(
    <Fragment>
      <NavDropdown title={user.first_name} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={logoutHandler} >
                Logout
              </NavDropdown.Item>
              
      </NavDropdown>
    </Fragment>

  );
 

  return (
    <div>
      
      
          <Navbar bg="light" expand="lg">
            <Container className="mx-4 px-4">
              <Navbar.Brand href="#home">AdminSystem</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                {isAuthenticated && user != null ? authLinks() : publicLinks()}
                
                     
              </Nav>
               
              </Navbar.Collapse>
            </Container>
          </Navbar>
        
      </div>
  )
}

export default NavigationBar