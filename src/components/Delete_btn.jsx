import React from "react";
import "./Delete_btn.css";

const Delete_btn = (props) => (
  <div className="delete_btn" onClick={props.clears}>
    {props.children}
  </div>
);

export default Delete_btn;
