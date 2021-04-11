import React from "react";

const Posts = ({ posts }) => {
  return (
    <div className="App">
      <h1>Posts</h1>
      {posts &&
        posts.map((post, i) => {
          return <p key={i}>{post.title}</p>;
        })}
    </div>
  );
};

export default Posts;
