import EducationCard from "../../components/educationCard/EducationCard";
import PageHeader from "../../components/pageHeader/PageHeader";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import EDUCATION_DATA from "../../data/education.json";

// TODO: finish implementing EducationSection with taking the data from EDUCATION_DATA

const EducationPage = () => {
  return (
    <PageWrapper id="education">
      <PageHeader label="Education" />
      {EDUCATION_DATA.map((education, index) => (
        <EducationCard key={index} {...education} />
      ))}
    </PageWrapper>
  );
};

export default EducationPage;
