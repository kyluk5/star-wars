import { createAction } from "@reduxjs/toolkit";
import { SET_PLANETS } from "../constants/planetsConstants";

export const setPlanets = createAction(SET_PLANETS);
