import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-light pt-5 pb-4">
        <div className="container text-md-left">
          <div className="row text-md-left">
    
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                BrandName
              </h5>
              <p>
                We provide high quality services and solutions for your business
                using the power of Bootstrap and React.
              </p>
            </div>

        
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Quick Links
              </h5>
              <p>
                <a href="#" className="text-light text-decoration-none">
                  Home
                </a>
              </p>
              <p>
                <a href="#" className="text-light text-decoration-none">
                  Features
                </a>
              </p>
              <p>
                <a href="#" className="text-light text-decoration-none">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#" className="text-light text-decoration-none">
                  Contact
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Contact
              </h5>
              <p>
                <i className="bi bi-house me-2"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="bi bi-envelope me-2"></i> info@example.com
              </p>
              <p>
                <i className="bi bi-phone me-2"></i> +1 234 567 88
              </p>
              <p>
                <i className="bi bi-printer me-2"></i> +1 234 567 89
              </p>
            </div>

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Follow us
              </h5>
              <a href="#" className="btn btn-outline-light btn-floating m-1">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-floating m-1">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-floating m-1">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-floating m-1">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-12 text-center">
              <p className="text-light">
                &copy; 2025 BrandName. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
