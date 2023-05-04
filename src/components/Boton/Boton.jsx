import React from "react";
import "./boton.css";

function Boton(props) {
  return (
    <button className={props.isActive ? "button-active" : "button-disabled"}>
      {props.label}
    </button>
  );
}

export default Boton;
