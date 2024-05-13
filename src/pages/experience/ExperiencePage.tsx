import EXPERIENCE_DATA from '../../data/experience.json'
import ExperienceCard from '../../components/experienceCard/experienceCard'

const ExperiencePage = () => {
  return (
    <section className='resume-section' id='experience'>
      <section className='resume-section-content'>
        <h2 className='mb-5'>Experience</h2>
        {EXPERIENCE_DATA.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </section>
    </section>
  )
}

export default ExperiencePage
