import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanets } from "../../redux/operations/planetsOperation";
import { Link } from "react-router-dom";
import styles from "./PlanetsList.module.css";

import earth from "../../images/planets/earth.png";

const PlanetsList = () => {
  const dispatch = useDispatch();
  const planets = useSelector((state) => state.planets);

  const getAllPlanets = useCallback(() => {
    dispatch(getPlanets());
  }, [dispatch]);

  useEffect(() => {
    getAllPlanets();
  }, [getAllPlanets]);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.planets__list}>
        {planets.map((planet) => (
          <li key={planet.name} className={styles.planets__list_item}>
            <Link
              to={`/main/${planets.indexOf(planet) + 1}`}
              className={styles.planets__list_link}
            >
              <img
                src={earth}
                alt="planet"
                className={styles.planets__list_item_planet}
              />
              <div className={styles.info_wrapper}>
                <span
                  className={styles.info}
                >{`Название : ${planet.name}`}</span>
                <span
                  className={styles.info}
                >{`Климат : ${planet.climate}`}</span>
                <span
                  className={styles.info}
                >{`Население : ${planet.population}`}</span>
              </div>
              <div className={styles.custom_hover}></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetsList;
