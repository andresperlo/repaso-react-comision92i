import { useEffect } from "react";
import { titlePage } from "../helpers/titlePage";

const ErrorPage = () => {
  useEffect(() => {
    titlePage("error");
  }, []);
  return (
    <>
      <h1 className="text-center mt-5">Pagina no encontrada</h1>
    </>
  );
};

export default ErrorPage;
