import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Start.module.css";

import logo from "../../images/logo.png";
import folder from "../../images/folder.ico";

const Start = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="logo star wars" />
      <NavLink to="/page=1">
        <button className={styles.start}>
          <img src={folder} alt="folder" />
        </button>
      </NavLink>
    </div>
  );
};

export default Start;
