import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../Containers/Home/Home";
import Main from "../../Containers/Main/Main";
import EachPlanet from "../EachPlanet/EachPlanet";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.background}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/main/:planet" component={EachPlanet} />
      </Switch>
    </div>
  );
};

export default App;
