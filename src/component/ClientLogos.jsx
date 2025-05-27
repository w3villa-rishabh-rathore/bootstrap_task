import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ClientLogos() {
  const logos = [
    { name: 'earth.io', color: '#6c757d' },
    { name: 'LightAi', color: '#6c757d' },
    { name: 'Muzia', color: '#6c757d' },
    { name: 'Universe', color: '#6c757d' },
    { name: 'velocity', color: '#6c757d' },
    { name: 'circle', color: '#6c757d' }
  ];

  return (
    <section className="py-5 bg-light">
      <Container className="py-4">
        <p className="text-center text-secondary mb-5">MODERN BRANDS WE WORKED WITH</p>
        <Row className="justify-content-center align-items-center mb-5">
          {logos.map((logo, index) => (
            <Col xs={4} md={2} className="text-center mb-4" key={index}>
              <div className="fw-bold text-secondary">{logo.name}</div>
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center align-items-center">
          {logos.map((logo, index) => (
            <Col xs={4} md={2} className="text-center mb-4" key={index}>
              <div className="fw-bold text-secondary">{logo.name}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ClientLogos;