import React from "react";
import Posts from "../posts/Posts";
import { useParams } from "react-router-dom";

const SubjectPage = () => {
  const { id, name } = useParams();
  return (
    <div className="App">
      <h1>{name}</h1>
      <Posts id={id} />
    </div>
  );
};

export default SubjectPage;
