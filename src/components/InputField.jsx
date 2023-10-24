import React from "react";
import "../styles/InputField.css";

const InputField = ({ name, type }) => {
  return (
    <input type={type} className="input" aria-label={name} placeholder={name} />
  );
};

export default InputField;
