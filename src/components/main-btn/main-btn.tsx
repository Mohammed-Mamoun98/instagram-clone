import React from "react";
import { StringDecoder } from "string_decoder";

interface IBtn {
  title: string;
  disabled?: boolean;
}
const MainBtn = (props: IBtn) => {
  const className = props.disabled
    ? "fb-btn main-font disabled"
    : "fb-btn main-font";
  return <div className={className}>{props.title}</div>;
};

export default MainBtn;
