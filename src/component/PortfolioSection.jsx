import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function PortfolioSection({ title, description, imageSrc, portfolioType, wrap }) {
  return (
    <section className="py-4 py-md-5 bg-white">
      <Container className="py-4 py-md-5">
        <Row className={`align-items-center ${wrap === 'reverse' ? 'flex-row-reverse' : ''}`}>
          <Col xs={12} lg={6} className="mb-3 mb-lg-0">
            <img src={imageSrc} alt="Portfolio" className="img-fluid rounded shadow-sm" />
          </Col>
          <Col xs={12} lg={6} className="px-2 px-md-5">
            <p className="text-secondary small mb-2 mb-md-3">{portfolioType}</p>
            <h2 className="fw-bold mb-3 mb-md-4 fs-4 fs-md-2">{title}</h2>
            <p className="text-secondary mb-3 mb-md-4 fs-6 fs-md-5">{description}</p>
            <a href="#" className="text-warning text-decoration-none fw-bold fs-6">Learn More →</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PortfolioSection;