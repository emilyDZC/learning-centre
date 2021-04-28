import React, { useState, useContext, useEffect } from "react";
import Posts from "../posts/Posts";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AddPost from "../posts/components/AddPost";
import AddButton from "../shared/AddButton";
import AddProject from "./components/AddProject";
import { GlobalContext } from "../../context/GlobalState";
import FormInput from "../shared/FormInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SubjectPage = () => {
  const { id, name } = useParams();
  const [showAddPost, setShowAddPost] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);
  const {
    subjects,
    getSubjects,
    updateSubject,
    projects,
    getProjects,
  } = useContext(GlobalContext);
  const [subject, setSubject] = useState();
  const [keyword, setKeyword] = useState();
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectLink, setProjectLink] = useState("");

  useEffect(() => {
    getSubjects();
    setSubject(subjects.filter((subj) => subj._id === id)[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = () => {
    const updatedSubject = {
      id: subject._id,
      keywords: [...subject.keywords, keyword],
    };

    updateSubject(updatedSubject);
  };

  return (
    <div className="subject-page">
      <div className="subject-left">
        <h2>Keywords</h2>
        <div className="keyword-input">
          <FormInput
            title=""
            placeholder="Add new keyword..."
            func={setKeyword}
          />
          <FontAwesomeIcon
            icon={faCheck}
            className="check-icon"
            onClick={() => onSubmit()}
          />
        </div>
        {subject &&
          subject.keywords.length > 0 &&
          subject.keywords.map((keyword, i) => {
            return (
              <li>
                <strong>{keyword.split(":")[0]}:</strong>{" "}
                {keyword.split(":")[1]}
              </li>
            );
          })}
      </div>
      <div className="subject-middle">
        <Link to="/">Back</Link>
        <h1>{name}</h1>
        <div>{subject && subject.summary && subject.summary}</div>
        <div className="notes-container-box">
          <h2>My {name} Notes</h2>
          <button
            className="btn subject-page-add-button"
            onClick={() => setShowAddPost((current) => !current)}
          >
            {showAddPost ? "Cancel" : <AddButton text="Add New Post" />}
          </button>
          {showAddPost && (
            <AddPost setShowAddPost={setShowAddPost} subjectName={name} />
          )}
          <Posts id={id} />
        </div>
      </div>
      <div className="subject-right">
        <h2>Projects</h2>
        <button
          className="btn"
          onClick={() => setShowAddProject((current) => !current)}
        >
          {showAddProject ? "Cancel" : <AddButton text="Add New Project" />}
        </button>
        {showAddProject && (
          <AddProject
            setProjectTitle={setProjectTitle}
            setProjectDescription={setProjectDescription}
            setProjectLink={setProjectLink}
            projectLink={projectLink}
            projectTitle={projectTitle}
            projectDescription={projectDescription}
            setShowAddProject={setShowAddProject}
            subject={name}
          />
        )}
        {projects.filter((proj) => proj.subject === id).length > 0 &&
          projects
            .filter((proj) => proj.subject === id)
            .map((proj, i) => {
              return (
                <div key={i}>
                  <a href={proj.link}>
                    <h3>{proj.title}</h3>
                    <p>{proj.description}</p>
                  </a>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default SubjectPage;
