import React from "react";
import InputSection from "./InputSection";
import "../styles/App.css";

const App = () => {
  const generalInfoFields = [
    { name: "Full Name", type: "text" },
    { name: "Email", type: "email" },
    { name: "Location", type: "text" },
  ];

  return (
    <>
      <InputSection name="General Information" fields={generalInfoFields} />
    </>
  );
};

export default App;
