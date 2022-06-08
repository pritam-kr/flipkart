import React from "react";
import "./nav.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <div className="left">
          <Link to="/">
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              className="logo"
              alt="logo"
            />
          </Link>
        </div>

        <div className="middle">
          <div className="search-bar-wrapper">
            <input
              className="input"
              type="text"
              placeholder="Search for products, brands and more"
            />{" "}
            <button className="btn-search">
              <FaIcons.FaSearch />
            </button>
          </div>
        </div>

        <div className="right">
          <ul className="nav-links">
          <Link to="/later">  <li className="lists">Save to later</li> </Link>

            <li className="lists center">
              <Link to="/cart" >
                {" "}
                Cart <FaIcons.FaCartPlus className="icons" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Nav };
