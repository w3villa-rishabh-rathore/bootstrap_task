import React from "react";

const Card = () => {
  const services = [
    {
      title: "Web Development",
      desc: "High-quality websites using modern technologies with responsive design.",
      icon: "bi-code-slash",
    },
    {
      title: "SEO Optimization",
      desc: "Improve your visibility and ranking on search engines effectively.",
      icon: "bi-graph-up-arrow",
    },
    {
      title: "Cloud Hosting",
      desc: "Reliable and scalable hosting solutions for your growing business.",
      icon: "bi-cloud-upload",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Services</h2>
          <p className="text-muted">Powerful tools to grow your business</p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body text-center">
                  <div className="mb-4">
                    <i
                      className={`bi ${service.icon} text-primary display-4`}
                    ></i>
                  </div>
                  <h5 className="card-title fw-semibold">{service.title}</h5>
                  <p className="card-text">{service.desc}</p>
                  <a href="#" className="btn btn-outline-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
