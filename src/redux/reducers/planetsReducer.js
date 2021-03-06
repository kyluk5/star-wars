import { createReducer } from "@reduxjs/toolkit";
import {
  getResidents,
  resetResidents,
  setCurrentPlanet,
  setPlanets,
  setNextPage,
  setPrevPage,
} from "../actions/planetsActions";

export const planets = createReducer([], {
  [setPlanets]: (_, { payload }) => payload,
});

export const currentPlanet = createReducer(
  {},
  {
    [setCurrentPlanet]: (_, { payload }) => payload,
  }
);

export const residents = createReducer([], {
  [resetResidents]: (_, { payload }) => [],
  [getResidents]: (state, { payload }) => [...state, payload],
});

export const prevPage = createReducer(null, {
  [setPrevPage]: (_, { payload }) => payload,
});

export const nextPage = createReducer(null, {
  [setNextPage]: (_, { payload }) => payload,
});
