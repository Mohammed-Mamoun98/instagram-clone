import React, { InputHTMLAttributes } from "react";
import Card from "../../components/card/card";
import "../login/login.css";
import MainBtn from "../../components/main-btn/main-btn";
import Form from "./form";
import { useHistory } from "react-router-dom";
import DownCard from "../../components/down-card/down-card";

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

const SignUp = () => {
  const history = useHistory();
  return (
    <div className="login">
      <Card onClick={() => {}}>
        <HeaderTitle />
        <MainBtn title="Sign In With Google" onClick={() => {}} />
        <OR />
        <Form />
        <FooterTxt />
      </Card>
      <DownCard
        title="Have an Account, sign in!"
        onClick={() => {
          history.push("/login");
        }}
      />
    </div>
  );
};

export default SignUp;
