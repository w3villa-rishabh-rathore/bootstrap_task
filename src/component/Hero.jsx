import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Hero() {
  return (
    <section className="py-4 py-md-5 bg-light">
      <Container className="py-4 py-md-5">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-3 mb-md-0 px-2 px-md-5">
            <h1 className="fw-bold mb-3 mb-md-4 fs- fs-md-1">Welcome to Our Agency</h1>
            <p className="text-secondary mb-3 mb-md-4 fs-6 fs-md-5">
              We build digital products that help businesses grow.
            </p>
            <a href="#" className="btn btn-warning btn-lg">Get Started</a>
          </Col>
          <Col xs={12} md={6}>
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" alt="Hero" className="img-fluid rounded shadow-sm" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;