import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { userRequest } from "../../services/requestMethods";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const loggedUser = useSelector((state) => state.user);

  // funkcja obsługująca zmianę tytułu posta
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // funkcja obsługująca zmianę treści posta
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  // funkcja obsługująca dodawanie posta
  const handleSubmit = (event) => {
    event.preventDefault();

    // wysłanie danych formularza na serwer za pomocą Axios
    userRequest
      .post("/post/new", {
        title: title,
        content: content,
        user_id: loggedUser.currentUser._id
      })
      .then((response) => {
        console.log("Post dodany pomyślnie!");
      })
      .catch((error) => {
        console.error("Błąd podczas dodawania posta:", error);
      });
  };

  return (
    <div className="add-new-post">
      <h1>Dodaj swój post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Tytuł:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Treść:
          <textarea value={content} onChange={handleContentChange} />
        </label>
        <button type="submit">Dodaj post</button>
      </form>
    </div>
  );
};

export default AddPost;
