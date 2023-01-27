import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { logout } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

const  NavigationBar = () => {

  const publicLinks = () => {

  };

  const authLinks = () =>{

  };

  return (
    <div>
      <Container>
          <Navbar bg="light" expand="lg">
            <Container className="mx-4 px-4">
              <Navbar.Brand href="#home">AdminSystem</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>
  )
}

export default NavigationBar