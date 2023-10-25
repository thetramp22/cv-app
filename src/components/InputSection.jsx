import "../styles/InputSection.css";
import PropTypes from "prop-types";
import InputField from "./InputField";
import { useState } from "react";
import Icon from "@mdi/react";
import {
  mdiArrowUpDropCircleOutline,
  mdiArrowDownDropCircleOutline,
} from "@mdi/js";

const InputSection = ({ sectionName, inputFields, data, onChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const fields = inputFields.map((field) => (
    <InputField
      key={field.name}
      name={field.name}
      type={field.type}
      className={field.className}
      placeholder={field.placeholder}
      value={data[field.name]}
      onChange={onChange}
    />
  ));

  return (
    <div className="input-section">
      <div className="section-heading">
        <h2>{sectionName}</h2>
        <button className="btn" onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? (
            <Icon path={mdiArrowDownDropCircleOutline} size={1.3} />
          ) : (
            <Icon path={mdiArrowUpDropCircleOutline} size={1.3} />
          )}
        </button>
      </div>
      {!isCollapsed && fields}
    </div>
  );
};

InputSection.propTypes = {
  sectionName: PropTypes.string,
  inputFields: PropTypes.array,
  data: PropTypes.object,
  onChange: PropTypes.func,
};

export default InputSection;
