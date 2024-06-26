import React, { useContext } from "react";
import Lumbini from "../../Images/Lumbini.jpg";

import Mountain from "../../Images/Mountain.jpg";

import Swayambhu from "../../Images/Swayambhu.jpg";
import Bhaktapur from "../../Images/Bhaktapur.jpeg";
import Pashupatinath from "../../Images/Pashupatinath.jpeg";
import Patan from "../../Images/Patan.jpeg";
import Pokhara from "../../Images/Pokhara.jpeg";
import PhotoCard from "../Mangalmaya/Shared/PhotoCard.jsx";
import PopUp from "./Shared/PopUp.jsx";
import "./CSS/Home.css";
import modalContext from "./Context/modalContext.jsx";
const Home = () => {
  const { flag, toggleFlag } = useContext(modalContext);

  return (
    <>
      <div id="show">{flag && <PopUp />}</div>
      <div id="landing-body">
        <div id="text">
          <div className="main-text">
            Adventure awaits – explore it all with just one click.
          </div>
          <div className="sub-text">
            Turn travel dreams into reality: find expert advice, insightful
            tips, and book your perfect trip.
          </div>
        </div>
        <div id="photo">
          <div className="pic1">
            <img src={Mountain} alt="Mountain" />
          </div>
          <div className="sub-pic">
            <div className="pic2">
              <img src={Swayambhu} alt="Swayambhu" />
            </div>
            <div className="pic3">
              <img src={Lumbini} alt="Lumbini" />
            </div>
          </div>
        </div>
      </div>
      <div id="mid-text">Popular Destinations</div>
      <div id="photos" onClick={() => (flag ? toggleFlag() : null)}>
        <div className="group">
          <PhotoCard
            image={Pashupatinath}
            Title="Pashupatinath Temple"
            Time="1D"
            Price="5000"
          />
          <PhotoCard
            image={Bhaktapur}
            Title="Bhaktapur Durbar Square"
            Time="1D"
            Price="5000"
          />

          <PhotoCard image={Pokhara} Title="Pokhara" Time="5D" Price="10000" />
          <PhotoCard
            image={Pashupatinath}
            Title="Pashupatinath Temple"
            Time="1D"
            Price="5000"
          />
          <PhotoCard
            image={Bhaktapur}
            Title="Bhaktapur Durbar Square"
            Time="1D"
            Price="5000"
          />

          <PhotoCard image={Pokhara} Title="Pokhara" Time="5D" Price="10000" />
        </div>
      </div>
      <div id="view-more">View more</div>
    </>
  );
};

export default Home;
