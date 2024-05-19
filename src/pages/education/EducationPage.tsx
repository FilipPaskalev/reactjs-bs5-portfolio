import EducationCard from "../../components/educationCard/EducationCard";
import PageHeaderComponent from "../../components/pageHeader/PageHeader";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import EDUCATION_DATA from "../../data/education.json";

// TODO: finish implementing EducationSection with taking the data from EDUCATION_DATA

const EducationPage = () => {
  return (
    // <section className="resume-section" id="education">
    // <div className="resume-section-content">
    <PageWrapper id="education">
      <PageHeaderComponent label="Education" />
      {EDUCATION_DATA.map((education, index) => (
        <EducationCard key={index} {...education} />
      ))}
      {/* // </div> */}
      {/* // </section> */}
    </PageWrapper>
  );
};

export default EducationPage;
