import { useEffect, useState } from "react";
import TableC from "../components/TableC";
import { Button } from "react-bootstrap";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import clienteAxios, { configHeader } from "../helpers/clientAxios";

const CartPage = () => {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState(null);

  const getProductsCart = async () => {
    try {
      const cart = await clienteAxios.get("/carts", configHeader);
      setProducts(cart.data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePay = async () => {
    try {
      initMercadoPago(`${import.meta.env.VITE_ACCESS_TOKEN_MP}`);
      const mercadoPagoPay = await clienteAxios.post(
        "/products/pay",
        {},
        configHeader
      );
      setId(mercadoPagoPay.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsCart();
  }, []);

  return (
    <>
      <TableC array={products} idPage={"cart"} />
      <Button onClick={handlePay}>Pagar</Button>

      {id && (
        <div className="w-25">
          <Wallet
            initialization={{ preferenceId: id, redirectMode: "modal" }}
          />
        </div>
      )}
    </>
  );
};

export default CartPage;
