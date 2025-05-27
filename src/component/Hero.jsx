import React from 'react'

const Hero = () => {
  return (
    <>
    <header className="bg-primary text-white d-flex align-items-center" style={{ minHeight: '100vh' }}>
  <div className="container">
    <div className="row align-items-center">
      
      <div className="col-lg-6 text-center text-lg-start">
        <h1 className="display-3 fw-bold">Boost Your Business with Bootstrap</h1>
        <p className="lead mt-3">
          Build fully responsive web apps using React and Bootstrap 5 — no custom CSS needed.
        </p>
        <div className="mt-4">
          <a href="#" className="btn btn-warning btn-lg me-2">Get Started</a>
          <a href="#" className="btn btn-outline-light btn-lg">Learn More</a>
        </div>
      </div>

      <div className="col-lg-6 text-center mt-4 mt-lg-0">
        <img
          src="https://picsum.photos/1920/1000?random=4"
          className="img-fluid rounded shadow"
          alt="Hero visual"
        />
      </div>

    </div>
  </div>
</header>



    </>
  )
}

export default Hero
