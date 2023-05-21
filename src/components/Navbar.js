import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.jpg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container navbar-container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link nav-item-large" activeClassName="active" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-item-large" activeClassName="active" to="/geoapi">Search </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-item-large" activeClassName="active" to="/AboutUs">About Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
