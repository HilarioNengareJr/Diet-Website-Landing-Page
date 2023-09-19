import React, { useState } from "react";
import { CloseOutline, MenuOutline } from 'react-ionicons';
import './Navbar.css';

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const isClicked = () => {
    setIsActive(true);
  }

  const isClosed = () => {
    setIsActive(false);
  }

  return (
    <header className="header" data-header="">
      <div className="container">

        <a href="#" className="logo">
          Fit<span className="span">.</span>
        </a>

        <nav className={ isActive ? "navbar active" : "navbar"}>

          <button className="nav-toggle-btn" aria-label="close menu" onClick={isClosed}>
            <CloseOutline
              color={'var(--black-chocolate)'}
              height="35px"
              width="35px"
              aria-hidden="true" role="img" className="md hydrated"
            />
          </button>

          <ul className="navbar-list">

            <li className="navbar-item">
              <a href="#home" className="navbar-link" onClick={isClosed}>Home</a>
            </li>

            <li className="navbar-item">
              <a href="#about" className="navbar-link" onClick={isClosed}>About Us</a>
            </li>

            <li className="navbar-item">
              <a href="#course" className="navbar-link" onClick={isClosed}>All Course</a>
            </li>

            <li className="navbar-item">
              <a href="#blog" className="navbar-link" onClick={isClosed}>Blog</a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link" onClick={isClosed}>Contact</a>
            </li>

          </ul>

        </nav>

        <a href="#" className="btn btn-primary">Sign Up</a>

        <button className="nav-toggle-btn" aria-label="open manu" onClick={isClicked}>
          <MenuOutline
            color={'var(--black-chocolate)'}
            height="35px"
            width="35px"
            aria-hidden="true" role="img" className="md hydrated"
          />
        </button>

        <div className={ isActive ? "overlay active" : "overlay" }></div>

      </div>
    </header>
  );
}

export default Navbar;