import React from "react";
import "./Nav.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__link">
          <img src="https://18pixels.com/img/18pixels.png" alt="logo"></img>
        </Link>
        <nav className="primary-navigation">
          <ul role="list" class="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
           
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
