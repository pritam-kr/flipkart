import React from "react";
import "./nav.css";
import * as FaIcons from "react-icons/fa";
 

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <div className="left">
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            className="logo"
            alt="logo"
          />
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
                <li className="lists"> 
                    Become a Seller 
                </li>
                <li className="lists center">
                   More <FaIcons.FaAngleDown className="icons"/>
                </li>
                <li className="lists center">
                  Cart <FaIcons.FaCartPlus className="icons"/>
                </li>
            </ul>

        </div>
      </div>
    </nav>
  );
};

export { Nav };
