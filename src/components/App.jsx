import { useState } from "react";
import "../styles/App.css";
import GeneralInputSection from "./InputSection";
import Resume from "./Resume";

const App = () => {
  const [generalInfoData, setGeneralInfoData] = useState({
    fullName: "",
    email: "",
    location: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setGeneralInfoData({ ...generalInfoData, [e.target.name]: value });
  };

  return (
    <>
      <header>
        <h1 className="page-title">Resume Builder</h1>
      </header>
      <main>
        <GeneralInputSection
          generalInfoData={generalInfoData}
          onChange={handleChange}
        />
        <Resume generalInfoData={generalInfoData} />
      </main>
    </>
  );
};

export default App;
