import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userRequest } from "../../services/requestMethods";

const SinglePost = (props) => {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);
    try {
      await userRequest.delete(`/post/${props.id}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  }

  console.log(props);

  return (
    <div className="single-post">
      <div className="single-post-left">
        <Link to={`/post/${props.id}`}>
        <h1>{props.title}</h1>
        </Link>
        <p>{props.content}</p>
        {/* <p style={{marginTop: "5px", }}>{props.id ? `id: ${props.id}` : ""}</p> */}
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
