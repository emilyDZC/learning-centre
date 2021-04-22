import React, { useState, useContext, useEffect } from "react";
import Posts from "../posts/Posts";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AddPost from "../posts/components/AddPost";
import AddButton from "../shared/AddButton";
import { GlobalContext } from "../../context/GlobalState";

const SubjectPage = () => {
  const { id, name } = useParams();
  const [showAddPost, setShowAddPost] = useState(false);
  const { subjects, getSubjects } = useContext(GlobalContext);
  const [subject, setSubject] = useState();

  useEffect(() => {
    getSubjects();
    console.log(subjects);
    setSubject(subjects.filter((subj) => subj._id === id)[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="subject-page">
      <div className="subject-left">
        <h2>Keywords</h2>
        {subject.keywords &&
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
        <div>
          Summary of this subject, what I'm learning and the projects I've made.
        </div>
        <div className="notes-container-box">
          <h2>My {name} Notes</h2>
          <button
            className="btn subject-page-add-button"
            onClick={() => setShowAddPost((current) => !current)}
          >
            {showAddPost ? "Cancel" : <AddButton text="Add New Post" />}
          </button>
          {showAddPost && (
            <AddPost setShowAddPost={setShowAddPost} subject={name} />
          )}
          <Posts id={id} />
        </div>
      </div>
      <div className="subject-right">
        <h2>Projects</h2>
        <li>Python katas: https://github.com/emilyDZC/python-katas</li>
      </div>
    </div>
  );
};

export default SubjectPage;
