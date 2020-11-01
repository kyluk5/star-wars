import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCurrentPlanet } from "../../redux/operations/planetsOperation";
import Residents from "../Residents/Residents";
import styles from "./EachPlanet.module.css";

import earth from "../../images/planets/earth.png";

const EachPlanet = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const planetNum = location.pathname.substr(-2);
  const currentPlanet = useSelector((state) => state.currentPlanet);

  useEffect(() => {
    dispatch(getCurrentPlanet(planetNum));
  }, [dispatch]);

  return (
    <>
      <ul className={styles.planet__info_list}>
        <li
          className={styles.planet__info_item}
        >{`Имя : ${currentPlanet.name}`}</li>
        <li
          className={styles.planet__info_item}
        >{`Период оборота : ${currentPlanet.rotation_period}`}</li>
        <li
          className={styles.planet__info_item}
        >{`Диаметр : ${currentPlanet.diameter}`}</li>
        <li
          className={styles.planet__info_item}
        >{`Климат : ${currentPlanet.climate}`}</li>
        <li
          className={styles.planet__info_item}
        >{`Гравитация : ${currentPlanet.gravity}`}</li>
        <li
          className={styles.planet__info_item}
        >{`Тип местности : ${currentPlanet.terrain}`}</li>
        <li
          className={styles.planet__info_item}
        >{`Население : ${currentPlanet.population}`}</li>
        <li className={styles.planet__info_item}>
          Известные жители : <Residents />
        </li>
      </ul>
      <img src={earth} alt="planet" className={styles.planet__info_image} />
    </>
  );
};

export default EachPlanet;
