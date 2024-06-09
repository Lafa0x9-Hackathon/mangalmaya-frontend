import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./CSS/Navbar.css";
import modalContext from "./Context/modalContext";
import Footer from "./Footer.jsx";

const Navbar = () => {
  const { openMenu, toggleMenu } = useContext(modalContext);

  return (
    <>
      <div id="mangalmaya-body">
        <div
          id="navbar"
          style={{
            backgroundColor: openMenu ? "rgb(209, 253, 253)" : "transparent",
          }}
        >
          <div id="res-menu" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div id="main-menu">
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
            {!openMenu && (
              <div>
                <div id="secondnav1">
                  <NavLink to="/destination">Destinations</NavLink>
                  <NavLink to="/aboutus">About Us</NavLink>
                  <NavLink to="/contactus">Contact Us</NavLink>
                </div>
                <div id="thirdnav1">
                  <div id="signbtn">Sign up</div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
