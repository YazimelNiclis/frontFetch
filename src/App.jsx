import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import { consultarTelefonos } from "./api/rule_usuario";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [agenda, setAgenda] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  /*   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [errorNombre, setErrorNombre] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeNombre = (e) => {
    if (e.target.validationMessage !== "") {
      setErrorNombre("Ingresar solamente valores alfabéticos");
    } else {
      setErrorNombre("");
    }
    setNombre(e.target.value);
  };
 */

  const consultaGet = async () => {
    var requestOptions = {
      method: "GET",
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
        alert("Ocurrio un error del lado del cliente");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const consultaPost = async (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      email: data.email,
      password: data.password,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/usuario/login",
        requestOptions
      );
      if (response.ok) {
        const respuesta = await response.json();
        localStorage.setItem("token", respuesta.token);
        navigate("home");
      } else {
        const respuesta = await response.json();
        alert("ERROR!!! " + respuesta.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const onSubmit = (data) => {
    consultaPost(data);
    /*   alert("El mail es: " + data.email + "y la contrasenia: " + data.password); */
  };

  return (
    <div className="App">
      <div className="contenedor">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Cargar un nuevo telefono</h2>
          <br />
          <label htmlFor="Email" className="item">
            <p>Email *</p>
            <input placeholder="Email*" {...register("email")} />
            <br />
          </label>
          <br />
          <label htmlFor="Password" className="item">
            <br />
            <p>Password *</p>
            <input
              type="password"
              placeholder="Password*"
              {...register("password")}
            />
            <br />
          </label>

          <br />
          <br />
          <br />

          <br />
          <button className="button" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
