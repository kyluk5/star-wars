import { createAction } from "@reduxjs/toolkit";
import { SET_CURRENT_PLANET, SET_PLANETS } from "../constants/planetsConstants";

export const setPlanets = createAction(SET_PLANETS);
export const setCurrentPlanet = createAction(SET_CURRENT_PLANET);
