import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-logo" to={{ pathname: "/mvh-example-draft" }}>
        Milburn Village Hall
      </Link>
      <div className="navbar-menu-container">
        <ul className="nav-menu-options">
          <li>
            <Link
              className="navitem"
              to={{ pathname: "/mvh-example-draft/whats-on" }}
            >
              WHAT'S ON
            </Link>
          </li>
          <li>
            <Link
              className="navitem"
              to={{ pathname: "/mvh-example-draft/about" }}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <Link
              className="navitem"
              to={{ pathname: "/mvh-example-draft/book" }}
            >
              BOOK
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
