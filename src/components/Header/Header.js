import React, { useState, useEffect } from 'react';
import headerLogo from '../../assets/icon1.png';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header>
        <div className="logo">
          <img src={headerLogo} alt="Logo" />
        </div>
        <nav className="nav-menu">
          <ul className="nav-items">
            <li>
              <a href="#">Item1</a>
            </li>
            <li>
              <a href="#">Item2</a>
            </li>
            <li>
              <a href="#">Item3</a>
            </li>
            <li>
              <a href="#">Item4</a>
            </li>
          </ul>
          <ul className="nav-actions">
            <li className="search">
              <a href="#">🔍</a>
            </li>
            <li className="cta-button-container">
              <button className="cta-button" type="button">
                Enroll Now
              </button>
            </li>
          </ul>
        </nav>
        <button
          className="menu-icon"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          type="button"
        >
          ☰
        </button>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`backdrop ${isMobileMenuOpen ? 'show' : ''}`}
        onClick={toggleMobileMenu}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') toggleMobileMenu();
        }}
        role="button"
        tabIndex={0}
        aria-label="Close mobile menu"
      />
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMobileMenu} type="button">
          ×
        </button>
        <ul className="nav-items">
          <li>
            <a href="#">Item1</a>
          </li>
          <li>
            <a href="#">Item2</a>
          </li>
          <li>
            <a href="#">Item3</a>
          </li>
          <li>
            <a href="#">Item4</a>
          </li>
        </ul>
        <ul className="nav-actions">
          <li className="search">
            <a href="#">🔍</a>
          </li>
          <li className="cta-button-container">
            <button className="cta-button" type="button">
              Enroll Now
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
