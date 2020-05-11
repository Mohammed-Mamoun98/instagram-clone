import React, { InputHTMLAttributes, useEffect } from "react";
import Card from "../../components/card/card";
import "./login.css";
import Form from "./form";
import MainBtn from "../../components/main-btn/main-btn";
import Logo from "../../components/logo/logo";
import DownCard from "../../components/down-card/down-card";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAppLoading } from "../../redux/actions/shared";

const OR = () => (
  <div className="or">
    <div className="gray-line"></div>
    <div className="or-text">OR</div>
    <div className="gray-line"></div>
  </div>
);

const HeaderTitle = () => (
  <div className="header-title main-font">
    <p>Sign up to see photos and videos from your friends</p>
  </div>
);

const FooterTxt = () => (
  <div className="header-title main-font footer-txt">
    By signing up, you agree to our Terms , Data Policy and Cookies Policy .{" "}
  </div>
);

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    console.log("did mount");

    debugger;
  }, []);
  return (
    <div className="login">
      <Card onClick={() => {}}>
        <Logo />
        <HeaderTitle />
        <MainBtn title="Sign In With Google" onClick={() => {}} />
        <OR />
        <Form />
      </Card>

      <DownCard
        title="Have no Account, sign up!"
        onClick={() => {
          history.push("/signUp");
        }}
      />
    </div>
  );
};

export default Login;
