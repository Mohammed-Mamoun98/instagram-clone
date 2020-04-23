import React from "react";
import { TextField, makeStyles } from "@material-ui/core";
import { theme } from "../../utils/theme";

const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
  input: {
    backgroundColor: "#fafafa",
    color: "gray",
  },
});

const Input = (props: any) => {
  const classes = useStyles();
  const { input } = theme;
  return (
    <div className="input" style={{ width: "100%" }}>
      <TextField
        {...props}
        variant="filled"
        fullWidth
        InputProps={{ classes }}
        className={input}
        style={{ width: "100%", backgroundColor: "#FAFAFA" }}
      />
    </div>
  );
};

export default Input;
