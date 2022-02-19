import React from "react";
import "./Btns.css";

// check if button is number or operator, -> bool
const isFunction = (instance) => {
  return !isNaN(instance) || instance === "." || instance === "Enter";
};

// applies css styles depending on the isFunction function.
const Btns = (props) => (
  <div
    className={`btn-container ${
      isFunction(props.children) ? null : "function"
    }`}
    onClick={() => props.click(props.children)}
  >
    {props.children}
  </div>
);

export default Btns;
