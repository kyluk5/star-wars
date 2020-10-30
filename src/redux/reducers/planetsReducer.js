import { createReducer } from "@reduxjs/toolkit";
import { setCurrentPlanet, setPlanets } from "../actions/planetsActions";

export const planets = createReducer([], {
  [setPlanets]: (_, { payload }) => payload,
});

export const currentPlanet = createReducer(
  {},
  {
    [setCurrentPlanet]: (_, { payload }) => payload,
  }
);
