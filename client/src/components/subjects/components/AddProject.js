import React, { useState, useContext, useEffect } from "react";
import FormInput from "../../shared/FormInput";
import { GlobalContext } from "../../../context/GlobalState";

const AddProject = ({
  setProjectTitle,
  setProjectDescription,
  setProjectLink,
  projectTitle,
  projectDescription,
  projectLink,
  setShowAddProject,
  subject,
}) => {
  const { addProject } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      title: projectTitle,
      description: projectDescription,
      link: projectLink,
      subject,
    };

    addProject(newProject);
    setShowAddProject(false);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <FormInput
          title="Title"
          placeholder="Enter project title"
          func={setProjectTitle}
          value={projectTitle}
        />
        <FormInput
          title="Description"
          placeholder="Enter project description"
          func={setProjectDescription}
          value={projectDescription}
        />
        <FormInput
          title="Link"
          placeholder="Enter link"
          func={setProjectLink}
          value={projectLink}
        />
        <button className="btn">Add project</button>
      </form>
    </div>
  );
};

export default AddProject;
