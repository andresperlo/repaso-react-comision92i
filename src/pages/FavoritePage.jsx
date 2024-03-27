import { useEffect, useState } from "react";
import CardC from "../components/CardC";

const FavoritePage = () => {
  const [favs, setFavs] = useState([]);

  const getFavs = () => {};

  useEffect(() => {
    getFavs();
  }, []);

  return (
    <>
      {favs.map((fav) => (
        <CardC />
      ))}
    </>
  );
};

export default FavoritePage;
