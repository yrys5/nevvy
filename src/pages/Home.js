import React from "react";
import UserInfo from "../components/form/UserInfo";
import LogoutButtton from "../components/ui/LogoutButtton";

const Home = () => {
  return (
    <>
      <h2>Strona główna</h2>
      <LogoutButtton></LogoutButtton>
      <UserInfo></UserInfo>
    </>
  );
};

export default Home;
