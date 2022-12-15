import React from "react";
import LoginForm from "../components/form/LoginForm";
import { Helmet } from "react-helmet";

const Login = () => {
  return (
    <div className="align-justify-center">
      <Helmet>
        <title>Logowanie - nevvy</title>
      </Helmet>
      <LoginForm></LoginForm>
    </div>
  );
};

export default Login;
