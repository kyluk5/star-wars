import axios from "axios";
import {
  getResidents,
  resetResidents,
  setCurrentPlanet,
  setNextPage,
  setPlanets,
  setPrevPage,
} from "../actions/planetsActions";
axios.defaults.baseURL = "https://swapi.dev/api";

export const getPlanets = (page) => async (dispatch) => {
  try {
    if (page === "") {
      alert("Cледующей страницы планет нет :(");
      return;
    } else if (page) {
      const { data } = await axios(page);
      dispatch(setPlanets(data.results));
      dispatch(setPrevPage(data.previous));
      dispatch(setNextPage(data.next));
    } else {
      const { data } = await axios("/planets/");
      dispatch(setPlanets(data.results));
      dispatch(setPrevPage(data.previous));
      dispatch(setNextPage(data.next));
    }
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
