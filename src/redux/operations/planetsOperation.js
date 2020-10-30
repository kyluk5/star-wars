import axios from "axios";
import { setCurrentPlanet, setPlanets } from "../actions/planetsActions";
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

export const getCurrentPlanet = (num) => async (dispatch) => {
  try {
    const { data } = await axios(`/planets/${num}/`);
    dispatch(setCurrentPlanet(data));
  } catch (error) {
    console.log(error);
  }
};
