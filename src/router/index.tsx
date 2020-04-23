import React from "react";
import Login from "../pages/login/login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./router.css";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
