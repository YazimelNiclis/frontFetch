import React from "react";

function ListaTareas(props) {
  return (
    <div>
      <h1>Lista:</h1>
      {props.lista.map((valor) => {
        return <div>{valor}</div>;
      })}
    </div>
  );
}

export default ListaTareas;
