import React from "react";

const SinglePost = (props) => {
  return (
    <div className="single-post">
      <div className="single-post-left">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
      <div className="single-post-right">
      <p>Nadesłane przez: {props.username}</p>
      </div>
    </div>
  );
};

export default SinglePost;
