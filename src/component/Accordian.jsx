import React from 'react';

const Accordion = () => {
  const accordionItems = [
    {
      id: 'one',
      title: 'What services do you offer?',
      content:
        'We provide web development, cloud hosting, and SEO optimization tailored to your business needs.',
    },
    {
      id: 'two',
      title: 'Is support available 24/7?',
      content:
        'Yes, our support team is available 24/7 to assist you with any queries or issues you may encounter.',
    },
    {
      id: 'three',
      title: 'How can I get started?',
      content:
        'You can sign up through our website or contact our sales team for a custom onboarding experience.',
    },
  ];

  return (
    <>
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {accordionItems.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`flush-heading-${item.id}`}>
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse-${item.id}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse-${item.id}`}
                >
                  <i className="bi bi-question-circle me-2 text-primary"></i>
                  {item.title}
                </button>
              </h2>
              <div
                id={`flush-collapse-${item.id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`flush-heading-${item.id}`}
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-5 text-center bg-primary text-white">
  <div className="container">
    <h2 className="fw-bold mb-3">Ready to get started?</h2>
    <p className="lead mb-4">Join hundreds of happy customers growing with us.</p>
    <a href="#contact" className="btn btn-light btn-lg">Get Started Now</a>
  </div>
</section>

<section className="py-5 bg-light">
  <div className="container text-center">
    <div className="row g-4">
      <div className="col-md-4">
        <h1 className="display-5 fw-bold text-primary">1K+</h1>
        <p className="text-muted">Clients Served</p>
      </div>
      <div className="col-md-4">
        <h1 className="display-5 fw-bold text-primary">99.9%</h1>
        <p className="text-muted">Uptime Guarantee</p>
      </div>
      <div className="col-md-4">
        <h1 className="display-5 fw-bold text-primary">24/7</h1>
        <p className="text-muted">Support Access</p>
      </div>
    </div>
  </div>
</section>

<section className="py-5">
  <div className="container text-center">
    <h2 className="fw-bold mb-5">What Our Clients Say</h2>
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <p className="card-text fst-italic">"Amazing service, fast and reliable! Our traffic doubled in just a month."</p>
            <h5 className="card-title mt-3 mb-0">— Sarah Williams</h5>
            <small className="text-muted">CEO, TechGrow</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-5 bg-light" id="contact">
  <div className="container">
    <h2 className="fw-bold text-center mb-4">Contact Us</h2>
    <form className="row g-3">
      <div className="col-md-6">
        <input type="text" className="form-control" placeholder="Your Name" />
      </div>
      <div className="col-md-6">
        <input type="email" className="form-control" placeholder="Email Address" />
      </div>
      <div className="col-12">
        <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
      </div>
      <div className="col-12 text-center">
        <button type="submit" className="btn btn-primary px-5">Send Message</button>
      </div>
    </form>
  </div>
</section>


    </>
  );
};

export default Accordion;
