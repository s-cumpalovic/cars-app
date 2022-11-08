import { Route, Switch } from "react-router-dom";
import React from "react";
import AppCars from "./pages/AppCars";
import AddCar from "./pages/AddCar";

export default function Router() {
  return (
    <Switch>
      <Route path="/cars">
        <AppCars />
      </Route>
      <Route path="/add">
        <AddCar />
      </Route>
    </Switch>
  );
}
