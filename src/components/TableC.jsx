import Table from "react-bootstrap/Table";

const TableC = ({ array, idPage }) => {
  console.log(array);
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
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  {idPage !== "homeAdmin" && (
                    <td>
                      <button className="btn btn-success">Editar</button>
                      <button className="btn btn-danger">Eliminar</button>
                    </td>
                  )}
                </tr>
              ))
            : idPage === "cart"
            ? array.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
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
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.userName}</td>
                  <td>{user.role}</td>
                  {idPage !== "homeAdmin" && (
                    <td>
                      <button className="btn btn-success">Editar</button>
                      <button className="btn btn-danger">Eliminar</button>
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
