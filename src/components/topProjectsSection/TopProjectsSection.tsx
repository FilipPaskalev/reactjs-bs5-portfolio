import { Button, Carousel } from 'react-bootstrap'
import TProject from '../../types/TProject'
import './top-projects-section.scss'

type TopProjectsSectionProps = {
  projects: TProject[]
}

const TopProjectsSection = ({ projects }: TopProjectsSectionProps) => {
  return (
    <Carousel className='top-projects-section'>
      {projects.map((project, index) => (
        <Carousel.Item key={index}>
          <img
            className='d-block w-100'
            src={project.image}
            alt={project.title}
          />
          <Carousel.Caption>
            <h3 className='bg-body-tertiary display-5 mb-5 px-3 d-inline-block'>
              {project.title}
            </h3>
            <p>{project.description.join(' ')}</p>
            <p>Year: {project.year}</p>
            <Button
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-decoration-none'
              variant='primary'
            >
              GitHub
            </Button>
            <Button
              href={project.demo}
              target='_blank'
              rel='noopener noreferrer'
              className='text-decoration-none'
              variant='secondary'
            >
              Demo
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default TopProjectsSection
