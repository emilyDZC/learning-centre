import React, { useContext, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../../../context/GlobalState";
import { confirmAlert } from "react-confirm-alert";
import EditPost from "./EditPost";

import "react-confirm-alert/src/react-confirm-alert.css";

const Post = ({ id, title, body, tags, date, subject }) => {
  const { deletePost, subjects, getSubjects } = useContext(GlobalContext);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    getSubjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm delete",
      message: "Are you sure you want to delete this post?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deletePost(id),
        },
        {
          label: "No",
          onClick: () => console.log("Cancel delete"),
        },
      ],
    });
  };

  const editPost = () => {
    setEdit(true);
  };

  return (
    <>
      {edit && (
        <EditPost
          id={id}
          title={title}
          body={body}
          subject={subject}
          tags={tags}
          date={date}
          setEdit={setEdit}
          subjects={subjects}
        />
      )}
      {!edit && (
        <div className="post-container">
          <div className="post-header">
            <p className="post-date">{date}</p>
            <p className="post-title">{title}</p>
            <div className="icons-container">
              <button onClick={() => confirmDelete(id)}>
                <FontAwesomeIcon icon={faTrash} className="trash-icon" />
              </button>
              <button onClick={() => editPost()}>
                <FontAwesomeIcon icon={faPencilAlt} className="pencil-icon" />
              </button>
            </div>
          </div>
          <ReactMarkdown className="post-body">{body}</ReactMarkdown>
        </div>
      )}
    </>
  );
};

export default Post;
