import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "../views/navbar.css";
import { GiAbstract002 } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__brand">
        <NavLink className="navbar__link" to="/">
          <GiAbstract002 />
        </NavLink>
      </div>
      {/* <div className="navbar__search">
        <input type="search" className="navbar__search__input" />
        <button className="navbar__search__button">Search</button>
      </div> */}
      <div className="navbar__options">
        <NavLink className="navbar__link " to="/about">
          About
        </NavLink>
        <NavLink className="navbar__link navbar__link__login" to="/login">
          Start here
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
