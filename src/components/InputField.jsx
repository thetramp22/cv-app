/* eslint-disable react/prop-types */
import "../styles/InputField.css";

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

export default InputField;
