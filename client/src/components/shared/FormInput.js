import React from "react";

const FormInput = ({ title, placeholder, func, value }) => {
  return (
    <div className="form-control">
      <label htmlFor="text">{title}</label>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => func(e.target.value)}
        value={value ? value : null}
      />
    </div>
  );
};

export default FormInput;
