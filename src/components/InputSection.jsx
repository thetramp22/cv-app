/* eslint-disable react/prop-types */
import "../styles/InputSection.css";
import { useState } from "react";

const GeneralInputSection = () => {
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
    <div className="input-section">
      <h2>General Information</h2>
      <input
        name="fullName"
        type="text"
        className="input"
        aria-label="Full Name"
        placeholder="Full Name"
        value={generalInfoData.fullName}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        className="input"
        aria-label="Email"
        placeholder="Email"
        value={generalInfoData.email}
        onChange={handleChange}
      />
      <input
        name="location"
        type="text"
        className="input"
        aria-label="Location"
        placeholder="Location"
        value={generalInfoData.location}
        onChange={handleChange}
      />
    </div>
  );
};

export default GeneralInputSection;
