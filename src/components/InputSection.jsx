import "../styles/InputSection.css";
import PropTypes from "prop-types";
import InputField from "./InputField";

const InputSection = ({ generalInfoData, onChange }) => {
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

  const fields = generalInputFields.map((field) => (
    <InputField
      key={field.name}
      name={field.name}
      type={field.type}
      className={field.className}
      placeholder={field.placeholder}
      value={generalInfoData[field.name]}
      onChange={onChange}
    />
  ));

  return (
    <div className="input-section">
      <h2>General Information</h2>
      {fields}
      {/* <input
        name="fullName"
        type="text"
        className="input"
        aria-label="Full Name"
        placeholder="Full Name"
        value={generalInfoData.fullName}
        onChange={onChange}
      />
      <input
        name="email"
        type="email"
        className="input"
        aria-label="Email"
        placeholder="Email"
        value={generalInfoData.email}
        onChange={onChange}
      />
      <input
        name="location"
        type="text"
        className="input"
        aria-label="Location"
        placeholder="Location"
        value={generalInfoData.location}
        onChange={onChange}
      /> */}
    </div>
  );
};

InputSection.propTypes = {
  generalInfoData: PropTypes.object,
  onChange: PropTypes.func,
};

export default InputSection;
