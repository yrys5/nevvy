import React from 'react'
import { useSelector } from "react-redux";

const UserInfo = () => {
    const loggedUser = useSelector((state) => state.user);
    console.log(loggedUser);
  return (
    <section className='user-info'>
    <h3>Informacje o użytkowniku:</h3>
    <p><b>Nazwa: </b>{loggedUser?.currentUser?.username ?? "brak"}</p>
    <p><b>E-mail: </b>{loggedUser?.currentUser?.email ?? "brak"}</p>
    <p><b>Utworzony: </b>{loggedUser?.currentUser?.createdAt ?? "brak"}</p>
    <p><b>id: </b>{loggedUser?.currentUser?._id ?? "brak"}</p>
    </section>
  )
}

export default UserInfo