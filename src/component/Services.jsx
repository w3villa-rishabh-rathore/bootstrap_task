import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Services() {
  return (
    <section className="py-4 py-md-5 bg-white">
      <Container>
        <h2 className="fw-bold mb-3 mb-md-4 fs-3 fs-md-1 text-center">Our Services</h2>
        <Row>
          <Col xs={12} md={4} className="mb-3 mb-md-0 px-2 px-md-3">
            <div className="p-3 p-md-4 bg-light rounded shadow-sm h-100">
              <h3 className="fs-5 fs-md-4 mb-2">Web Design</h3>
              <p className="fs-6 fs-md-5 text-secondary">Modern and responsive web design services.</p>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3 mb-md-0 px-2 px-md-3">
            <div className="p-3 p-md-4 bg-light rounded shadow-sm h-100">
              <h3 className="fs-5 fs-md-4 mb-2">Web Development</h3>
              <p className="fs-6 fs-md-5 text-secondary">Cutting-edge web development using the latest technologies.</p>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3 mb-md-0 px-2 px-md-3">
            <div className="p-3 p-md-4 bg-light rounded shadow-sm h-100">
              <h3 className="fs-5 fs-md-4 mb-2">SEO Services</h3>
              <p className="fs-6 fs-md-5 text-secondary">Improve your website's visibility on search engines.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;