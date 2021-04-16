import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Posts = () => {
  const { posts, getPosts } = useContext(GlobalContext);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      {posts &&
        posts
          // .filter((post) => post.subject === subject)
          .map((post, i) => {
            return (
              <p key={i}>
                {post.title}: {post.body}
              </p>
            );
          })}
    </div>
  );
};

export default Posts;
