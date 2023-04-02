import React from "react";
import "./Nav.css";
import { useState, useEffect } from 'react';
function Nav() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isTop = window.scrollY > 0;
      setScrolled(isTop);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header__left">
       <img src="https://18pixels.com/img/18pixels.png" alt="Shikshalink-logo" />
      </div>
      <div className="header__right">
        <span className="option">Home</span>
        <span className="option">About</span>
        <span className="option">Services</span>
        <span className="option">Projects</span>
      </div>
    </nav>
  );
}

export default Nav;
