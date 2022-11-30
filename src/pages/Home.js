import React from "react";
import Navbar from "../components/form/Navbar";
import UserInfo from "../components/form/UserInfo";
import UserNotVerifed from "../services/UserNotVerifed";

const Home = () => {
  return (
    <>
    <div className="home-container">
      <Navbar></Navbar>
      <section className="home-main">
      <UserInfo></UserInfo>
      </section>
      <UserNotVerifed></UserNotVerifed>
    </div>
    </>
  );
};

export default Home;
