import React from "react";
import Login from "../pages/login/login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./router.css";
import SignUp from "../pages/sign-up/sign-up";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
