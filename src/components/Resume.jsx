import PropTypes from "prop-types";

const Resume = ({ generalInfoData }) => {
  return (
    <>
      <p>{generalInfoData.fullName}</p>
    </>
  );
};

Resume.propTypes = {
  generalInfoData: PropTypes.object,
};

export default Resume;
