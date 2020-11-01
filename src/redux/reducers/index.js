import { combineReducers } from "redux";
import { planets, currentPlanet, residents } from "../reducers/planetsReducer";

const rootReducer = combineReducers({
  planets,
  currentPlanet,
  residents,
});

export default rootReducer;
