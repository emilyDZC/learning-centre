import React, { useEffect, useContext, useState } from "react";
import Widget from "./components/Widget";
import { GlobalContext } from "../../context/GlobalState";
import AddPost from "../posts/components/AddPost";
import AddButton from "../shared/AddButton";
import Title from "./components/Title";
import AddSubject from "./components/AddSubject";

const Dashboard = () => {
  const { subjects, getSubjects, addSubject } = useContext(GlobalContext);
  const [showAddPost, setShowAddPost] = useState(false);
  const [showAddSubject, setShowAddSubject] = useState(false);
  const [subjectName, setSubjectName] = useState("");

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
    "#B6A6CA", // lilac
    "#A9DEF9", // uranian blue
    "#D5CFE1", // languid lavender
  ];

  const handleAddSubject = () => {
    const newSubject = {
      name: subjectName,
    };

    addSubject(newSubject);
    setShowAddSubject(false);
  };

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
        <div
          className="widget"
          style={{ cursor: "pointer" }}
          onClick={() => (showAddSubject ? "" : setShowAddSubject(true))}
        >
          {!showAddSubject && <div className="widget-heading-plus">+</div>}
          {showAddSubject && (
            <AddSubject
              setSubjectName={setSubjectName}
              subjectName={subjectName}
              handleAddSubject={handleAddSubject}
              setShowAddSubject={setShowAddSubject}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
