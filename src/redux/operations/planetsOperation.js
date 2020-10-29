import axios from "axios";
import { setPlanets } from "../actions/planetsActions";
axios.defaults.baseURL = "https://swapi.dev/api";

export const getPlanets = () => async (dispatch) => {
  try {
    const {
      data: { results },
    } = await axios("/planets/");
    dispatch(setPlanets(results));
  } catch (error) {
    console.log(error);
  }
};
