import React from "react";
import SinglePost from "../ui/SinglePost";

const NewestPosts = (props) => {
  const columns = [];

  Array.from(props.info).forEach((post) => {
      columns.push(
        <SinglePost
        id={post._id}
        title={post.title}
        content={post.content}
        username={post.username}
        key={post.id}
        ></SinglePost>
        );
  });
  return <div className="newest-posts">{columns}</div>;
};

export default NewestPosts;
