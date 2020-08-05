import React, { useState } from "react";
import "./App.css";
import Formulario from "./Components/Formulario";

function App() {
  const [alerta, setalerta] = useState(false);
  const [exito, setexito] = useState(false);
  return (
    <div className="max-w-screen-md  mt-32 mx-auto my-auto">
      <div className={`text-white alerta ${alerta ? "alerta-active" : ""}`}>
        Llena todos los campos
      </div>
      <div className={`text-white exito ${exito ? "alerta-active" : ""}`}>
        Llena todos los campos
      </div>

      <div className="bg-white rounded-lg">
        <Formulario setalerta={setalerta} setexito={setexito} />
      </div>
    </div>
  );
}

export default App;
