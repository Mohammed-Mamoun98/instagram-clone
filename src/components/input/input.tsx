import React from "react";
import { TextField, makeStyles, TextFieldProps } from "@material-ui/core";
import { theme } from "../../utils/theme";

interface Input {
  variant?: string;
  fullWidth?: boolean;
  onChange: (e: any) => void;
  InputProps?: any;
  style?: React.CSSProperties;
  className?: any;
}

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

const Input = (props: TextFieldProps) => {
  const classes = useStyles();
  const { input } = theme;
  return (
    <div className="input" style={{ width: "100%" }}>
      <TextField
        {...props}
        variant="filled"
        fullWidth
        InputProps={{ classes }}
        style={{ width: "100%", backgroundColor: "#FAFAFA", ...input }}
      />
    </div>
  );
};

export default Input;
