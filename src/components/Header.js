import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Header.css";
import { ReactComponent as NudeProjectLogo } from "../resources/nude-project.svg";

function Header({ productsInCart }) {
  return (
    <div className="div-navbar">
      <nav className="navbar">
      <div className="navbar-left-container">
        <ul>
          <li>
            <Link to="/products" className="navbar-ul-text">ALL PRODUCTS</Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-ul-text">CONTACT</Link>
          </li>
        </ul>
        </div>
        <div className="logo-container">
          <Link to="/">
            <NudeProjectLogo />
          </Link>
        </div>
        <div className="navbar-right-container">
        <ul>
          <li>
            <Link to="/products" className="navbar-ul-text">COUNTRY</Link>
          </li>
          <li>
          <Link to="/products" className="navbar-ul-text">COUNTRY</Link>
          </li>
          <li>
            <Link to="/cart" className="navbar-ul-text">CART ({productsInCart})</Link>
          </li>
        </ul>
        </div>

      </nav>
    </div>
  );
}

export default Header;
