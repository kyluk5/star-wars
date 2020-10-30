import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanets } from "../../redux/operations/planetsOperation";
import { Link } from "react-router-dom";
import styles from "./PlanetsList.module.css";

import planet_1 from "../../images/planets/planet_1.png";
import planet_2 from "../../images/planets/planet_2.png";
import planet_3 from "../../images/planets/planet_3.png";
import planet_4 from "../../images/planets/planet_4.png";
import planet_5 from "../../images/planets/planet_5.png";
import planet_6 from "../../images/planets/planet_6.png";
import planet_7 from "../../images/planets/planet_7.png";

const randomPlanet = () => {
  const planets = [
    planet_1,
    planet_2,
    planet_3,
    planet_4,
    planet_5,
    planet_6,
    planet_7,
  ];
  const num = Math.floor(Math.random() * 7);
  return planets[num];
};

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
                src={randomPlanet()}
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
