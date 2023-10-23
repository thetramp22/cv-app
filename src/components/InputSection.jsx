import React from "react";
import { InputField } from "./InputField";

const InputSection = () => {
  return (
    <div>
      <h2>General Information</h2>
      <InputField name="Full Name" type="text" />
      <InputField name="Email" type="email" />
      <InputField name="Location" type="text" />
    </div>
  );
};

export default InputSection;
