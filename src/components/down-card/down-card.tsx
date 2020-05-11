import React from "react";
import Card from "../card/card";

interface IDownCard {
  onClick: () => void;
  style?: React.CSSProperties;
  title: string;
}

const DownCard = (props: IDownCard) => (
  <Card
    onClick={() => {
      props.onClick();
      console.log("clicked");
    }}
    style={{ marginTop: "2rem", padding: "2rem", cursor: "pointer" }}
  >
    {props.title}
  </Card>
);

export default DownCard;
