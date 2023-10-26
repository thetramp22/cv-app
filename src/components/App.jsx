import { useState } from "react";
import "../styles/App.css";
import InputSection from "./InputSection";
import Resume from "./Resume";
import resumeData from "../utils/resumeData";

const App = () => {
  const [data, setData] = useState(resumeData);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const generalInputFields = [
    {
      name: "fullName",
      type: "text",
      className: "input",
      placeholder: "Full Name",
    },
    {
      name: "email",
      type: "email",
      className: "input",
      placeholder: "Email",
    },
    {
      name: "location",
      type: "text",
      className: "input",
      placeholder: "Location",
    },
  ];

  return (
    <>
      <header>
        <h1 className="page-title">Resume Builder</h1>
      </header>
      <main>
        <InputSection
          sectionName="General Information"
          inputFields={generalInputFields}
          data={data}
          onChange={handleChange}
        />
        <Resume data={data} />
      </main>
    </>
  );
};

export default App;
