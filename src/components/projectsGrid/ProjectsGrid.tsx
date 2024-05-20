import { Container, Row, Col } from "react-bootstrap";
import TProject from "../../types/TProject";
import ProjectCard from "../projectCard/ProjectCard"; // Adjust the import path as needed

type ProjectsGridProps = {
  projects: TProject[];
};

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <Container>
      <Row>
        {projects.map((project, index) => (
          <Col
            key={index}
            xs={12} // 1 card per row on xs
            // sm={12} // 1 card per row on sm
            md={6} // 2 cards per row on md
            // lg={6} // 2 cards per row on lg
            xl={4} // 3 cards per row on xl
            // xxl={4} // 3 cards per row on xxl
          >
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsGrid;
