import { useEffect, useState } from "react";
import TableC from "../components/TableC";
import { useApi } from "../helpers/useApi";

const AdminProductsPage = (idPage) => {
  const [products, setProduct] = useState([]);

  const getAllProducts = async () => {
    const allProducts = await useApi();
    console.log(allProducts);
    setProduct(allProducts);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <TableC array={products} idPage={"adminProducts"} />
    </>
  );
};

export default AdminProductsPage;
