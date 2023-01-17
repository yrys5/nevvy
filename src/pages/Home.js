import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/form/Navbar";
import UserInfo from "../components/form/UserInfo";
import UserNotVerifed from "../services/UserNotVerifed";
import { Helmet } from "react-helmet";
import NewestPosts from "../components/form/NewestPosts";
import { BASE_URL } from "../services/requestMethods";
import Footer from "../components/form/Footer";
import CategorySlider from "../components/ui/CategorySlider";
import { sliderItems } from "../data/categoryGames";

const Home = () => {
  const [newstPosts, setNewestPosts] = useState("");
  const [category, setCategory] = useState("");

  function findTitleByDesc(arr, desc) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].desc !== "") {
        if (arr[i].desc === desc) {
          return arr[i].title;
        }
      }
    }
    return null;
  }

  useEffect(() => {
    const getNewestPosts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}post/get-all/${category}`);
        setNewestPosts(res.data.posts);
      } catch (err) {}
    };
    getNewestPosts();
  }, [category]);

  return (
    <>
      <div className="home-container">
        <Helmet>
          <title>Strona główna - nevvy</title>
        </Helmet>
        <Navbar></Navbar>
        <CategorySlider
          category={category}
          setCategory={setCategory}
        ></CategorySlider>
        <section className="home-main">
          <section className="home-main-left">
            <h2>Najnowsze posty {findTitleByDesc(sliderItems, category)}</h2>
            <NewestPosts info={newstPosts}></NewestPosts>
          </section>
          <section className="home-main-right"></section>
        </section>
        <Footer></Footer>
        <UserNotVerifed></UserNotVerifed>
      </div>
    </>
  );
};

export default Home;
