import { Card, Button } from 'react-bootstrap'
import TProject from '../../types/TProject'

type ProjectCardProps = {
  project: TProject
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className='h-100 border-0 shadow-sm'>
      <Card.Img variant='top' src={project.image} />
      <Card.Body className='d-flex flex-column'>
        <div>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>
            {project.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </Card.Text>
        </div>
        <div>
          <p>Year: {project.year}</p>
          <Button
            variant='primary'
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </Button>
          <Button
            variant='secondary'
            href={project.demo}
            target='_blank'
            rel='noopener noreferrer'
            className='ms-2'
          >
            Demo
          </Button>
          <div className='mt-2'>
            {project.technologies.map((tech, index) => (
              <span key={index} className='badge bg-secondary me-1'>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard
