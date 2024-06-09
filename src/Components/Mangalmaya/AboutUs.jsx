import React from "react";
import pic from "../../Images/AboutUs.jpeg";
import "./CSS/AboutUs.css";

const AboutUs = () => {
  return (
    <div id="aboutus-body">
      <div id="aboutus-header">
        <div id="about-intro">
          <h3>
            Mangalmaya: <br />
            Explore the Magic of Nepal
          </h3>
          <p>
            Your gateway to unforgettable adventures in Nepal. We craft
            personalized tours & treks, led by expert guides. Explore hidden
            wonders, conquer peaks & experience Nepali culture. Choose from
            flexible itineraries, budget options & 24/7 support. Discover the
            magic of Nepal with Mangalmaya!
          </p>
        </div>
        <div id="about-disp">
          {" "}
          <img src={pic} alt="Picture of Mountain" />
        </div>
      </div>
      <div id="defn-main">
        <div id="aboutus-defn">
          <p>
            <span id="mangalmaya">Mangalmaya, </span> a leading destination
            management company based in Kathmandu,Nepal, is your gateway to
            unforgettable experiences in the land of Himalayas, Hills and Terai.
            We're passionate about crafting personalized tours and treks that go
            beyond breathtaking scenery.
          </p>
        </div>
      </div>
      <div id="brief-main">
        <div id="aboutus-brief">
          <h4>Why Choose Mangalmaya Travel?</h4>
          <ul>
            <li>
              Unforgettable Journeys: We specialize in small-group adventures,
              offering treks throughout Nepal. Explore hidden gems, conquer
              challenging peaks, and immerse yourself in diverse cultures.
            </li>
            <li>
              Flexibility at Your Fingertips: Design your dream escape! We
              tailor itineraries and dates to your preferences, ensuring a
              seamless travel experience
            </li>
            <li>
              Expert Guidance: Our team of professional and friendly guides
              ensures your safety and enjoyment throughout your adventure.
            </li>
            <li>
              Competitive Prices: Experience the wonders of Nepal without
              breaking the bank. We offer budget-friendly options for tours,
              treks, and expeditions.
            </li>
            <li>
              Your Way, Every Step of the Way: Choose from private or group
              tours, customizing everything to suit your interests and travel
              style.
            </li>
            <li>
              24/7 Support: We're here for you, anytime, anywhere. Our dedicated
              team is available round-the-clock to address your needs.
            </li>
            <li>
              Safety First: Your well-being is our priority. We adhere to strict
              safety protocols and utilize well-trained, insured local staff.
            </li>
          </ul>
        </div>
      </div>
      <div id="footer-main">
        <div id="aboutus-footer">
          <h4>Your Dream Nepal Adventure Awaits</h4>
          <p>
            Let Mangalmaya Travel your guide as you discover the magic of Nepal.
            Contact us today to start planning your personalized journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
