import React, { useState } from "react";
import Posts from "../posts/Posts";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AddPost from "../posts/components/AddPost";
import AddButton from "../shared/AddButton";

const SubjectPage = () => {
  const { id, name } = useParams();
  const [showAddPost, setShowAddPost] = useState(false);

  return (
    <div className="subject-page">
      <div className="subject-left">
        <h2>Learning Points</h2>
        <li>Testing framework: unittest</li>
      </div>
      <div className="subject-middle">
        <Link to="/">
          Back
          {/* <FontAwesomeIcon icon={faArrowLeft} className="back-arrow" /> */}
        </Link>
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
