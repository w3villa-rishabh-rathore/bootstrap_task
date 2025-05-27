import React from "react";

const Card = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Responsive, scalable and lightning-fast websites.",
      img: "https://picsum.photos/seed/web/400/200",
    },
    {
      title: "SEO Optimization",
      desc: "Rank higher and grow organically with expert SEO.",
      img: "https://picsum.photos/seed/seo/400/200",
    },
    {
      title: "Cloud Hosting",
      desc: "Reliable, secure and scalable cloud infrastructure.",
      img: "https://picsum.photos/seed/cloud/400/200",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Our Services</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={service.img}
                  className="card-img-top"
                  alt={service.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{service.title}</h5>
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
