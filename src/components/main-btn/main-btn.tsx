import React from "react";
import { StringDecoder } from "string_decoder";
import { CircularProgress } from "@material-ui/core";

interface IBtn {
  title: string;
  disabled?: boolean;
  onClick: (e: any) => void;
  style?: React.CSSProperties;
  loading?: boolean;
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
      {!props.loading && <> {props.title}</>}

      {props.loading && (
        <CircularProgress size={15} style={{ color: "#fff" }} />
      )}
    </div>
  );
};

export default MainBtn;
