import EXPERIENCE_DATA from "../../data/experience.json";
import ExperienceCard from "../../components/experienceCard/experienceCard";
import PageHeaderComponent from "../../components/pageHeader/PageHeader";
import PageWrapper from "../../components/pageWrapper/PageWrapper";

const ExperiencePage = () => {
  return (
    // <section className="resume-section" id="experience">
    //   <section className="resume-section-content">
    <PageWrapper id="experience">
      <PageHeaderComponent label="Experience" />
      {EXPERIENCE_DATA.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
      {/* </section> */}
      {/* </section> */}
    </PageWrapper>
  );
};

export default ExperiencePage;
