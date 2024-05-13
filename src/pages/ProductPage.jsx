import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "../helpers/useApi";
import { useEffect, useState } from "react";
import ImageC from "../components/ImageC";
import { titlePage } from "../helpers/titlePage";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const token = JSON.parse(sessionStorage.getItem("token"));

  const getOneProduct = async () => {
    const navigate = useNavigate();
    const producto = await fetch(`http://localhost:3001/api/products/${id}`);
    const data = await producto.json();
    setProduct(data.product);
  };

  const addProdFav = async () => {
    token;
    if (!token) {
      alert(
        "Tenes que iniciar sesion para añadir este producto a tus favoritos"
      );
      navigate("/sign-in");
    }

    const productoAgregadoFavorito = await fetch(
      `http://localhost:3001/api/favs/${id}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          auth: `Bearer ${token}`,
        },
      }
    );

    const data = await productoAgregadoFavorito.json();

    if (productoAgregadoFavorito.status === 200) {
      alert(`${data.msg}`);
    }
  };

  const addProdCart = async () => {
    token;
    if (!token) {
      alert("Tenes que iniciar sesion para añadir este producto a tu Carrito");
      navigate("/sign-in");
    }

    const productoAgregadoCarrito = await fetch(
      `http://localhost:3001/api/carts/${id}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          auth: `Bearer ${token}`,
        },
      }
    );

    const data = await productoAgregadoCarrito.json();

    if (productoAgregadoCarrito.status === 200) {
      alert(`${data.msg}`);
    }
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
            urlImage={product.imagen}
            textAlt={product.nombre}
            widImg={"100%"}
          />
        </div>
        <div className="w-25">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <div className="text-center">
            <button className="btn btn-warning me-3" onClick={addProdFav}>
              Añadir a Favoritos
            </button>
            <button className="btn btn-success" onClick={addProdCart}>
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
