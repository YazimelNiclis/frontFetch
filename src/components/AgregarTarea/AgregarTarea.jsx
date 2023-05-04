import React from "react";
import { useState } from "react";

function AgregarTarea(props) {
  const [tarea, setTarea] = useState("");

  const onChangeInputTarea = (event) => {
    setTarea(event.target.value);
  };

  const onClickBoton = () => {
    props.agregar(tarea);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingresar un numero"
        onChange={onChangeInputTarea}
      ></input>
      <button name="agregar" onClick={onClickBoton}>
        AGREGAR
      </button>
    </div>
  );
}

export default AgregarTarea;
