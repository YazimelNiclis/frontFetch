import React from "react";
import Boton from "../Boton/Boton";

function Padre() {
  return (
    <>
      <Boton isActive={false} label={"ACEPTAR"} />
      <Boton isActive={true} label={"CANCELAR"} />
      <Boton isActive={true} label={"CERRAR"} />
    </>
  );
}

export default Padre;
