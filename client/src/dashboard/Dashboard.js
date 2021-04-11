import React from "react";
import Widget from "./components/Widget";

const Dashboard = () => {
  return (
    <div className="App">
      <h1>Learning Log</h1>
      <button>Add new post</button>
      <div className="widgets-container">
        <Widget title="Psychology" />
        <Widget title="Neuroscience" />
      </div>
    </div>
  );
};

export default Dashboard;
