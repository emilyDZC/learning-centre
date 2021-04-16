import React, { useEffect, useContext } from "react";
import Widget from "./components/Widget";
import { GlobalContext } from "../../context/GlobalState";

const Dashboard = () => {
  const { subjects, getSubjects } = useContext(GlobalContext);

  useEffect(() => {
    getSubjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(subjects);

  return (
    <div className="App">
      <h1>Learning Log</h1>
      <button>Add new post</button>
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
