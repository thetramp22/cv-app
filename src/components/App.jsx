import { useState } from "react";
import "../styles/App.css";
import InputSection from "./InputSection";
import Resume from "./Resume";
import resumeData from "../utils/resumeData";
import inputFieldGroups from "../utils/inputFieldGroups";

const App = () => {
  const [generalData, setGeneralData] = useState(resumeData.general);
  const [experienceData, setExperienceData] = useState(resumeData.experience);
  const [educationData, setEducationData] = useState(resumeData.education);

  const handleGeneralInfoChange = (e) => {
    const value = e.target.value;
    setGeneralData({ ...generalData, [e.target.name]: value });
  };

  const handleExperienceInfoChange = (e) => {
    const value = e.target.value;
    setExperienceData({ ...experienceData, [e.target.name]: value });
  };

  const handleEducationInfoChange = (e) => {
    const value = e.target.value;
    setEducationData({ ...educationData, [e.target.name]: value });
  };

  return (
    <>
      <div className="main-container">
        <header>
          <h1 className="page-title">Resume Builder</h1>
        </header>
        <main className="main">
          <aside className="sidebar">
            <InputSection
              sectionName="General Information"
              inputFields={inputFieldGroups.general}
              data={generalData}
              onChange={handleGeneralInfoChange}
            />
            <InputSection
              sectionName="Experience"
              inputFields={inputFieldGroups.experience}
              data={experienceData}
              onChange={handleExperienceInfoChange}
            />
            <InputSection
              sectionName="Education"
              inputFields={inputFieldGroups.education}
              data={educationData}
              onChange={handleEducationInfoChange}
            />
          </aside>
          <section className="resume-container">
            <Resume data={{ generalData, experienceData, educationData }} />
          </section>
        </main>
      </div>
    </>
  );
};

export default App;
