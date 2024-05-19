import EXPERIENCE_DATA from "../../data/experience.json";
import ExperienceCard from "../../components/experienceCard/experienceCard";
import PageHeader from "../../components/pageHeader/PageHeader";
import PageWrapper from "../../components/pageWrapper/PageWrapper";

const ExperiencePage = () => {
  return (
    <PageWrapper id="experience">
      <PageHeader label="Experience" />
      {EXPERIENCE_DATA.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </PageWrapper>
  );
};

export default ExperiencePage;
