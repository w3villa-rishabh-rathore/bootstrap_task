import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Layout, Code2, BarChart2, Lightbulb } from 'lucide-react';

function Services() {
  const services = [
    { 
      title: 'Design', 
      icon: <Layout size={36} className="mb-3 text-warning" />,
      description: 'Beautiful and functional UI/UX design'
    },
    { 
      title: 'Development', 
      icon: <Code2 size={36} className="mb-3 text-warning" />,
      description: 'Modern web development solutions'
    },
    { 
      title: 'Marketing', 
      icon: <BarChart2 size={36} className="mb-3 text-warning" />,
      description: 'Strategic digital marketing campaigns'
    },
    { 
      title: 'Strategy', 
      icon: <Lightbulb size={36} className="mb-3 text-warning" />,
      description: 'Business strategy and consulting'
    }
  ];

  return (
    <section className="py-5 bg-light">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-4">Our Services</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: '700px' }}>
            Websites at justo est. Sed fringibus at ex a blandit. Etiam sit accumsan libero. Maecenas vitae
            potentia ipsum, eget venenatis ante. Interdum et malesuada fames.
          </p>
          <p className="text-secondary mx-auto" style={{ maxWidth: '700px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget leo facilisis, gravida arcu ac, 
            condimentum est.
          </p>
        </div>
        <Row>
          {services.map((service, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <Card className="h-100 border-0 shadow-sm text-center p-4 hover-shadow transition">
                <Card.Body>
                  <div className="text-center">
                    {service.icon}
                  </div>
                  <h5 className="card-title mb-3">{service.title}</h5>
                  <p className="text-secondary">{service.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;