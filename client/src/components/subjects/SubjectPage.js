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
    <div className="App">
      <Link to="/">
        <FontAwesomeIcon icon={faArrowLeft} className="back-arrow" />
      </Link>
      <h1>{name}</h1>
      <button
        className="btn"
        onClick={() => setShowAddPost((current) => !current)}
      >
        {showAddPost ? "Hide" : <AddButton text="Add New Post" />}
      </button>
      {showAddPost && <AddPost setShowAddPost={setShowAddPost} />}
      <Posts id={id} />
    </div>
  );
};

export default SubjectPage;
