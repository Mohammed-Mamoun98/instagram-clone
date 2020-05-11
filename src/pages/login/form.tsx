import React, { useState, useEffect } from "react";
import Input from "../../components/input/input";
import MainBtn from "../../components/main-btn/main-btn";
import { Credintials, User } from "../../models/user";
import { Error } from "../../models/error";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import validator from "validator";
import fire from "../../firebase/fire-functions";

const Form = () => {
  const { enqueueSnackbar } = useSnackbar();
  const initState = {
    email: "",
    password: "",
    fullName: "",
    userName: "",
  };
  const sleep = (ms: number) =>
    new Promise((res, rej) => {
      setTimeout(res, ms);
    });
  const [creadintials, setCreadintials] = useState<Credintials>(initState);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = async (e: any) => {
    const { name, value } = e.target;
    const data: any = { [name]: value, name };
    setCreadintials({ ...creadintials, ...data });
    // validateInput(data.name, data[name]);
    //updating the state is an asyncrounus process so validate on parameters not on state
  };

  const alert = (msg: string) => {
    enqueueSnackbar(msg, { variant: "info", autoHideDuration: 1500 });
  };

  const handleSubmit = () => {
    setLoading(true);
    fire
      .signIn(creadintials.email, creadintials.password)
      .then((res: any) => {
        alert("User loged in Sucessfuly");
      })
      .catch((err: any) => alert(err.message))
      .finally(() => setLoading(false));
  };

  const validForm = () => {
    return creadintials.email !== "" && creadintials.password !== "";
  };

  return (
    <>
      <Input
        label="Email"
        name="email"
        onChange={handleChange}
        value={creadintials["email"]}
        // error={!!hasError("email")}
        // helperText={hasError("email")?.title}
      />

      <Input
        label="Password"
        name="password"
        onChange={handleChange}
        value={creadintials["password"]}
        // error={!!hasError("password")}
        // helperText={hasError("password")?.title}
        type="password"
      />

      <MainBtn
        style={{ marginTop: "1.5rem", marginBottom: "2rem" }}
        title="Log in"
        onClick={handleSubmit}
        disabled={!validForm()}
        loading={loading}
      />
    </>
  );
};

export default Form;
