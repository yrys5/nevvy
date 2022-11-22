import React from "react";

const RegisterForm = () => {
  return (
    <section className="register-form-container">
        <button className="register-form-exit-button">x</button>
      <div className="register-form-title">
        <h2>Rejestracja</h2>
      </div>
      <form>
        <div id="register-form-input-element">
          <label htmlFor="register-form-name">Nazwa użytkownika</label>
          <input type={"text"} id="register-form-name"></input>
        </div>
        <div id="register-form-input-element">
          <label htmlFor="register-form-name">E-mail</label>
          <input type={"text"} id="register-form-email"></input>
        </div>
        <div id="register-form-input-element">
          <label htmlFor="register-form-name">Hasło</label>
          <input type={"text"} id="register-form-password"></input>
        </div>
        <div id="register-form-input-element">
          <label htmlFor="register-form-name">Potwierdź hasło</label>
          <input type={"text"} id="register-form-confirm-password"></input>
        </div>
        <section className="register-form-accept">
        <div id="register-form-input-element-ch">
          <input type={"checkbox"} id="register-form-confirm-policy"></input>
          <label htmlFor="register-form-confirm-policy">Zapoznałem/am się z Regulaminem forum Nevvy</label>
        </div>
        <div id="register-form-input-element-ch">
          <input type={"checkbox"} id="register-form-confirm-policy2"></input>
          <label htmlFor="register-form-confirm-policy2">Zgadzam się z Warunkami użytkowania</label>
          </div>
          <div id="register-form-input-element-ch">
          <input type={"checkbox"} id="register-form-confirm-policy3"></input>
          <label htmlFor="register-form-confirm-policy3">Wysyłaj wiadomości i aktualizacje</label>
          </div>
        </section>
        <button className="register-form-confirm-button">UTWÓRZ NOWE KONTO</button>
      </form>
    </section>
  );
};

export default RegisterForm;
