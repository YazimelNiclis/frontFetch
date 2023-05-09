import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AgregarTarea() {
  const [agenda, setAgenda] = useState([]);

  const navigate = useNavigate();
  const consultaGet = async () => {
    const token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/telefonos",
        requestOptions
      );
      if (response.ok) {
        const respuesta = await response.json();
        setAgenda(respuesta.agenda);
      } else {
        alert("No tiene permisos para acceder a este recurso");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="App">
      <div>
        <button name="agregar" onClick={consultaGet}>
          AGREGAR
        </button>
      </div>
      <div>
        <button name="agregar" onClick={logOut}>
          LOG OUT
        </button>
      </div>
      {agenda &&
        agenda.map((telefono, index) => {
          return (
            <div key={index}>
              Nombre: {telefono.name} || Número: {telefono.number}
            </div>
          );
        })}
    </div>
  );
}

export default AgregarTarea;
