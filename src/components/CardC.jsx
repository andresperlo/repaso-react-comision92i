import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../css/CardC.css";
import clienteAxios, { configHeader } from "../helpers/clientAxios";

const CardC = ({ imgCard, titleCard, descCard, idProduct, idPage }) => {
  const deleteFavProd = async () => {
    const confirmarEliminarProducto = confirm(
      "Estas seguro de que quieres eliminar este producto de Favoritos?"
    );

    if (confirmarEliminarProducto) {
      const borrarProductoFavoritos = await clienteAxios.delete(
        `/favs/${idProduct}`,
        configHeader
      );

      if (borrarProductoFavoritos.status === 200) {
        alert("Producto eliminado de Favorito");
      }
    }
  };
  return (
    <Card className="card-pricipal">
      <Card.Img variant="top" src={imgCard} />
      <Card.Body>
        <Card.Title className="card-title-principal">{titleCard}</Card.Title>
        <Card.Text className="card-desc">{descCard}</Card.Text>
        {idPage === "favs" ? (
          <Link to={`#`} className="btn btn-danger" onClick={deleteFavProd}>
            Eliminar
          </Link>
        ) : (
          <Link to={`/product/${idProduct}`} className="btn btn-primary">
            Ver Mas
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default CardC;
