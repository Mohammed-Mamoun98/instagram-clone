import React from "react";
import { useStore } from "../../hooks/useStore";

const LoadingScreen = (props: any) => {
  const state = useStore();
  const { loading } = state.shared;
  debugger;
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6F6F6",
      }}
    >
      {loading && "Loading..."}
      {!loading && <>{props.children}</>}
    </div>
  );
};

export default LoadingScreen;
