import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Posts = (props) => {
  const { posts, getPosts } = useContext(GlobalContext);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h4>Posts</h4>
      {posts &&
        posts
          .filter((post) => post.subject === props.id)
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
