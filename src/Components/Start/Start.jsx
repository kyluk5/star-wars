import React from "react";
import { Link } from "react-router-dom";
import styles from "./Start.module.css";

import logo from "../../images/logo.png";
import folder from "../../images/folder.ico";

const Start = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="logo star wars" />
      <Link to="/main">
        <button className={styles.start}>
          <img src={folder} alt="folder" />
        </button>
      </Link>
    </div>
  );
};

export default Start;
