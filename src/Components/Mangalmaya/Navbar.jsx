import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./CSS/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div id="mangalmaya-body">
        <div id="navbar">
          <div id="firstnav">
            <NavLink to="/">Mangalmaya</NavLink>
          </div>
          <div id="secondnav">
            <NavLink to="/destination">Destinations</NavLink>
            <NavLink to="/aboutus">About Us</NavLink>
            <NavLink to="/contactus">Contact Us</NavLink>
          </div>
          <div id="thirdnav">
            <div id="signbtn">Sign up</div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
