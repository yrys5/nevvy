import React from "react";
import { Helmet } from "react-helmet";
import AddPost from "../components/form/AddPost";
import Navbar from "../components/form/Navbar";
import UserInfo from "../components/form/UserInfo";

const User = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Profil użytkownika - nevvy</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="home-main">
      <section className="user-main-left">
        <UserInfo></UserInfo>
        </section>
        <section className="user-main-right">
            <AddPost></AddPost>
        </section>
      </div>
    </div>
  );
};

export default User;
