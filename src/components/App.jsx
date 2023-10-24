import React from "react";
import InputSection from "./InputSection";
import { v4 as uuidv4 } from "uuid";
import "../styles/App.css";

const App = () => {
  const generalInfoFields = [
    { name: "Full Name", type: "text", id: uuidv4() },
    { name: "Email", type: "email", id: uuidv4() },
    { name: "Location", type: "text", id: uuidv4() },
  ];

  return (
    <>
      <header>
        <h1>Resume Builder</h1>
      </header>
      <main>
        <InputSection name="General Information" fields={generalInfoFields} />
      </main>
    </>
  );
};

export default App;
