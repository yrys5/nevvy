import React, { useState } from "react";
import { login } from "../../context/redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    console.log(error);
  };

  return (
    <>
      <h2>Formularz logowania</h2>
      <form>
        <label htmlFor="login-form-name">Nazwa użytkownika: </label>
        <input
          type={"text"}
          onChange={(e) => setUsername(e.target.value)}
          id="login-form-name"
        ></input>
        <label htmlFor="login-form-password">Hasło: </label>
        <input
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="hasło"
          id="login-form-password"
        ></input>
        <p style={{color: "red"}}>{error[0]?.response?.data }</p>
        <button onClick={handleClick} disabled={isFetching}>Zaloguj</button>
      </form>
    </>
  );
};

export default LoginForm;
