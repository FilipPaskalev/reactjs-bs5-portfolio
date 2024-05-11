import EXPERIENCE_DATA from "../../../public/data/experience.json";
import ExperienceCard from "../../components/cards/experience/experienceCard";

const ExperienceSection = () => {
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        {EXPERIENCE_DATA.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
