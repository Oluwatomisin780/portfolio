import React from 'react';

function Hero() {
  const customStyles = {
    '--width': 1640,
    '--height': 1840,
  };

  return (
    <section className="section hero" id="home" aria-label="hero">
      <div className="container">
        <figure
          className="hero-banner img-holder has-before"
          style={customStyles}
        >
          <img
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="heroimg"
          />
        </figure>

        <div className="hero-content">
          <p className="section-subtitle">Oluwa Tomisin</p>

          <h1 className="h1 hero-title">
            Creative Backend Developer In Nigeria
          </h1>

          <ul className="hero-list">
            <li>
              <a href="#" className="list-link">
                <span className="span">Backend Development</span>

                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="list-link">
                <span className="span">Frontend Development</span>

                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </li>
          </ul>

          <ul className="exp-list">
            <li className="list-item">
              <strong className="strong">3+</strong>

              <span className="span">
                Years of
                <br />
                Experience
              </span>
            </li>

            <li className="list-item">
              <strong className="strong">3K+</strong>

              <span className="span">
                Happy
                <br />
                Customers
              </span>
            </li>
          </ul>

          <a
            href="#portfolio"
            className="slide-down-btn"
            aria-label="scroll down"
          >
            <ion-icon name="arrow-down" aria-hidden="true"></ion-icon>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
