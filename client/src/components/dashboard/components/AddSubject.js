import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import FormInput from "../../shared/FormInput";

const AddSubject = ({
  setSubjectName,
  subjectName,
  handleAddSubject,
  setShowAddSubject,
}) => {
  return (
    <div>
      <div className="keyword-input">
        <FormInput
          title=""
          placeholder="Enter new subject name"
          func={setSubjectName}
          value={subjectName}
        />
        <FontAwesomeIcon
          icon={faCheck}
          className="check-icon"
          onClick={() => handleAddSubject()}
        />
      </div>
      <div
        className="cancel-add-subject"
        onClick={() => setShowAddSubject(false)}
      >
        Cancel
      </div>
    </div>
  );
};

export default AddSubject;
