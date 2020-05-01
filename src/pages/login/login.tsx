import React, { InputHTMLAttributes } from "react";
import Card from "../../components/card/card";
import "./login.css";
import Form from "./form";
import MainBtn from "../../components/main-btn/main-btn";

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

const Login = () => (
  <div className="login">
    <Card>
      <HeaderTitle />
      <MainBtn title="Sign In With Google" onClick={() => {}} />
      <OR />
      <Form />
      <FooterTxt />
    </Card>
  </div>
);

export default Login;
