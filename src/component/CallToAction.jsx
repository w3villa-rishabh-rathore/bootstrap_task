import React from 'react';
import { Container, Button } from 'react-bootstrap';

function CallToAction() {
  return (
    <section className="py-5 bg-warning">
      <Container className="text-center py-4">
        <h2 className="fw-bold mb-4 text-dark">Let's do something great together!</h2>
        <Button variant="light" size="undefined" className="rounded-pill px-4 shadow-sm">Get In Touch</Button>
      </Container>
    </section>
  );
}

export default CallToAction;