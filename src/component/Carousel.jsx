import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src="https://picsum.photos/1920/1000?random=1"
            className="d-block w-100"
            alt="Slide 1"
          />
          <div className="carousel-caption d-flex flex-column justify-content-center h-100">
            <h1 className="display-4 fw-bold">Welcome to Our Website</h1>
            <p className="lead">Build responsive UIs with Bootstrap and React</p>
            <a href="#" className="btn btn-warning btn-lg mt-3">Get Started</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src="https://picsum.photos/1920/1000?random=2"
            className="d-block w-100"
            alt="Slide 2"
          />
          <div className="carousel-caption d-flex flex-column justify-content-center h-100">
            <h1 className="display-4 fw-bold">Fully Responsive Design</h1>
            <p className="lead">Look great on every device</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src="https://picsum.photos/1920/1000?random=3"
            className="d-block w-100"
            alt="Slide 3"
          />
          <div className="carousel-caption d-flex flex-column justify-content-center h-100">
            <h1 className="display-4 fw-bold">No Custom CSS Needed</h1>
            <p className="lead">Powered by Bootstrap 5 utility classes</p>
          </div>
        </div>

      </div>

      {/* Carousel controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
