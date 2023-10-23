import React from "react";

const InputField = ({ name, type }) => {
  return (
    <input type={type} className="input" aria-label={name} placeholder={name} />
  );
};

export default InputField;
