import { createReducer } from "@reduxjs/toolkit";
import { setPlanets } from "../actions/planetsActions";

export const planets = createReducer([], {
  [setPlanets]: (_, { payload }) => payload,
});
