import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registro from "./components/Registro/Registro";
import AgregarTarea from "./components/AgregarTarea/AgregarTarea";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "registro",
    element: <Registro />,
  },
  {
    path: "home",
    element: <AgregarTarea />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
