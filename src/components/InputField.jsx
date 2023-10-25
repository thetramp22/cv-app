import "../styles/InputField.css";
import PropTypes from "prop-types";

const InputField = ({ name, type, value, onChange }) => {
  return (
    <input
      type={type}
      className="input"
      aria-label={name}
      placeholder={name}
      value={value}
      onChange={onChange}
    />
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
