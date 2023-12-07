import React from 'react';

function Footer() {
  return (
    //     <!--
    // - #FOOTER
    //   -->

    <footer class="footer">
      <div class="container">
        <p class="copyright">
          &copy; 2023. All rights reserved by
          <a href="#" class="copyright-link">
            Tomi.
          </a>
        </p>

        <ul class="social-list">
          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-dribbble"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-tiktok"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
