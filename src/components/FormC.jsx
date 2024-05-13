import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import clienteAxios, { configHeader } from "../helpers/clientAxios";
import { Link, useNavigate } from "react-router-dom";

const FormC = ({ idPage }) => {
  const navigate = useNavigate();
  const [recoveryPass, setRecoveryPass] = useState(null);
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
      const registerUser = await clienteAxios.post(
        "/users/register",
        {
          nombreUsuario: register.user,
          emailUsuario: register.email,
          contrasenia: register.pass,
        },
        configHeader
      );

      if (registerUser.status === 201) {
        alert("Usuario creado con exito");
        navigate("/sign-in");
      }
    } else {
      alert("las contraseñas no coinciden");
    }
  };

  const handleClickLogin = async (ev) => {
    ev.preventDefault();
    console.log(login);
    const loginUser = await clienteAxios.post(
      "/users/login",
      {
        nombreUsuario: login.user,
        contrasenia: login.pass,
      },
      configHeader
    );

    if (loginUser.status === 200) {
      sessionStorage.setItem("token", JSON.stringify(loginUser.data.token));
      sessionStorage.setItem("role", JSON.stringify(loginUser.data.role));

      if (loginUser.data.role === "admin") {
        navigate("/home-admin");
      } else {
        navigate("/");
      }
    }
  };

  const mailRecoveryPass = async (ev) => {
    ev.preventDefault();
    const recovery = await clienteAxios.post("/users/recoveryPass", {
      emailUsuario: recoveryPass,
    });

    if (recovery.status === 200) {
      alert("el mail fue enviado");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <Form className="w-25">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              {idPage === "recoveryPass" ? "  " : "Usuario"}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              name={idPage === "recoveryPass" ? "emailUsuario" : "user"}
              onChange={(ev) =>
                idPage === "register"
                  ? handleChangeReg(ev)
                  : idPage === "recoveryPass"
                  ? setRecoveryPass(ev.target.value)
                  : handleChangeLog(ev)
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

          {idPage !== "recoveryPass" && (
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
              {idPage === "login" && (
                <p className="text-center">
                  Si olvidaste tu contraseña. Haz click
                  <Link to="/recoveryPass">aqui</Link>
                </p>
              )}
            </Form.Group>
          )}

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
                idPage === "register"
                  ? handleClickRegister
                  : idPage === "recoveryPass"
                  ? mailRecoveryPass
                  : handleClickLogin
              }
            >
              {idPage === "register"
                ? " Enviar Formulario"
                : idPage === "recoveryPass"
                ? "Enviar Correo"
                : "Iniciar"}
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default FormC;
