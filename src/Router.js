import { Route, Switch } from "react-router-dom";
import React from "react";
import AppCars from "./components/AppCars";

export default function Router() {
  return (
    <Switch>
      <Route path="/cars">
        <AppCars />
      </Route>
    </Switch>
  );
}
