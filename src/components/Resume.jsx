import PropTypes from "prop-types";

const Resume = ({ data }) => {
  return (
    <>
      <div>
        <p>{data.generalData.fullName}</p>
        <p>{data.generalData.email}</p>
        <p>{data.generalData.phone}</p>
        <p>{data.generalData.city}</p>
        <p>{data.generalData.state}</p>
        <p>{data.generalData.country}</p>
        <p>{data.generalData.zip}</p>
      </div>
      <div>
        <p>{data.experienceData.employer}</p>
        <p>{data.experienceData.role}</p>
        <p>{data.experienceData.startDate}</p>
        <p>{data.experienceData.endDate}</p>
        <p>{data.experienceData.city}</p>
        <p>{data.experienceData.state}</p>
        <p>{data.experienceData.country}</p>
        <p>{data.experienceData.responsibilities}</p>
      </div>
      <div>
        <p>{data.educationData.school}</p>
        <p>{data.educationData.major}</p>
        <p>{data.educationData.graduationDate}</p>
        <p>{data.educationData.city}</p>
        <p>{data.educationData.state}</p>
        <p>{data.educationData.country}</p>
        <p>{data.educationData.achievements}</p>
      </div>
    </>
  );
};

Resume.propTypes = {
  data: PropTypes.object,
};

export default Resume;
