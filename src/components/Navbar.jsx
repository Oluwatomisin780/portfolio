import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isNavbarActive, setNavbarActive] = useState(false);
  const [isHeaderActive, setHeaderActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive((prevState) => !prevState);
  };

  const closeNavbar = () => {
    setNavbarActive(false);
  };

  const handleScroll = () => {
    setHeaderActive(window.scrollY > 100);
  };

  // Attach event listeners
  useEffect(() => {
    const handleNavToggleClick = () => {
      toggleNavbar();
    };

    const handleNavLinkClick = () => {
      closeNavbar();
    };

    const handleScrollEvent = () => {
      handleScroll();
    };

    const navToggler = document.querySelector('[data-nav-toggler]');
    const navLinks = document.querySelectorAll('[data-nav-link]');

    navToggler.addEventListener('click', handleNavToggleClick);

    navLinks.forEach((link) =>
      link.addEventListener('click', handleNavLinkClick)
    );

    window.addEventListener('scroll', handleScrollEvent);

    // Cleanup event listeners on component unmount
    return () => {
      navToggler.removeEventListener('click', handleNavToggleClick);
      navLinks.forEach((link) =>
        link.removeEventListener('click', handleNavLinkClick)
      );
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
      <div className="container">
        <a href="#" className="logo">
          Oluwa Tomisin
        </a>

        <nav className={`navbar ${isNavbarActive ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link" data-nav-link>
                Home
              </a>
            </li>

            <li>
              <a href="#portfolio" className="navbar-link" data-nav-link>
                Portfolio
              </a>
            </li>

            <li>
              <a href="#skills" className="navbar-link" data-nav-link>
                Skills
              </a>
            </li>

            <li>
              <a href="#timeline" className="navbar-link" data-nav-link>
                Timeline
              </a>
            </li>

            <li>
              <a href="#price" className="navbar-link" data-nav-link>
                Price
              </a>
            </li>

            <li>
              <a href="#news" className="navbar-link" data-nav-link>
                News
              </a>
            </li>

            <li>
              <a href="#contact" className="navbar-link" data-nav-link>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <button
          className={`nav-toggle-btn ${isNavbarActive ? 'active' : ''}`}
          aria-label="toggle menu"
          data-nav-toggler
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
