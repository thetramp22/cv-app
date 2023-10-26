import PropTypes from "prop-types";

const Resume = ({ data }) => {
  return (
    <>
      <p>{data.fullName}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <p>{data.city}</p>
      <p>{data.state}</p>
      <p>{data.country}</p>
      <p>{data.zip}</p>
    </>
  );
};

Resume.propTypes = {
  data: PropTypes.object,
};

export default Resume;
