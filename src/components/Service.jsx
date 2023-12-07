import React from 'react';

function Service() {
  return (
    <section className="section pricing" id="price" aria-label="price">
      <div className="container">
        <div className="pricing-content">
          <p className="section-subtitle">My Services</p>

          <h2 className="h2 section-title">Service</h2>

          <p className="section-text">
            For more than 20 years our experts have been accomplishing enough
            with modern Web Development, new generation web and app programming
            language.
          </p>
        </div>

        <ul className="pricing-list">
          <li>
            <div className="pricing-card">
              <ion-icon name="logo-nodejs"></ion-icon>

              <h3 className="card-title">Node Js</h3>
            </div>
          </li>

          <li>
            <div className="pricing-card">
              <ion-icon name="logo-nodejs"></ion-icon>

              <h3 className="card-title">JavaScript</h3>
            </div>
          </li>

          <li>
            <div className="pricing-card">
              <ion-icon name="logo-html5"></ion-icon>

              <h3 className="card-title">HTML</h3>
            </div>
          </li>

          <li>
            <div className="pricing-card">
              <ion-icon name="logo-react"></ion-icon>

              <h3 className="card-title">React Js</h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Service;
