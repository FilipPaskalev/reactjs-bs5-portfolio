import EducationCard from "../../components/educationCard/EducationCard";
import EDUCATION_DATA from "../../data/education.json";

// TODO: finish implementing EducationSection with taking the data from EDUCATION_DATA

const EducationPage = () => {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        {EDUCATION_DATA.map((education, index) => (
          <EducationCard key={index} {...education} />
        ))}
      </div>
    </section>
  );
};

export default EducationPage;
