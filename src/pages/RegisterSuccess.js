import React from 'react'
import Navbar from '../components/form/Navbar'
import UserNotVerifed from '../services/UserNotVerifed'

const RegisterSuccess = () => {
  return (
      <div className="home-container">
      <section className="register-confirm-main">
        <h1>Rejestracja przebiegła pomyślnie!</h1>
        <p>Wysłaliśmy na twojego maila wiadomość z weryfikacją. Przed zalogowaniem musisz potwierdzić założenie konta.</p>
      </section>
        <UserNotVerifed></UserNotVerifed>
    </div>
  )
}

export default RegisterSuccess