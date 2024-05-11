// Utils & data
import EducationCard from "../../components/cards/education/EducationCard";
import EDUCATION_DATA from "../../../public/data/education.json";

// TODO: finish implementing EducationSection with taking the data from EDUCATION_DATA

const EducationSection = () => {
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

export default EducationSection;