import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import FormInput from "../../shared/FormInput";

const EditPost = (props) => {
  const { updatePost } = useContext(GlobalContext);
  const { setEdit } = props;

  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  const [subject, setSubject] = useState(props.subject);
  const [tags, setTags] = useState(props.tags);

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedPost = {
      id: props.id,
      title,
      body,
      subject,
      tags,
    };

    updatePost(updatedPost);
    setEdit(false);
  };

  const filterSubjects = (subjects) => {
    return subjects.filter((subj) => subj._id === props.subject)[0].name;
  };

  return (
    <div>
      <h3>Edit post</h3>
      <form onSubmit={onSubmit}>
        <FormInput
          title="Title"
          placeholder="Enter title..."
          func={setTitle}
          value={title}
        />
        <div className="form-control">
          <label htmlFor="textarea">Text</label>
          <textarea
            rows={10}
            placeholder="Enter text..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Subject</label>
          <select
            name="subject"
            value={filterSubjects(props.subjects)}
            onChange={(e) => setSubject(e.target.value)}
          >
            {props.subjects.map((subject, i) => {
              return <option value={subject.name}>{subject.name}</option>;
            })}
          </select>
        </div>
        <FormInput
          title="Tags"
          placeholder="Enter tags, separated by a comma..."
          func={setTags}
          value={tags}
        />
        <button className="btn">Update post</button>
      </form>
      <button className="btn btn-cancel" onClick={() => setEdit(false)}>
        Cancel
      </button>
    </div>
  );
};

export default EditPost;
