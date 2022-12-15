import React from "react";
import SinglePost from "../ui/SinglePost";

const NewestPosts = (props) => {
  const columns = [];

  console.log(columns)

  Array.from(props.info).forEach((post) => {
    columns.push(
      <SinglePost
        title={post.title}
        content={post.content}
        username={post.username}
        key={post.title}
      ></SinglePost>
    );
  });
  return <div className="newest-posts">{columns}</div>;
};

export default NewestPosts;
