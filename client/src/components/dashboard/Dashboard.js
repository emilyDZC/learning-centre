import React, { useEffect, useContext, useState } from "react";
import Widget from "./components/Widget";
import { GlobalContext } from "../../context/GlobalState";
import AddPost from "../posts/components/AddPost";
import AddButton from "../shared/AddButton";
import Title from "./components/Title";
import AddSubject from "./components/AddSubject";
import { colours } from "../../utils/colours";

const Dashboard = () => {
  const { subjects, getSubjects, addSubject } = useContext(GlobalContext);
  const [showAddPost, setShowAddPost] = useState(false);
  const [showAddSubject, setShowAddSubject] = useState(false);
  const [subjectName, setSubjectName] = useState("");

  useEffect(() => {
    getSubjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
