import React from 'react';
import { Container, Nav, Navbar as BootstrapNavbar, Button } from 'react-bootstrap';

function Navbar() {
  return (
    <BootstrapNavbar bg="white" expand="lg" className="py-3 shadow-sm">
      <Container>
        <BootstrapNavbar.Brand href="#home" className="fw-bold">BRANDNAME</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="px-3">Home</Nav.Link>
            <Nav.Link href="#about" className="px-3">About</Nav.Link>
            <Nav.Link href="#services" className="px-3">Services</Nav.Link>
            <Nav.Link href="#work" className="px-3">Work</Nav.Link>
            <Nav.Link href="#contact" className="px-3">Contact Us</Nav.Link>
          </Nav>
          <div className="d-flex gap-2">
            <Button variant="outline-secondary" className="px-4">LOG IN</Button>
            <Button variant="warning" className="px-4">SIGN UP</Button>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;