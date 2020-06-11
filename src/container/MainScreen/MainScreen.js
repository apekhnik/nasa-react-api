import React from "react";
import { Route, Switch } from "react-router-dom";
import APODpage from "../APODpage";
import NASAIMAGE from "../NASAIMAGE";
import WelcomePage from "../WelcomePage/WelcomePage";
const Mainscreen = () => {
  return (
    <Switch>
      <Route
        path={process.env.PUBLIC_URL + "/APOD"}
        component={APODpage}
        exact
      />
      <Route
        path={process.env.PUBLIC_URL + "/media-search"}
        component={NASAIMAGE}
        exact
      />
      <Route
        path={process.env.PUBLIC_URL + "/"}
        component={WelcomePage}
        exact
      />
    </Switch>
  );
};
export default Mainscreen;
