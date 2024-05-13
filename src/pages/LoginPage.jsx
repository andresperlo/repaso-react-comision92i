import React, { useEffect } from "react";
import FormC from "../components/FormC";
import { titlePage } from "../helpers/titlePage";

const LoginPage = () => {
  useEffect(() => {
    titlePage("login");
  }, []);
  return (
    <>
      <FormC idPage={"login"} />
    </>
  );
};

export default LoginPage;
