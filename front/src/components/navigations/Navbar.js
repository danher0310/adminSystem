import React from 'react'
import { Container, Navbar } from 'react-bootstrap';

function NavigationBar() {
  return (
    <div>
       <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar