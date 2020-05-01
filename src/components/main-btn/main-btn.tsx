import React from "react";
import { StringDecoder } from "string_decoder";

interface IBtn {
  title: string;
  disabled?: boolean;
  onClick: (e: any) => void;
  style?: React.CSSProperties;
}
const MainBtn = (props: IBtn) => {
  const className = props.disabled
    ? "fb-btn main-font disabled"
    : "fb-btn main-font";
  return (
    <div
      className={className}
      style={{ ...props.style }}
      onClick={(e) => props.onClick(e)}
    >
      {props.title}
    </div>
  );
};

export default MainBtn;
