// Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
// Internals
import './index.css';


const Navbar = () => (
  <nav className="navbar">
    <div className="nav-links">
      <ul>
        <li><NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/women">About Us</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/men">Contact Us</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li style={{ marginTop: "1rem" }} ><NavLink to="/profile"><i  className="far fa-user ms-3 me-3"></i></NavLink></li>
      </ul>
    </div>
    <div className="shopping-cart">
      {/* <NavLink to="/login">Login</NavLink>
      <NavLink to="/profile"><i className="far fa-user ms-3 me-3"></i></NavLink> */}
      <NavLink to="/cart"><Icon medium>shopping_cart</Icon></NavLink>
    </div>
  </nav>
);

export default Navbar;
