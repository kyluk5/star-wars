import { combineReducers } from "redux";
import {
  planets,
  currentPlanet,
  residents,
  prevPage,
  nextPage,
} from "../reducers/planetsReducer";

const rootReducer = combineReducers({
  planets,
  currentPlanet,
  residents,
  prevPage,
  nextPage,
});

export default rootReducer;
