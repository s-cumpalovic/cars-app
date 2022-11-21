import { Route, Switch } from "react-router-dom";
import React from "react";
import AppCars from "./pages/AppCars";
import AddCar from "./pages/AddCar";
import AppLogin from "./pages/AppLogin";
import AppRegister from "./pages/AppRegister";


export default function Router() {
  return (
    <Switch>
      <Route path="/cars">
        <AppCars />
      </Route>
      <Route path="/add">
        <AddCar />
      </Route>
      <Route path="/login">
        <AppLogin />
      </Route>
      <Route path="/register">
        <AppRegister />
      </Route>
      <Route path="/edit/:id">
        <AddCar />
      </Route>
    </Switch>
  );
}
