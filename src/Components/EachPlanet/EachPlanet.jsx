import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCurrentPlanet } from "../../redux/operations/planetsOperation";
import Residents from "../Residents/Residents";
import styles from "./EachPlanet.module.css";

const EachPlanet = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const planetNum = history.location.pathname.split("/main/")[1];
  const currentPlanet = useSelector((state) => state.currentPlanet);

  useEffect(() => {
    dispatch(getCurrentPlanet(planetNum));
  }, [dispatch, planetNum]);

  return (
    <ul className={styles.planet__info}>
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
        Известные жители : <Residents residents={currentPlanet.residents} />
      </li>
    </ul>
  );
};

export default EachPlanet;
