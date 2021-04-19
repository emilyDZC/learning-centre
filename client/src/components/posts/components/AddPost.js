import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

const AddPost = ({ setShowAddPost }) => {
  const { addPost } = useContext(GlobalContext);

  // const { title, body, tags, links, subject, subTopic } = req.body;

  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [tags, setTags] = useState();
  const [links, setLinks] = useState();
  const [subject, setSubject] = useState();
  const [subTopic, setSubTopic] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
      tags,
      links,
      subject,
      subTopic,
    };

    addPost(newPost);
    setShowAddPost(false);
  };

  return (
    <div className="add-post-container">
      <h3>New post</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Title</label>
          <input
            type="text"
            placeholder="Enter title..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="textarea">Text</label>
          <textarea
            rows={10}
            placeholder="Enter text..."
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Subject</label>
          <input
            type="text"
            placeholder="Enter topic..."
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Sub-Topic</label>
          <input
            type="text"
            placeholder="Enter source..."
            onChange={(e) => setSubTopic(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Tags</label>
          <input
            type="text"
            placeholder="Enter tags, separated by a comma"
            onChange={(e) =>
              setTags(
                e.target.value.split(",").map((str) => str.trim().toLowerCase())
              )
            }
          />
        </div>
        <button className="btn">Add post</button>
      </form>
    </div>
  );
};

export default AddPost;
