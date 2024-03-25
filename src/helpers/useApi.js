export const useApi = async (idProduct) => {
  if (idProduct) {
    const products = await fetch(
      `https://fakestoreapi.com/products/${idProduct}`
    );
    const data = await products.json();
    return data;
  } else {
    const products = await fetch("https://fakestoreapi.com/products");
    const data = await products.json();
    return data;
  }
};
