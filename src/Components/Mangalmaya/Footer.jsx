import React from "react";
import main from "../../Images/main.png";
import front from "../../Images/front.png";
import img1 from "../../Images/google-play-badge.png";
import img2 from "../../Images/img2.png";
import "./CSS/Footer.css";
const Footer = () => {
  return (
    <div id="main-footer">
      <div id="footer-body">
        <div id="mob-image">
          <div id="sub-img">
            <img src={main} alt="mob-background" />
            <img src={front} alt="mob-front" />
          </div>
        </div>
        <div id="txt">
          <p>
            Download our travel app! <br />
            Discover amazing destinations, and unbeatable deals.
          </p>
          <div id="tags">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
      <div id="footer-2">
        <div id="sub-footer">
          <div id="sub-1">
            <h3>Mangalmaya</h3>
          </div>
          <div id="sub-2">
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div id="sub-3">
            <h3>Need help?</h3>
            <p>+98120378490</p>
            <p>www.mangalmaya.com</p>
          </div>
        </div>
        <div id="brk-line"></div>
        <div id="last-footer">
          <p>Copyright 2024, Mangalmaya</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
