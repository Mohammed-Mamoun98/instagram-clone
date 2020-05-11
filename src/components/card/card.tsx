import React from "react";
import "./card.css";
interface ICard {
  style?: React.CSSProperties;
  children?: any;
  onClick: () => void;
}

const Card = (props: ICard) => {
  return (
    <div
      className="card"
      style={{ ...props.style }}
      onClick={() => props.onClick()}
    >
      <div className="content">{props.children}</div>
    </div>
  );
};
export default Card;
