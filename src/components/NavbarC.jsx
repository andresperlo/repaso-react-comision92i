import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import clienteAxios, { configHeaderImg } from "../helpers/clientAxios";
import { useNavigate, NavLink, Link } from "react-router-dom";

const NavbarC = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [imagen, setImagen] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const token = JSON.parse(sessionStorage.getItem("token"));
  const role = JSON.parse(sessionStorage.getItem("role"));

  const logoutUser = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleChange = (ev) => {
    setEditProduct({ ...editProduct, [ev.target.name]: ev.target.value });
  };

  const handleClick = async (ev) => {
    ev.preventDefault();
    const createProduct = await clienteAxios.post("/products", {
      nombre: editProduct.nombre,
      precio: editProduct.precio,
      codigo: editProduct.codigo,
    });

    if (createProduct.status === 201) {
      if (imagen) {
        const formData = new FormData();
        formData.append("imagen", imagen);
        const createImg = await clienteAxios.put(
          `/products/addImg/${createProduct.data.newProd._id}`,
          formData,
          configHeaderImg
        );

        if (createImg.status === 200) {
          alert("Producto Creado con exito");
          handleClose();
          location.reload();
        }
      }
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Link
            className="nav-link"
            to={
              token && role === "user"
                ? "/"
                : token && role === "admin"
                ? "/home-admin"
                : "/"
            }
          >
            Logo
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                className="nav-link"
                to={
                  token && role === "user"
                    ? "/"
                    : token && role === "admin"
                    ? "/home-admin"
                    : "/"
                }
              >
                Inicio
              </NavLink>
              {role !== "admin" && (
                <>
                  <NavLink to="/about-us" className="nav-link">
                    Sobre Nosotros
                  </NavLink>
                  <NavLink to="/contact" className="nav-link">
                    Contacto
                  </NavLink>
                </>
              )}
              {token && role === "user" ? (
                <>
                  <NavLink to="/user/fav" className="nav-link">
                    Favoritos
                  </NavLink>
                  <NavLink to="/user/cart" className="nav-link">
                    Carrito
                  </NavLink>
                </>
              ) : (
                token &&
                role === "admin" && (
                  <>
                    <Button variant="tertiary" onClick={handleShow}>
                      Nuevo Producto
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter email"
                              name="nombre"
                              onChange={handleChange}
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                          >
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                              type="number"
                              name="precio"
                              onChange={handleChange}
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                          >
                            <Form.Label>Codigo</Form.Label>
                            <Form.Control
                              type="text"
                              name="codigo"
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                          >
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control
                              type="file"
                              onChange={(ev) => setImagen(ev.target.files[0])}
                            />
                          </Form.Group>
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={handleClick}
                          >
                            Enviar Datos
                          </Button>
                        </Form>
                      </Modal.Body>
                    </Modal>
                    <NavLink to="/admin/products" className="nav-link">
                      Productos
                    </NavLink>
                    <NavLink to="/admin/users" className="nav-link">
                      Usuarios
                    </NavLink>
                  </>
                )
              )}
            </Nav>
            <Nav className="ms-auto">
              {token ? (
                <NavLink to="#" onClick={logoutUser} className={"nav-link"}>
                  Cerrar Sesion
                </NavLink>
              ) : (
                <>
                  <NavLink to="/sign-in" className="nav-link">
                    Iniciar Sesion
                  </NavLink>
                  <NavLink to="/sign-up" className="nav-link">
                    Registrarse
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
