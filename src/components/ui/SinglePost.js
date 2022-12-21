import { Button } from "@mui/material";
import React, { useState } from "react";
import { userRequest } from "../../services/requestMethods";

const SinglePost = (props) => {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);
    try {
      // tutaj należy wysłać żądanie DELETE do API
      await userRequest.delete(`/post/${props.id}`);
    } catch (error) {
      // obsłuż błąd, np. wyświetljąc komunikat o błędzie
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div className="single-post">
      <div className="single-post-left">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <p style={{marginTop: "5px", }}>{props.id ? `id: ${props.id}` : ""}</p>
      </div>
      <div className="single-post-right">
        <p>
          {props.username ? (
            `Nadesłane przez: ${props.username}`
          ) : (
            <Button onClick={() => handleDelete()} disabled={isDeleting}>
              {isDeleting ? "Usuwanie..." : "Usuń"}
            </Button>
          )}
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
