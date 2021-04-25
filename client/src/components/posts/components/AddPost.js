import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import FormInput from "../../shared/FormInput";

const AddPost = ({ setShowAddPost, subjectName }) => {
  const { addPost, subjects, getSubjects } = useContext(GlobalContext);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    getSubjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const { title, body, tags, links, subject, subTopic } = req.body;

  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [tags, setTags] = useState();
  const [links, setLinks] = useState();
  const [subject, setSubject] = useState(subjectName);

  const onSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
      tags,
      links,
      subject,
    };

    addPost(newPost);
    setShowAddPost(false);
  };

  return (
    <div className="add-post-container">
      <h3>New post</h3>
      <form onSubmit={onSubmit}>
        <FormInput title="Title" placeholder="Enter title..." func={setTitle} />
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
          <select
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            {subjects.map((subject, i) => {
              return <option value={subject.name}>{subject.name}</option>;
            })}
          </select>
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
