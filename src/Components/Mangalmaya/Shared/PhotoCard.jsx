import React, { useContext } from "react";
import "../CSS/PhotoCard.css";

import modalContext from "../Context/modalContext";

const PhotoCard = (props) => {
  const { flag, toggleFlag } = useContext(modalContext);
  const Btn_check = () => {
    toggleFlag();
  };
  return (
    <div id="card">
      <div>
        <img src={props.image} alt="Picture" />
      </div>
      <div id="text1">
        <div id="title">
          <h2>{props.Title}</h2>
        </div>
        <div id="descrpt">
          <div id="crdnt">
            <h5>{props.Time}</h5>
            <p>{props.Price}/- per person</p>
          </div>
          <div id="btn" onClick={Btn_check}>
            Book
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
