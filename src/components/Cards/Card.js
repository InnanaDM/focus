import React from "react";
import "./cards.css";
// import "./src/components/Cards/cards.css";

const Card = props => {
  return (
    <div>
      <div className="col s12 m7" />
      <div className="card horizontal">
        <div className="card-image">{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
