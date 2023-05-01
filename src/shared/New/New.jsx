import React from "react";
import "./New.scss";

const New = (props) => {
  return (
    <div className="new">
      <h3 className="new__title">
        <button>{props.title}</button>
      </h3>
      <p className="new__description">{props.text}</p>
    </div>
  );
};

export default New;
