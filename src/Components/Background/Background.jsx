import React from "react";
import styles from "./Background.module.css";

import background from "../../images/space.png";

const Background = () => {
  return <img className={styles.logo} src={background} alt="space" />;
};

export default Background;
