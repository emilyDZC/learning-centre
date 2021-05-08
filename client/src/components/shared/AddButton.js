import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const AddButton = ({ text }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faPencilAlt} /> {text}
    </div>
  );
};

export default AddButton;
