import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-light bg-dark" >
      <div className="container p-4">
        
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-google"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-github"></i>
          </a>
        </section>

        <section>
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2 fw-bold">Sign up for our newsletter</p>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-outline mb-4">
                  <input type="email" id="form5Example24" className="form-control" />
                  <label className="form-label text-light" htmlFor="form5Example24">
                    Email address
                  </label>
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
            eum harum corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>

        <section>
          <div className="row">
            {[1, 2, 3, 4].map((col, i) => (
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0" key={i}>
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li><a className="text-light text-decoration-none" href="#!">Link 1</a></li>
                  <li><a className="text-light text-decoration-none" href="#!">Link 2</a></li>
                  <li><a className="text-light text-decoration-none" href="#!">Link 3</a></li>
                  <li><a className="text-light text-decoration-none" href="#!">Link 4</a></li>
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

  
      <div className="text-center p-3" style={{ backgroundColor: "#1e1e1e" }}>
        © 2025 Copyright:{" "}
        <a className="text-light fw-bold text-decoration-none" href="#">
          Bootstrap
        </a>
      </div>
    </footer>
  );
};

export default Footer;
