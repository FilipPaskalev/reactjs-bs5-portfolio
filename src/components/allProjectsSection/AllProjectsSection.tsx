import { Row, Col } from 'react-bootstrap'
import ProjectCard from '../projectCard/ProjectCard'
import TProject from '../../types/TProject'
import './all-projects-section.scss'

type AllProjectsSectionProps = {
  projects: TProject[]
}

const AllProjectsSection = ({ projects }: AllProjectsSectionProps) => {
  return (
    <Row className='all-projects-section'>
      {projects.map((project, index) => (
        <Col key={index} xs={12} md={6} xl={4} className='mb-4'>
          <div className='project-card'>
            <ProjectCard project={project} />
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default AllProjectsSection
