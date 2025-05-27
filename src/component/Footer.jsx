import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light">
      <Container className="py-5">
        <Row className="mb-4">
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="mb-4 fw-bold">BRANDNAME</h5>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget leo facilisis, gravida arcu ac, condimentum est.
            </p>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h6 className="mb-4 fw-bold">About</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Our Work</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Blog</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Contact Us</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h6 className="mb-4 fw-bold">Our Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Design</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Development</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Digital Marketing</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Web Hosting</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h6 className="mb-4 fw-bold">Conditions</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Terms</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Cookies</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Privacy</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="border-top py-4">
        <Container>
          <p className="small text-secondary mb-0">© 2025 Copyright Your Company Name. Designed by Brandname</p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;