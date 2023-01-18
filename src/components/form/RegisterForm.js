import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../context/redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const policyRef = { policy1: useRef(null), policy2: useRef(null), policy3: useRef(null) };

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    const policy = {
      policy1: policyRef.policy1.current.checked,
      policy2: policyRef.policy2.current.checked,
      policy3: policyRef.policy3.current.checked
    };
    register(dispatch, { username, password, email, passwordConfirm, policy });
  };

  return (
    <section className="register-form-container">
      <div className="register-form-title">
        <h2>Rejestracja</h2>
      </div>
      <form>
        <div id="register-form-input-element">
          <label htmlFor="register-form-name">Nazwa użytkownika</label>
          <input
            type={"text"}
            id="register-form-name"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div id="register-form-input-element">
          <label htmlFor="register-form-email">E-mail</label>
          <input type={"text"} id="register-form-email" onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div id="register-form-input-element">
          <label htmlFor="register-form-password">Hasło</label>
          <input type={"password"} id="register-form-password" onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div id="register-form-input-element">
          <label htmlFor="register-form-name">Potwierdź hasło</label>
          <input type={"password"} id="register-form-confirm-password" onChange={(e) => setPasswordConfirm(e.target.value)}></input>
        </div>
        <section className="register-form-accept">
          <div id="register-form-input-element-ch">
            <input type={"checkbox"} id="register-form-confirm-policy" ref={policyRef.policy1}></input>
            <label htmlFor="register-form-confirm-policy">
              Zapoznałem/am się z Regulaminem forum Nevvy
            </label>
          </div>
          <div id="register-form-input-element-ch">
            <input type={"checkbox"} id="register-form-confirm-policy2" ref={policyRef.policy2}></input>
            <label htmlFor="register-form-confirm-policy2">
              Zgadzam się z Warunkami użytkowania
            </label>
          </div>
          <div id="register-form-input-element-ch">
            <input type={"checkbox"} id="register-form-confirm-policy3" ref={policyRef.policy3}></input>
            <label htmlFor="register-form-confirm-policy3">
              Wysyłaj wiadomości i aktualizacje
            </label>
          </div>
        </section>
        <code><p style={{ color: "red", marginTop: "10px" }}>
            {error[0]?.response?.data}
          </p></code>
        <button
          className="register-form-confirm-button"
          onClick={handleClick}
          disabled={isFetching}
        >
          UTWÓRZ NOWE KONTO
        </button>
        <Link to="/login">
          <h4 style={{ marginTop: "20px" }}>
            Posiadasz już konto? Przejdź do logowania
          </h4>
        </Link>
      </form>
    </section>
  );
};

export default RegisterForm;
