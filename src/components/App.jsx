import { useState } from "react";
import "../styles/App.css";
import InputSection from "./InputSection";
import Resume from "./Resume";
import resumeData from "../utils/resumeData";
import inputFieldGroups from "../utils/inputFieldGroups";

const App = () => {
  const [data, setData] = useState(resumeData);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  return (
    <>
      <header>
        <h1 className="page-title">Resume Builder</h1>
      </header>
      <main>
        <InputSection
          sectionName="General Information"
          inputFields={inputFieldGroups.generalInputFields}
          data={data}
          onChange={handleChange}
        />
        <Resume data={data} />
      </main>
    </>
  );
};

export default App;
