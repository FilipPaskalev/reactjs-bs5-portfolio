import TopProjectsSection from '../../components/topProjectsSection/TopProjectsSection'
import AllProjectsSection from '../../components/allProjectsSection/AllProjectsSection'
import PROJECTS_DATA from '../../data/projects.json'

const ProjectsPage = () => {
  return (
    <section className='resume-section' id='project-page'>
      <div className='resume-section-content'>
        <h2 className='mb-5'>Top projects</h2>
        <TopProjectsSection projects={PROJECTS_DATA.slice(0, 3)} />
        <h2 className='my-5'>All projects</h2>
        <AllProjectsSection projects={PROJECTS_DATA} />
      </div>
    </section>
  )
}

export default ProjectsPage
