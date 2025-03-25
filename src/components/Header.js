import React, { useEffect } from 'react';
import headerLogo from '../assets/icon1.png';
import { useRef } from 'react';

const Header = () => {
  const menuIconRef = useRef(null);
  const navMenuRef = useRef(null);

  useEffect(() => {
    const menuIcon = menuIconRef.current;
    const navMenu = navMenuRef.current;
    
    const toggleMenu = () => {
      navMenu.classList.toggle('open');
    };

    const handleResize = () => {
      if (window.innerWidth > 850) {
        navMenu.classList.remove('open');
      }
    };

    menuIcon.addEventListener('click', toggleMenu);
    window.addEventListener('resize', handleResize);

    return () => {
      menuIcon.removeEventListener('click', toggleMenu);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <header>
    <div class="logo">
      <img src={headerLogo} alt="Logo" />
    </div>
    <nav class="nav-menu" ref={navMenuRef}>
      <ul class="nav-items">
        <li><a href="#">Item1</a></li>
        <li><a href="#">Item2</a></li>
        <li><a href="#">Item3</a></li>
        <li><a href="#">Item4</a></li>
      </ul>
      <ul class="nav-actions">
        <li class="search"><a href="#">🔍</a></li>
        <li class="cta-button-container"><button class="cta-button">Enroll Now</button></li>
      </ul>
    </nav>
    <div class="menu-icon" id="menu-icon" ref={menuIconRef}>☰</div>
  </header>
  )
}

export default Header