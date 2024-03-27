import { useEffect } from "react";
import FormC from "../components/FormC";
import { titlePage } from "../helpers/titlePage";

const RegisterPage = () => {
  useEffect(() => {
    titlePage("register");
  }, []);
  return (
    <>
      <FormC idPage={"register"} />
    </>
  );
};

export default RegisterPage;
