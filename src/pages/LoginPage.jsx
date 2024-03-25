import React, { useEffect } from "react";
import FormC from "../components/FormC";
import { titlePage } from "../helpers/titlePage";

const LoginPage = () => {
  useEffect(() => {
    titlePage("login");
  }, []);
  return (
    <>
      <FormC />
    </>
  );
};

export default LoginPage;
