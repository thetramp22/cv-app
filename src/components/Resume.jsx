import PropTypes from "prop-types";

const Resume = ({ data }) => {
  return (
    <>
      <p>{data.fullName}</p>
    </>
  );
};

Resume.propTypes = {
  data: PropTypes.object,
};

export default Resume;
