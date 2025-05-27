import React from 'react';

const Feature = () => {
  const features = [
    {
      title: 'Fast Performance',
      desc: 'Blazing-fast load times and optimized delivery.',
      img: 'https://picsum.photos/seed/performance/400/200', // Landscape size
    },
    {
      title: 'Secure & Reliable',
      desc: 'Your data is safe with our world-class security.',
      img: 'https://picsum.photos/seed/security/400/200',
    },
    {
      title: '24/7 Support',
      desc: 'Anytime, any day – we’re always available.',
      img: 'https://picsum.photos/seed/support/400/200',
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Our Features</h2>
        <div className="row text-center">
          {features.map((feature, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="img-fluid rounded-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
