import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>

              <div class="dropdown">

              <li className="nav-item">
                <a className="nav-link" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  Features
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      CRM
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      E commerce
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Blockchain
                    </a>
                  </li>
                </ul>
              </li>
              </div>

              <li className="nav-item">
                <button type="button" className="btn btn-primary">
                  Notifications{" "}
                  <span className="badge text-bg-secondary">4</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
