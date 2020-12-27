import React, { Component } from "react";
import "../../js/Custom.js";
import $ from "jquery";
import { Link } from "react-router-dom";

function Nav () {

    return (
      <header>
        <div className="container">


          <nav className="nav">
            <ul className="nav-list nav-list-mobile">
              <li className="nav-item">
                <div className="mobile-menu">
                  <span className="line line-top"></span>
                  <span className="line line-bottom"></span>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link nav-link-apple"></Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link nav-link-cart"></Link>
              </li>
            </ul>

            <ul className="nav-list nav-list-larger">
              <li className="nav-item nav-item-hidden">
                <Link to="/" className="nav-link nav-link-apple"></Link>
              </li>

              <li className="nav-item">
                <Link to ="/Mac" className="nav-link">Mac</Link>
              </li>

              <li className="nav-item">
                <Link to="/Ipad" className="nav-link">
                  ipad
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Iphone" className="nav-link">
                  iPhone
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/watch" className="nav-link">
                  Watch
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/TV" className="nav-link">
                  TV
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Music" className="nav-link">
                  Music
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Suport" className="nav-link">
                  Suport
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/search" className="nav-link nav-link-search"></Link>
              </li>
              <li className="nav-item nav-item-hidden">
                <Link to="/cart" className="nav-link nav-link-cart"></Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }


export default Nav;
