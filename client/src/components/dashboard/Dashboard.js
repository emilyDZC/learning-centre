import React, { useEffect, useContext, useState } from "react";
import Widget from "./components/Widget";
import { GlobalContext } from "../../context/GlobalState";
import AddPost from "../posts/components/AddPost";
import AddButton from "../shared/AddButton";

const Dashboard = () => {
  const { subjects, getSubjects, addPost } = useContext(GlobalContext);
  const [showAddPost, setShowAddPost] = useState(false);

  useEffect(() => {
    getSubjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>Learning Centre</h1>
      <button
        className="btn"
        onClick={() => setShowAddPost((current) => !current)}
      >
        {showAddPost ? "Hide" : <AddButton text="Add New Post" />}
      </button>
      {showAddPost && <AddPost setShowAddPost={setShowAddPost} />}
      <div className="widgets-container">
        {subjects &&
          subjects.map((subj, i) => {
            return <Widget key={i} name={subj.name} id={subj._id} />;
          })}
      </div>
    </div>
  );
};

export default Dashboard;
