import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/gamesSection/home";
import Login from "../pages/loginPage/login";
import SignUp from "../pages/signUp/signup";
import ForgotPassword from "../pages/forgotPassword/forgot_password";
import Rooms from "../pages/rooms/rooms";

const Routes = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot_password" component={ForgotPassword} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Routes;
