import React from "react";
import "../Button/Button.scss";

const Button = (props) => {
  return <button className="button">{props.name}</button>;
};

export default Button;
