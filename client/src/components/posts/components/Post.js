import React from "react";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

const Post = ({ id, title, body, tags, date, subject }) => {
  return (
    <div className="post-container">
      <div className="post-header">
        <p className="post-date">{date}</p>
        <p className="post-title">{title}</p>
      </div>
      <ReactMarkdown className="post-body">{body}</ReactMarkdown>
      {/* <button onClick={() => confirmDelete(id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button onClick={() => editPost()}>
            <FontAwesomeIcon icon={faPencilAlt} />
          </button> */}
    </div>
  );
};

export default Post;
