import React from 'react';

const Feature = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Features</h2>
          <p className="text-muted">What makes us different</p>
        </div>

        <div className="row text-center">
          {/* Feature One */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <i className="bi bi-speedometer2 display-4 text-primary mb-3"></i>
                <h5 className="card-title fw-semibold">Fast Performance</h5>
                <p className="card-text">
                  Experience blazing fast load times and seamless navigation on all devices.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Two */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <i className="bi bi-shield-check display-4 text-success mb-3"></i>
                <h5 className="card-title fw-semibold">Secure Platform</h5>
                <p className="card-text">
                  We prioritize security to ensure your data is safe and your platform reliable.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Three */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <i className="bi bi-gear-wide-connected display-4 text-warning mb-3"></i>
                <h5 className="card-title fw-semibold">Easy Integration</h5>
                <p className="card-text">
                  Easily integrate with your favorite tools and services without hassle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
