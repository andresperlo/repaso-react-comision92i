import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../css/CardC.css";

const CardC = ({ imgCard, titleCard, descCard, idProduct }) => {
  return (
    <Card className="card-pricipal">
      <Card.Img variant="top" src={imgCard} />
      <Card.Body>
        <Card.Title className="card-title-principal">{titleCard}</Card.Title>
        <Card.Text className="card-desc">{descCard}</Card.Text>
        <Link to={`/product/${idProduct}`} className="btn btn-primary">
          Ver Mas
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardC;
