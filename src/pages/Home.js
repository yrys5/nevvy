import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/form/Navbar";
import UserInfo from "../components/form/UserInfo";
import UserNotVerifed from "../services/UserNotVerifed";
import { Helmet } from "react-helmet";
import NewestPosts from "../components/form/NewestPosts";
import { BASE_URL } from "../services/requestMethods"

const Home = () => {
  const [newstPosts, setNewestPosts] = useState("");
  console.log(newstPosts);
  useEffect(() => {
    const getNewestPosts = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}post/get-all`
        );
        setNewestPosts(res.data.posts);
      } catch (err) {}
    };
    getNewestPosts();
  }, []);

  return (
    <>
      <div className="home-container">
        <Helmet>
          <title>Strona główna - nevvy</title>
        </Helmet>
        <Navbar></Navbar>
        <section className="home-main">
          <section className="home-main-left">
            <h2>Najnowsze posty</h2>
            <NewestPosts info={newstPosts}></NewestPosts>
          </section>
          <section className="home-main-right">
            <h3>Wyróżnione posty</h3>
          </section>
        </section>
        <UserNotVerifed></UserNotVerifed>
      </div>
    </>
  );
};

export default Home;
