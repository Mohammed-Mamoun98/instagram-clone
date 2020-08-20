import React, { InputHTMLAttributes, useEffect } from "react";
import Card from "../../components/card/card";
import "./login.css";
import Form from "./form";
import MainBtn from "../../components/main-btn/main-btn";
import Logo from "../../components/logo/logo";
import DownCard from "../../components/down-card/down-card";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAppLoading, setCounter } from "../../redux/actions/shared";
import fire from "../../firebase/fire-functions";
import { useStore } from "../../hooks/useStore";

const Counter = () => {
  const { counter } = useStore().shared;
  const dispatch = useDispatch();
  // const newCounter = counter++;
  React.useEffect(() => {
    alert("render");
  }, []);
  return <>{counter}</>;
};

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

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = React.useState(false);
  const { counter } = useStore().shared;

  // React.useEffect(() => {
  //   // console.log("render");
  //   // alert("render");
  //   return () => {
  //     dispatch(setCounter(5));
  //   };
  // }, []);

  React.useEffect(() => {
    fire.getCurrentUser().then((res) => console.log("res", res));
  });
  return (
    <div className="login">
      <Card onClick={() => {}}>
        <Logo />
        <HeaderTitle />
        <MainBtn title="Sign In With Google" onClick={() => {}} />
        <OR />
        <Form />
      </Card>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        toggle
      </button>
      {show && (
        <div className="">
          <Counter />
        </div>
      )}
      <button
        onClick={() => {
          dispatch(setCounter(5));
        }}
      >
        +
      </button>
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
