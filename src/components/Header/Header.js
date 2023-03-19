import React from 'react';
import logo from '../../assets/images/logo.png';
import "../Landing/styles/Header.css";

function Header() {
  function mobile() {
    // function for toggling mobile nav
  }

  return (
    <div className="nav">
      <ul className="nav-items" id="nav-items">
        <li onClick={mobile} className="icon fa fa-bars fa-2x"></li>
        <a href="#main">
          <li className="h">
            <div className="overlay"></div>
            Home
          </li>
        </a>
        <a href="https://forum.zerogcraft.uk">
          <li className="h">
            <div className="overlay"></div>
            Forums
          </li>
        </a>
        <div className="log">
          <img alt="ZeroG Network Logo" className="logo" src={logo} />
        </div>
        <a href="#games">
          <li className="h">
            <div className="overlay"></div>
            Games
          </li>
        </a>
        <a href="#contact">
          <li className="h">
            <div className="overlay"></div>
            Support
          </li>
        </a>
      </ul>
      <div className="mnav" id="mnav">
        <a href="#main">
          <li className="i">Home</li>
        </a>
        <a href="https://forum.zerogcraft.uk">
          <li className="i">Forums</li>
        </a>
        <a href="#games">
          <li className="i">Games</li>
        </a>
        <a href="#contact">
          <li className="i">Support</li>
        </a>
      </div>
    </div>
  );
}

export default Header;
