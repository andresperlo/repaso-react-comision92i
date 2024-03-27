import { useParams } from "react-router-dom";
import { useApi } from "../helpers/useApi";
import { useEffect, useState } from "react";
import ImageC from "../components/ImageC";
import { titlePage } from "../helpers/titlePage";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getOneProduct = async () => {
    const data = await useApi(id);
    setProduct(data);
  };

  useEffect(() => {
    getOneProduct();
    titlePage("product");
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center mt-5 align-items-center">
        <div className="w-25 me-5">
          <ImageC
            urlImage={product.image}
            textAlt={product.title}
            widImg={"100%"}
          />
        </div>
        <div className="w-25">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <div className="text-center">
            <button className="btn btn-warning me-3">Añadir a Favoritos</button>
            <button className="btn btn-success">Añadir al Carrito</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
