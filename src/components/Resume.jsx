import PropTypes from "prop-types";

const Resume = ({ data }) => {
  return (
    <>
      <p>{data.fullName}</p>
      <p>{data.email}</p>
      <p>{data.location}</p>
    </>
  );
};

Resume.propTypes = {
  data: PropTypes.object,
};

export default Resume;
