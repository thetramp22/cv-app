import React from "react";
import InputField from "./InputField";

const InputSection = ({ name, fields }) => {
  return (
    <div>
      <h2>{name}</h2>
      {fields.map((field) => (
        <InputField
          key={crypto.randomUUID}
          name={field.name}
          type={field.type}
        />
      ))}
    </div>
  );
};

export default InputSection;
