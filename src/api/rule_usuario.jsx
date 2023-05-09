export const consultarTelefonos = async () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "http://localhost:8000/api/telefonoss",
      requestOptions
    );
    if (response.ok) {
      const respuesta = await response.json();
      return respuesta.agenda;
    } else {
      console.log(response);
      return response;
    }
  } catch (error) {
    return error.message;
  }
};
