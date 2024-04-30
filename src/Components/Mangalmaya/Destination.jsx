import React, { useContext } from "react";
import PhotoCard from "./Shared/PhotoCard.jsx";
import Pashupatinath from "../../Images/Pashupatinath.jpeg";
import Patan from "../../Images/Patan.jpeg";
import Bhaktapur from "../../Images/Bhaktapur.jpeg";
import "../Mangalmaya/CSS/Destination.css";
import modalContext from "./Context/modalContext.jsx";

import PopUp from "./Shared/PopUp.jsx";
const Destination = () => {
  const data = [
    {
      image: Pashupatinath,
      Title: "Pashupatinath Temple",
      Time: "1D",
      Price: "5000",
    },
    {
      image: Patan,
      Title: "Patan Durbar Square",
      Time: "1D",
      Price: "5000",
    },
    {
      image: Bhaktapur,
      Title: "Bhaktapur Durbar Square",
      Time: "1D",
      Price: "5000",
    },
    {
      image: Pashupatinath,
      Title: "Pashupatinath Temple",
      Time: "1D",
      Price: "5000",
    },
    {
      image: Patan,
      Title: "Patan Durbar Square",
      Time: "1D",
      Price: "5000",
    },
    {
      image: Bhaktapur,
      Title: "Bhaktapur Durbar Square",
      Time: "1D",
      Price: "5000",
    },
    {
      image: Pashupatinath,
      Title: "Pashupatinath Temple",
      Time: "1D",
      Price: "5000",
    },
    {
      image: Patan,
      Title: "Patan Durbar Square",
      Time: "1D",
      Price: "5000",
    },
    {
      image: Bhaktapur,
      Title: "Bhaktapur Durbar Square",
      Time: "1D",
      Price: "5000",
    },
    {
      image: Pashupatinath,
      Title: "Pashupatinath Temple",
      Time: "1D",
      Price: "5000",
    },
    {
      image: Patan,
      Title: "Patan Durbar Square",
      Time: "1D",
      Price: "5000",
    },
    {
      image: Bhaktapur,
      Title: "Bhaktapur Durbar Square",
      Time: "1D",
      Price: "5000",
    },
  ];

  const { flag, toggleFlag } = useContext(modalContext);
  // if (flag) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }
  return (
    <>
      <div id="show">{flag && <PopUp />}</div>
      <div id="dest-main" onClick={() => (flag ? toggleFlag() : null)}>
        <div id="dest-header">
          <h3>Pack your bags! Let’s make your travel dreams a reality.</h3>
        </div>
        <div id="destination-body">
          {data.map((item, index) => {
            return (
              <PhotoCard
                key={index}
                detail={item}
                image={item.image}
                Title={item.Title}
                Time={item.Time}
                Price={item.Price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Destination;
