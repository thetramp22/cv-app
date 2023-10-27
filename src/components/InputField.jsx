import "../styles/InputField.css";
import PropTypes from "prop-types";

const InputField = ({
  name,
  type,
  className,
  placeholder,
  value,
  onChange,
}) => {
  return type === "textarea" ? (
    <textarea
      rows="5"
      style={{ resize: "none" }}
      name={name}
      className={className}
      aria-label={placeholder}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  ) : (
    <input
      name={name}
      type={type}
      className={className}
      aria-label={placeholder}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
