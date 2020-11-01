import axios from "axios";
import {
  getResidents,
  resetResidents,
  setCurrentPlanet,
  setPlanets,
} from "../actions/planetsActions";
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
    dispatch(resetResidents());
    const { data } = await axios(`/planets/${num}/`);
    data.residents.map((item) =>
      axios(item).then(({ data }) => dispatch(getResidents(data)))
    );
    dispatch(setCurrentPlanet(data));
  } catch (error) {
    console.log(error);
  }
};
