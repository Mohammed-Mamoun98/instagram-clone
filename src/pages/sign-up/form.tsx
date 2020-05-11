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
  const [users, setUsers] = useState<User[]>([]);
  const [creadintials, setCreadintials] = useState<Credintials>(initState);
  const [errorList, setErroList] = useState<Error[]>([]);
  const [validInputs, setValidInputs] = useState<string[]>([]);

  const handleChange = async (e: any) => {
    const { name, value } = e.target;
    const data: any = { [name]: value, name };
    setCreadintials({ ...creadintials, ...data });
    validateInput(data.name, data[name]);
    //updating the state is an asyncrounus process so validate on parameters not on state
  };

  const alert = (msg: string) => {
    enqueueSnackbar(msg, { variant: "info", autoHideDuration: 1500 });
  };

  const validateInput = (name: string, value: string) => {
    switch (name) {
      case "email":
        const validEmail = validator.isEmail(value);
        if (validEmail && !hasSucces(name))
          setValidInputs([...validInputs, name]);
        if (!validEmail && hasSucces(name))
          setValidInputs([...validInputs.filter((id) => id !== name)]);
        if (!validEmail && !hasError(name))
          setErroList([...errorList, { id: "email", title: "Invalid Email" }]);
        if (validEmail && hasError(name))
          setErroList([
            ...errorList.filter((error: Error) => error.id !== "email"),
          ]);
        break;

      case "fullName":
        const fullValid = value.length > 5;
        if (fullValid && !hasSucces(name))
          setValidInputs([...validInputs, name]);
        if (!fullValid && hasSucces(name))
          setValidInputs([...validInputs.filter((id) => id !== name)]);
        if (!fullValid && !hasError(name))
          setErroList([
            ...errorList,
            {
              id: "fullName",
              title: "Full Name should be At least 6 char length",
            },
          ]);
        if (fullValid && hasError(name))
          setErroList([
            ...errorList.filter((error: Error) => error.id !== "fullName"),
          ]);
        break;
      case "userName":
        const userValid = value.length > 5;
        if (userValid && !hasSucces(name))
          setValidInputs([...validInputs, name]);
        if (!userValid && hasSucces(name))
          setValidInputs([...validInputs.filter((id) => id !== name)]);
        if (!userValid && !hasError(name))
          setErroList([
            ...errorList,
            {
              id: "userName",
              title: "User Name should be At least 6 char length",
            },
          ]);
        if (userValid && hasError(name))
          setErroList([
            ...errorList.filter((error: Error) => error.id !== "userName"),
          ]);
        break;

      case "password":
        const passwordValid = value.length > 7 && value.includes;
        if (passwordValid && !hasSucces(name))
          setValidInputs([...validInputs, name]);
        if (!passwordValid && hasSucces(name))
          setValidInputs([...validInputs.filter((id) => id !== name)]);
        if (!passwordValid && !hasError(name))
          setErroList([
            ...errorList,
            {
              id: "password",
              title: "password should be At least 8 char length",
            },
          ]);
        if (passwordValid && hasError(name))
          setErroList([
            ...errorList.filter((error: Error) => error.id !== "password"),
          ]);
        break;
      default:
        break;
    }
  };
  React.useEffect(() => {
    console.log("valid", validInputs);
  }, [validInputs]);

  const handleSubmit = () => {
    fire
      .signUp(creadintials.email, creadintials.password)
      .then((res: any) =>
        fire
          .addUser(creadintials)
          .then((res) => alert("User created Sucessfuly"))
          .catch((err: any) => alert(err.message))
      )
      .catch((err: any) => alert(err.message));
  };

  const hasError = (name: string) => {
    return errorList.find((error: Error) => error.id === name);
  };

  const hasSucces = (name: string) => {
    return validInputs.includes(name);
  };

  return (
    <>
      <Input
        label="Email"
        name="email"
        onChange={handleChange}
        value={creadintials["email"]}
        error={!!hasError("email")}
        helperText={hasError("email")?.title}
      />
      <Input
        label="Full Name"
        name="fullName"
        onChange={handleChange}
        value={creadintials["fullName"]}
        error={!!hasError("fullName")}
        helperText={hasError("fullName")?.title}
      />
      <Input
        label="Username"
        name="userName"
        onChange={handleChange}
        value={creadintials["userName"]}
        error={!!hasError("userName")}
        helperText={hasError("userName")?.title}
      />

      <Input
        label="Password"
        name="password"
        onChange={handleChange}
        value={creadintials["password"]}
        error={!!hasError("password")}
        helperText={hasError("password")?.title}
        type="password"
      />

      <MainBtn
        style={{ marginTop: "1.5rem" }}
        title="Sign Up"
        onClick={handleSubmit}
        disabled={validInputs.length !== 4}
      />
    </>
  );
};

export default Form;
