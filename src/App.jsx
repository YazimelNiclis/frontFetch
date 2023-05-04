import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const [agenda, setAgenda] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
      id: data.id,
      name: data.name,
      number: data.number,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/telefonos",
        requestOptions
      );
      if (response.ok) {
        const respuesta = await response.json();
        alert(respuesta.mensaje);
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
          <label htmlFor="Id" className="item">
            <p>Id *</p>
            <input placeholder="Id*" {...register("id")} />
            <br />
          </label>
          <br />
          <label htmlFor="Name" className="item">
            <br />
            <p>Name *</p>
            <input placeholder="Name*" {...register("name")} />
            <br />
          </label>

          <label htmlFor="Number" className="item">
            <br />
            <p>Number *</p>
            <input
              type="number"
              placeholder="Number*"
              {...register("number")}
            />
            <br />
          </label>

          <br />
          <br />
          <br />
          <button className="button" type="button" onClick={consultaGet}>
            Consultar agenda
          </button>
          {agenda &&
            agenda.map((telefono) => {
              return (
                <div>
                  Nombre: {telefono.name} || Número: {telefono.number}
                </div>
              );
            })}
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
