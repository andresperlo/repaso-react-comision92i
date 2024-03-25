import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/CardC.css";

const CardC = ({ imgCard, titleCard, descCard }) => {
  return (
    <Card className="card-pricipal">
      <Card.Img variant="top" src={imgCard} />
      <Card.Body>
        <Card.Title className="card-title-principal">{titleCard}</Card.Title>
        <Card.Text className="card-desc">{descCard}</Card.Text>
        <Button variant="primary">Ver Mas</Button>
      </Card.Body>
    </Card>
  );
};

export default CardC;
