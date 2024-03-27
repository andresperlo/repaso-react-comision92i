import {
  useEffect,
  useState,
} from "react"; /* use - Hooks - Metodos = Funciones */
import CarouselC from "../components/CarouselC";
import CardC from "../components/CardC";
import { Col, Container, Row } from "react-bootstrap";
import FooterC from "../components/FooterC";
import PaginationC from "../components/PaginationC";
import { titlePage } from "../helpers/titlePage";
import { useApi } from "../helpers/useApi";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const getProductFakeStore = async () => {
    const data = await useApi();
    setProducts(data);
  };

  useEffect(() => {
    getProductFakeStore();
  }, []);

  useEffect(() => {
    titlePage("home");
  }, []);

  return (
    <>
      <CarouselC />
      <Container>
        <Row>
          {products.map((product) => (
            <Col sm="12" md="6" lg="4" key={product.id} className="my-2 mt-5">
              <CardC
                imgCard={product.image}
                titleCard={product.title}
                descCard={product.description}
                idProduct={product.id}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <div className="d-flex justify-content-center mt-5">
        <PaginationC />
      </div>
      <FooterC />
    </>
  );
};

export default HomePage;
