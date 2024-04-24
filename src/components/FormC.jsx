import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormC = ({ idPage }) => {
  const [register, setRegister] = useState({
    user: "",
    email: "",
    pass: "",
    rpass: "",
  });

  const [login, setLogin] = useState({
    user: "",
    pass: "",
  });

  const handleChangeReg = (ev) => {
    setRegister({ ...register, [ev.target.name]: ev.target.value });
  };

  const handleChangeLog = (ev) => {
    setLogin({ ...login, [ev.target.name]: ev.target.value });
  };

  const handleClickRegister = async (ev) => {
    ev.preventDefault();
    if (register.pass === register.rpass) {
      const registerUser = await fetch(
        "http://localhost:3001/api/users/register",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            nombreUsuario: register.user,
            emailUsuario: register.email,
            contrasenia: register.pass,
          }),
        }
      );
      if (registerUser.status === 201) {
        alert("Usuario creado con exito");
        location.href = "/sign-in";
      }
    } else {
      alert("las contraseñas no coinciden");
    }
  };

  const handleClickLogin = async (ev) => {
    ev.preventDefault();
    const loginUser = await fetch("http://localhost:3001/api/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nombreUsuario: login.user,
        contrasenia: login.pass,
      }),
    });

    if (loginUser.status === 200) {
      const data = await loginUser.json();
      sessionStorage.setItem("token", JSON.stringify(data.token));
      sessionStorage.setItem("role", JSON.stringify(data.role));

      if (data.role === "admin") {
        location.href = "/home-admin";
      } else {
        location.href = "/";
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <Form className="w-25">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              name="user"
              onChange={
                idPage === "register" ? handleChangeReg : handleChangeLog
              }
            />
          </Form.Group>

          {idPage === "register" && (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email del Usuario</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChangeReg}
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="pass"
              onChange={
                idPage === "register" ? handleChangeReg : handleChangeLog
              }
            />
          </Form.Group>

          {idPage === "register" && (
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="rpass"
                onChange={handleChangeReg}
              />
            </Form.Group>
          )}

          <Form.Group className="d-flex justify-content-center">
            <Button
              variant="primary"
              type="submit"
              className="w-75"
              onClick={
                idPage === "register" ? handleClickRegister : handleClickLogin
              }
            >
              {idPage === "register" ? " Enviar Formulario" : "Iniciar"}
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default FormC;
