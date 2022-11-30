import React, { useState } from "react";
import { login } from "../../context/redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    // console.log(error);
  };

  return (
    <>
      <section className="register-form-container h400">
        <button className="register-form-exit-button">x</button>
        <div className="register-form-title">
          <h2>Logowanie</h2>
        </div>
        <form>
          <div id="register-form-input-element">
            <label htmlFor="login-form-name">Nazwa użytkownika: </label>
            <input
              type={"text"}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Wpisz login.."
              id="login-form-name"
            ></input>
          </div>
          <div id="register-form-input-element">
            <label htmlFor="login-form-password">Hasło: </label>
            <input
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Wpisz hasło.."
              id="login-form-password"
            ></input>
          </div>
          <code><p style={{ color: "red", marginTop: "10px" }}>
            {error[0]?.response?.data}
          </p></code>
          <button
            onClick={handleClick}
            disabled={isFetching}
            className="register-form-confirm-button"
          >
            Zaloguj
          </button>
          <Link to="/register"><h4 style={{marginTop:"20px"}}>Nie masz konta? Przejdź do rejestracji</h4></Link>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
