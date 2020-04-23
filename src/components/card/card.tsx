import React from "react";
import "./card.css";

const Card = (props: any) => {
  return (
    <div className="card">
      <div className="content">
        <div className="insta">Instagram</div>
        {props.children}
      </div>
    </div>
  );
};
export default Card;
