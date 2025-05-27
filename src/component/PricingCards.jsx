import React from "react";

const PricingCards = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2>Pricing Plans</h2>
        <p className="text-muted">Simple and transparent pricing built for every team</p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        
        <div className="col">
          <div className="card h-100 text-center">
            <div className="card-header">
              <h4 className="my-0">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $0<small className="text-muted">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>✔ 1 user</li>
                <li>✔ 5GB storage</li>
                <li>✔ Community support</li>
                <li>✖ No integrations</li>
                <li>✖ No custom domains</li>
              </ul>
              <button className="btn btn-outline-primary w-100">
                Sign up for free
              </button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-center border-primary">
            <div className="card-header bg-primary text-white">
              <h4 className="my-0">Pro</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $15<small className="text-muted">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>✔ Up to 5 users</li>
                <li>✔ 50GB secure cloud storage</li>
                <li>✔ Email and live chat support</li>
                <li>✔ Basic API access</li>
                <li>✔ Integration with Slack & Google Drive</li>
              </ul>
              <button className="btn btn-primary w-100">Get started</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-center">
            <div className="card-header">
              <h4 className="my-0">Enterprise</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $29<small className="text-muted">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>✔ Unlimited users</li>
                <li>✔ 100GB+ scalable storage</li>
                <li>✔ Dedicated account manager</li>
                <li>✔ Priority 24/7 support</li>
                <li>✔ Custom integrations & APIs</li>
                <li>✔ Advanced analytics & reports</li>
                <li>✔ SLA & compliance tools</li>
              </ul>
              <button className="btn btn-outline-primary w-100">
                Contact us
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PricingCards;
