import { useEffect, useState } from "react";
import TableC from "../components/TableC";
import { useApi } from "../helpers/useApi";
import clienteAxios from "../helpers/clientAxios";

const AdminProductsPage = (idPage) => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const getProducts = await clienteAxios.get("/products");
    setProducts(getProducts.data.products);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <TableC array={products} idPage={"adminProducts"} idPageP={idPage} />
    </>
  );
};

export default AdminProductsPage;
