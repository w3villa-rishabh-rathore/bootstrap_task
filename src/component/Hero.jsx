import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4">We make your web product awesome.</h1>
            <p className="lead text-secondary mb-4">We are a bunch of imaginative and experimental souls and we make pretty awesome designs.</p>
            <Button variant="warning" size="lg" className="rounded-pill px-4">GET STARTED</Button>
          </Col>
          <Col lg={6}>
            <img 
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Team collaborating" 
              className="img-fluid rounded shadow" 
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;