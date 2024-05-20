import { Card, Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";
import "./project-card.scss";
import TProject from "../../types/TProject";

type ProjectCardProps = {
  project: TProject;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="mb-4 project-card" id={project.projectId}>
      <div className="image-container">
        <Card.Img
          variant="top"
          src={project.image}
          alt={project.title}
          className="card-img img-fluid"
        />
      </div>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="outline-primary" href={project.link} target="_blank">
            <FaGithub /> GitHub
          </Button>
          <Button variant="outline-primary" href={project.demo} target="_blank">
            <MdOutlinePreview /> Demo
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
