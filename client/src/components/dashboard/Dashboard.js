import React, { useEffect, useContext, useState } from "react";
import Widget from "./components/Widget";
import { GlobalContext } from "../../context/GlobalState";
import AddPost from "../posts/components/AddPost";
import AddButton from "../shared/AddButton";
import Title from "./components/Title";

const Dashboard = () => {
  const { subjects, getSubjects } = useContext(GlobalContext);
  const [showAddPost, setShowAddPost] = useState(false);

  useEffect(() => {
    getSubjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const colours = [
    "#00AFB9", // turquoise (verdigris)
    "#FDFCDC", // light yellow
    "#2896b8", // cgblue
    "#D0F4DE", // aero blue (pastel green)
    "#6D9DC5", // cerulean forest
    "#A9DEF9", // uranian blue
  ];

  return (
    <div className="App">
      <Title />
      <button
        className="btn dashboard-button"
        onClick={() => setShowAddPost((current) => !current)}
      >
        {showAddPost ? "Cancel" : <AddButton text="Add New Post" />}
      </button>
      {showAddPost && (
        <div className="dashboard-form-container">
          <AddPost
            setShowAddPost={setShowAddPost}
            subjectName={subjects[0].name}
          />
        </div>
      )}
      <div className="widgets-container">
        {subjects &&
          subjects.map((subj, i) => {
            return (
              <Widget
                key={i}
                name={subj.name}
                id={subj._id}
                colour={colours[i]}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Dashboard;
