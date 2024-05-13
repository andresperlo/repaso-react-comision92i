import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import clienteAxios, { configHeader } from "../helpers/clientAxios";

const ChangePass = () => {
  const params = useParams();
  const [formNewPass, setFormNewPass] = useState({
    pass: "",
    rpass: "",
  });

  const handleChange = (ev) => {
    setFormNewPass({ ...formNewPass, [ev.target.name]: ev.target.value });
  };

  const hadleClick = async (ev) => {
    ev.preventDefault();
    if (formNewPass.pass === formNewPass.rpass) {
      const newPass = await clienteAxios.post("/users/changePass", {
        contrasenia: formNewPass.pass,
        token: `${params.token}`,
      });

      if (newPass.status === 200) {
        alert("Contraseña actualizada");
      }
    }
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="pass"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Repetir Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="rpass"
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={hadleClick}>
          Enviar Datos
        </Button>
      </Form>
    </>
  );
};

export default ChangePass;
