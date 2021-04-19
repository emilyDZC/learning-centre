import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Post from "./components/Post";
import moment from "moment";

const Posts = (props) => {
  const { posts, getPosts } = useContext(GlobalContext);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="posts-container">
      <h4>Posts</h4>
      {posts &&
        posts
          .filter((post) => post.subject === props.id)
          .map((post, i) => {
            return (
              <Post
                title={post.title}
                body={post.body}
                date={moment(post.createdAt).format("Do MMMM YYYY, h:mm a")}
                tags={post.tags}
                subject={post.subject}
                id={post._id}
                key={i}
              />
            );
          })}
    </div>
  );
};

export default Posts;
