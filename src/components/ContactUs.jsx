import React from 'react';

function ContactUs() {
  return (
    <section className="section contact" id="contact" aria-label="contact">
      <div className="container">
        <div className="contact-content">
          <p className="section-subtitle">Contact</p>

          <h2 className="h2 section-title">Get In Touch</h2>

          <p className="section-text">
            Please fill out the form on this section to contact with me. Or call
            between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
          </p>

          <ul className="contact-list">
            <li className="contact-item">
              <ion-icon name="location-outline" aria-hidden="true"></ion-icon>

              <address className="contact-link">Lagos , Nigeria</address>
            </li>

            <li className="contact-item">
              <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

              <a href="tel:+07742691291" className="contact-link">
                +234 0769 988 789
              </a>
            </li>

            <li className="contact-item">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

              <a href="mailto:smith@gmail.com" className="contact-link">
                tomisinoyediran@gmail.com
              </a>
            </li>

            <li className="contact-item">
              <ion-icon name="globe-outline" aria-hidden="true"></ion-icon>

              <a href="www.domain.com" className="contact-link">
                www.somthing.com
              </a>
            </li>
          </ul>
        </div>

        <form action="" className="contact-form">
          <input
            type="text"
            name="name"
            aria-label="name"
            placeholder="Name"
            required
            className="input-field"
          />

          <input
            type="email"
            name="email_address"
            aria-label="email"
            placeholder="Email"
            required
            className="input-field"
          />

          <textarea
            name="message"
            aria-label="message"
            placeholder="Message"
            required
            className="input-field"
          ></textarea>

          <button type="submit" className="submit-btn">
            <span className="span">Submit</span>

            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
