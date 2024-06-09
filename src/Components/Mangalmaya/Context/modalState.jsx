import React, { useState } from "react";

import modalContext from "./modalContext";

const modalState = (props) => {
  const [flag, setFlag] = useState(false);
  const [openMenu, setOpenMenu] = useState(true);
  const toggleFlag = () => {
    setFlag(flag === true ? false : true);
  };
  const toggleMenu = () => {
    setOpenMenu(openMenu === false ? true : false);
    console.log(openMenu);
  };

  return (
    <modalContext.Provider value={{ flag, toggleFlag, openMenu, toggleMenu }}>
      {props.children}
    </modalContext.Provider>
  );
};

export default modalState;
