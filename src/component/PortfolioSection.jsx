import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function PortfolioSection({ title, description, imageSrc, imagePosition, portfolioType, wrap }) {
  return (
    <section className="py-5 bg-white">
      <Container className="py-5">
        <Row className={`align-items-center ${wrap === 'reverse' ? 'flex-row-reverse' : ''}`}>
          <Col lg={6} className="mb-4 mb-lg-0">
            <img src={imageSrc} alt="Portfolio" className="img-fluid" />
          </Col>
          <Col lg={6} className="px-lg-5">
            <p className="text-secondary small mb-3">{portfolioType}</p>
            <h2 className="fw-bold mb-4">{title}</h2>
            <p className="text-secondary mb-4">{description}</p>
            <a href="#" className="text-warning text-decoration-none fw-bold">Learn More →</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PortfolioSection;