import React, { useState } from "react";
import "../Mangalmaya/CSS/ContactUs.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { validEmail, validName, validNumber } from "./Shared/Regex.js";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    number: "",
    location: "",
    message: "",
  });

  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [fullname, setFullname] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const changeHandle = (e) => {
    setFormData(() => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const formValidation = () => {
    if (
      formData.email == "" &&
      formData.number == "" &&
      formData.fullname == "" &&
      formData.location == "" &&
      formData.message == ""
    ) {
      alert("Input should not be empty!!");
    } else if (!validEmail.test(formData.email)) {
      setEmail("Invalid email");
    } else if (!validNumber.test(formData.number)) {
      setNumber("Invalid Number");
    } else if (formData.fullname == "") {
      setFullname("Fill your name");
    } else if (formData.location == "") {
      setLocation("Fill your location");
    } else if (formData.message == "") {
      setMessage("Write something on message box");
    } else {
      alert("submitted");
      setEmail("");
      setFormData("");
      setFullname("");
      setLocation("");
      setMessage("");
      setNumber("");
    }
  };
  return (
    <div id="contactus">
      <div id="contact-header">
        <div id="header1">
          <h3>Contact Us</h3>
        </div>
        <div id="header2">
          <p>
            We invite you to contact us today to discuss your travel plans and
            explore the possibilities.
          </p>
        </div>
      </div>

      <div id="contact-form">
        <div className="common-class">
          <input
            type="text"
            placeholder="Full Name"
            name="fullname"
            onChange={changeHandle}
          />
          <span className="check-text">{fullname}</span>
        </div>

        <div className="ip-field">
          <div className="common-class">
            <input
              type="email"
              placeholder="Work Email"
              name="email"
              onChange={changeHandle}
            />
            <span className="check-text">{email}</span>
          </div>

          <div className="common-class">
            <input
              type="text"
              placeholder="Phone Number"
              name="number"
              onChange={changeHandle}
            />
            <span className="check-text">{number}</span>
          </div>
        </div>

        <div className="common-class">
          <input
            type="text"
            placeholder="Location"
            name="location"
            onChange={changeHandle}
          />
          <span className="check-text">{location}</span>
        </div>
        <div className="common-class">
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="What can we help with?"
            onChange={changeHandle}
          />
          <span className="check-text">{message}</span>
        </div>
        <div id="btn-parent">
          <div id="button-submt" onClick={formValidation}>
            Submit
          </div>
        </div>
      </div>

      <div id="connect">
        <div id="connect-icon">
          Connect us on:
          <div id="icon-box">
            <Icon
              icon="entypo-social:linkedin-with-circle"
              color="white"
              className="media"
            />
            <Icon
              icon="mage:instagram-circle"
              color="white"
              className="media"
            />

            <Icon
              icon="entypo-social:twitter-with-circle"
              color="white"
              className="media"
            />
            <Icon
              icon="fluent-mdl2:facebook-logo"
              color="white"
              className="media"
            />
          </div>
        </div>
        <div id="details">
          <p>Contact Details : +98120378490 mangalmaya@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
