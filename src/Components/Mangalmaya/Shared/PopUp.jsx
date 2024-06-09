import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import Pashupatinath from "../../../Images/Pashupatinath.jpeg";
import "../CSS/PopUp.css";
import modalContext from "../Context/modalContext";
const PopUp = () => {
  const [count, setCount] = useState(0);
  const changeCount = (count_value) => {
    setCount(count + count_value);
  };

  const { flag, toggleFlag } = useContext(modalContext);
  return (
    <>
      <div id="pop-body">
        <div id="upper">
          <div id="img">
            <img src={Pashupatinath} alt="Location" />
          </div>
          <div id="content">
            <h2>Highlights</h2>
            <ul>
              <li>
                Witness cremation rituals by the sacred Bagmati, experiencing
                Hinduism's view on life and death
              </li>
              <li>Explore Pashupatinath's Shiva sanctity & myths.</li>
              <li>
                Participate in a puja (offering ceremony), receive blessings
                from priests, or visit the Pashupatinath Museum for even deeper
                understanding.
              </li>
            </ul>
          </div>
        </div>
        <div id="lower">
          <div id="describe">
            <h4>Pashupatinath Temple</h4>
            <div id="semi">
              <div id="context">
                <h5>1D</h5>
                <p>5000/- per person</p>
              </div>
              <div id="quantity">
                <div>
                  <Icon
                    icon="zondicons:minus-solid"
                    // width="4rem"
                    // height="4rem"
                    style={{ cursor: "pointer" }}
                    className="icons"
                    onClick={() => {
                      changeCount(-1);
                    }}
                  />
                </div>
                {count}
                <div>
                  <Icon
                    icon="fluent-mdl2:circle-addition-solid"
                    // width="4rem"
                    // height="4rem"
                    style={{ cursor: "pointer" }}
                    className="icons"
                    onClick={() => {
                      changeCount(+1);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="order">
            <p>Book Now</p>
            <div id="sbmt" onClick={toggleFlag}>
              Rs.5000/-
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
