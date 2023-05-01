import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.image} alt="Illustration" />
      </div>
      <div className="card__info">
        <span className="card__number">{props.number}</span>
        <h3 className="card__title">
          <button>{props.title}</button>
        </h3>
        <p className="card__description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
