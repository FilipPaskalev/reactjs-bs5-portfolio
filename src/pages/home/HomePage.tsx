// Custom components
import AboutMeSection from "../../sections/aboutMe/AboutMeSection";
import ExperienceSection from "../../sections/experience/ExperienceSection";
import EducationSection from "../../sections/education/EducationSection";
import SkillsSection from "../../sections/skills/SkillsSection";
import AwardsSection from "../../sections/awards/AwardsSection";
import InterestsSection from "../../sections/interests/InterestsSection";

// React Bootstrap components
import Container from "react-bootstrap/Container";

const HomePage = () => {
  return (
    <Container className="p-0" fluid>
      <AboutMeSection />
      <hr className="m-0" />
      <ExperienceSection />
      <hr className="m-0" />
      <EducationSection />
      <hr className="m-0" />
      <SkillsSection />
      <hr className="m-0" />
      <InterestsSection />
      <hr className="m-0" />
      <AwardsSection />
    </Container>
  );
};

export default HomePage;
