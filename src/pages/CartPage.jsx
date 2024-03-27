import { useEffect, useState } from "react";
import TableC from "../components/TableC";

const CartPage = () => {
  const [products, setProducts] = useState([
    /*   {
      id: 1,
      title: "titulo1",
      price: 1500,
    }, */
  ]);

  const getProductsCart = () => {};

  useEffect(() => {
    getProductsCart();
  }, []);

  return (
    <>
      <TableC array={products} idPage={"cart"} />
    </>
  );
};

export default CartPage;
