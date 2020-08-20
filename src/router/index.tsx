import React, { useEffect } from "react";
import Login from "../pages/login/login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./router.css";
import SignUp from "../pages/sign-up/sign-up";
import LoadingScreen from "../pages/laoding/loading";
import { useDispatch } from "react-redux";
import { setAppLoading } from "../redux/actions/shared";
import Home from "../pages/home/home";

const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAppLoading(false));
  });
  return (
    <BrowserRouter>
      <LoadingScreen>
        <div className="wrapper">
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </LoadingScreen>
    </BrowserRouter>
  );
};

export default Router;
