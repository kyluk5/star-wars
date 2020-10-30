import { combineReducers } from "redux";
import { planets, currentPlanet } from "../reducers/planetsReducer";

const rootReducer = combineReducers({
  planets,
  currentPlanet,
});

export default rootReducer;
