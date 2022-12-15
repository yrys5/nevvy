import React from "react";
import RegisterForm from "../components/form/RegisterForm";
import { Helmet } from "react-helmet";

const Register = () => {
  return (
    <div className="align-justify-center">
      <Helmet>
        <title>Rejestracja - nevvy</title>
      </Helmet>
      <RegisterForm></RegisterForm>
    </div>
  );
};

export default Register;
