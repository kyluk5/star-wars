import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../Containers/Home/Home";
import Main from "../../Containers/Main/Main";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/main" component={Main} />
    </Switch>
  );
};

export default App;
