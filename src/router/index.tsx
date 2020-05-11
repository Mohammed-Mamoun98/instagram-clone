import React, { useEffect } from "react";
import Login from "../pages/login/login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./router.css";
import SignUp from "../pages/sign-up/sign-up";
import LoadingScreen from "../pages/laoding/loading";
import { useDispatch } from "react-redux";
import { setAppLoading } from "../redux/actions/shared";

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
          </Switch>
        </div>
      </LoadingScreen>
    </BrowserRouter>
  );
};

export default Router;
