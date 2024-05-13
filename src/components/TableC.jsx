import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import clienteAxios, {
  configHeader,
  configHeaderImg,
} from "../helpers/clientAxios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const TableC = ({ array, idPage, idPageP }) => {
  const [editUser, setEditUser] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const [imagen, setImagen] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userFunction = (userObj) => {
    console.log(userObj);
    handleShow();
    setEditUser(userObj);
  };

  const handleChange = (ev) => {
    setEditUser({ ...editUser, [ev.target.name]: ev.target.value });
  };

  const editUserF = async () => {
    try {
      const updateUser = await clienteAxios.put(
        `/users/${editUser._id}`,
        editUser,
        configHeader
      );

      if (updateUser.status === 200) {
        alert("usuario actualizado");
        location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (idUser) => {
    try {
      const confirmDelUser = confirm(
        "Estas seguro de que quieres eliminar este usuario?"
      );

      if (confirmDelUser) {
        const delUser = await clienteAxios.delete(
          `/users/${idUser}`,
          configHeader
        );

        console.log(delUser);

        if (delUser.status === 200) {
          alert("Usuario eliminado");
          location.reload();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const delProduct = async (idProd) => {
    try {
      const confirmDelProduct = confirm(
        "Estas seguro de eliminar este producto?"
      );

      if (confirmDelProduct) {
        const deleteProduct = await clienteAxios.delete(
          `/products/${idProd}`,
          configHeader
        );

        console.log(deleteProduct);
        if (deleteProduct.status === 200) {
          alert("Producto eliminado");
          location.reload();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeProduct = (ev) => {
    setEditProduct({ ...editProduct, [ev.target.name]: ev.target.value });
  };

  const editProductF = (producto) => {
    setShow(true);
    setEditProduct(producto);
  };

  const handleClickProducts = async (ev) => {
    ev.preventDefault();
    const updateDataProduct = await clienteAxios.put(
      `/products/${editProduct._id}`,
      {
        nombre: editProduct.nombre,
        precio: editProduct.precio,
        codigo: editProduct.codigo,
      },
      configHeader
    );

    if (updateDataProduct.status === 200) {
      console.log(updateDataProduct);
      if (imagen) {
        const formData = new FormData();
        formData.append("imagen", imagen);

        const updateImgProduct = await clienteAxios.put(
          `/products/addImg/${updateDataProduct.data.updateProduct._id}`,
          formData,
          configHeaderImg
        );

        if (updateImgProduct.status === 200) {
          alert("Producto Actualizado");
        }
      }
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <Table striped bordered hover className="w-75">
        <thead>
          <tr>
            {idPage === "adminProducts" ? (
              <>
                <th>ID</th>
                <th>Titulo</th>
                <th>Precio</th>
                {idPage !== "homeAdmin" && <th>Editar / Eliminar</th>}
              </>
            ) : idPage === "cart" ? (
              <>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>

                <th>Eliminar</th>
              </>
            ) : (
              <>
                <th>ID</th>
                <th>Usuario</th>
                <th>Role</th>
                {idPage !== "homeAdmin" && <th>Editar / Eliminar</th>}
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {idPage === "adminProducts"
            ? array.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.nombre}</td>
                  <td>{product.precio}</td>
                  {idPageP !== "homeAdmin" && (
                    <td>
                      <Button
                        variant="success"
                        onClick={() => editProductF(product)}
                      >
                        Editar
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
                                name="nombre"
                                value={editProduct?.nombre}
                                onChange={handleChangeProduct}
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
                                value={editProduct?.precio}
                                onChange={handleChangeProduct}
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
                                value={editProduct?.codigo}
                                onChange={handleChangeProduct}
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
                              onClick={handleClickProducts}
                            >
                              Guardar Cambios
                            </Button>
                          </Form>
                        </Modal.Body>
                      </Modal>
                      <button
                        className="btn btn-danger"
                        onClick={() => delProduct(product._id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  )}
                </tr>
              ))
            : idPage === "cart"
            ? array.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.nombre}</td>
                  <td>{product.precio}</td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>
                    <p>Total</p>
                  </td>
                  <td>
                    <button className="btn btn-danger">Eliminar</button>
                  </td>
                </tr>
              ))
            : array.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.nombreUsuario}</td>
                  <td>{user.role}</td>
                  {idPage !== "homeAdmin" && (
                    <td>
                      <div>
                        <Button
                          variant="success"
                          onClick={() => userFunction(user)}
                        >
                          Editar
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
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="nombreUsuario"
                                  placeholder="Enter email"
                                  value={editUser?.nombreUsuario}
                                  onChange={(ev) => handleChange(ev)}
                                />
                              </Form.Group>

                              <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                              >
                                <Form.Label>Role</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Role: por ejemplo Administrador"
                                  name="role"
                                  value={editUser?.role}
                                  onChange={(ev) => handleChange(ev)}
                                />
                              </Form.Group>

                              <Button
                                variant="primary"
                                type="submit"
                                onClick={editUserF}
                              >
                                Guardar Cambios
                              </Button>
                            </Form>
                          </Modal.Body>
                        </Modal>
                      </div>
                      {user.role !== "admin" && (
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteUser(user._id)}
                        >
                          Eliminar
                        </button>
                      )}
                    </td>
                  )}
                </tr>
              ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableC;
