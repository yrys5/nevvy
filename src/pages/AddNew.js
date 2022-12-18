import React from "react";
import { Helmet } from "react-helmet";
import AddPost from "../components/form/AddPost";
import Navbar from "../components/form/Navbar";

const AddNew = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dodaj nowy post - nevvy</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="home-main">
        <AddPost></AddPost>
      </div>
    </div>
  );
};

export default AddNew;
