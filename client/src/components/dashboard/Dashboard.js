import React, { useEffect, useContext } from "react";
import Widget from "./components/Widget";
import { GlobalContext } from "../../context/GlobalState";
import AddPost from "../posts/components/AddPost";

const Dashboard = () => {
  const { subjects, getSubjects, addPost } = useContext(GlobalContext);

  useEffect(() => {
    getSubjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>Learning Centre</h1>
      <button>Add new post</button>
      <AddPost />
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
