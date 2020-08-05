import React, { useState } from "react";
import emailjs from "emailjs-com";

const Formulario = ({ setalerta, setexito }) => {
  const [mensaje, setMensaje] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = mensaje;

  const onChange =  (e) => {
    setMensaje({ ...mensaje, [e.target.name]: e.target.value });
  };

  const onSubmit =  async(e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setalerta(true);
      setTimeout(() => {
        setalerta(false);
      }, 4000);
      return;
    }
    const resp = await emailjs
      .sendForm(
        "gmail",
        "template_KIATPN8k",
        e.target,
        "user_CuAcsDIM28VPoIZuShea9"
      )
    //   .then((result) => {
    //     console.log(result.text);
    //   },(error)=>{console.log(error.text)});
        console.log(resp);
        if(resp.status===200){
    setexito(true);
    setTimeout(() => {
      setexito(false);
    }, 4000);
}
  };

  return (
    <form onSubmit={onSubmit} className="px-24 py-16">
      <h1>Contactanos</h1>
      <div className="row">
        <div className="one-half column">
          <label htmlFor="name">Nombre</label>
          <input
            className="w-full"
            onChange={onChange}
            name="name"
            type="text"
            id="name"
            value={name}
          />
        </div>

        <div className="one-half column">
          <label htmlFor="email">Correo</label>
          <input
            className="w-full"
            onChange={onChange}
            name="email"
            type="text"
            id="email"
            value={email}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message">Dejanos un mensaje</label>
        <textarea
          className="w-full"
          onChange={onChange}
          name="message"
          id="message"
          value={message}
        ></textarea>
      </div>
      <input type="submit" className="button-primary sombra" value="Enviar" />
    </form>
  );
};

export default Formulario;
