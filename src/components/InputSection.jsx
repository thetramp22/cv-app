import "../styles/InputSection.css";
import PropTypes from "prop-types";

const GeneralInputSection = ({ generalInfoData, onChange }) => {
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
      />
    </div>
  );
};

GeneralInputSection.propTypes = {
  generalInfoData: PropTypes.object,
  onChange: PropTypes.func,
};

export default GeneralInputSection;
