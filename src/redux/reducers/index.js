import { combineReducers } from "redux";
import { planets } from "../reducers/planetsReducer";

const rootReducer = combineReducers({
  planets,
});

export default rootReducer;
