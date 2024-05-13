import { useEffect, useState } from "react";
import CardC from "../components/CardC";
import { Col, Container, Row } from "react-bootstrap";
import clienteAxios, { configHeader } from "../helpers/clientAxios";

const FavoritePage = () => {
  const [favs, setFavs] = useState([]);

  const getFavs = async () => {
    const favs = await clienteAxios.get("/favs", configHeader);
    setFavs(favs.data.favs);
  };

  useEffect(() => {
    getFavs();
  }, []);

  return (
    <>
      <Container>
        <Row>
          {favs.map((fav) => (
            <Col sm="12" md="6" lg="4" key={fav._id}>
              <CardC
                imgCard={fav.imagen}
                titleCard={fav.nombre}
                descCard={fav.precio}
                idProduct={fav._id}
                idPage="favs"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default FavoritePage;
