import { createAction } from "@reduxjs/toolkit";
import {
  GET_RESIDENTS,
  RESET_RESIDENTS,
  SET_CURRENT_PLANET,
  SET_PLANETS,
} from "../constants/planetsConstants";

export const setPlanets = createAction(SET_PLANETS);
export const setCurrentPlanet = createAction(SET_CURRENT_PLANET);
export const getResidents = createAction(GET_RESIDENTS);
export const resetResidents = createAction(RESET_RESIDENTS);
