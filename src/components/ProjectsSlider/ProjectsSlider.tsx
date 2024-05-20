import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import TProject from "../../types/TProject";
import "./project-slider.scss";
import { FaGithub } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";
import { VscVersions } from "react-icons/vsc";
import EPagesPaths from "../../enum/EPagesPaths";
import ScrollToAnchor from "../../utils/scrollToAnchor/ScrollToAnchor";

type CarouselProjectsProps = {
  projects: TProject[];
};

const ProjectsSlider = (props: CarouselProjectsProps) => {
  const millisecondsPerSlide: number = 5000;

  return (
    <>
      <ScrollToAnchor />
      <Carousel className="mb-5">
        {props.projects.map((project: TProject, index: number) => (
          <Carousel.Item key={index} interval={millisecondsPerSlide}>
            <div className="position-relative rounded p-1">
              <Link to={`${EPagesPaths.PROJECTS}#${project.projectId}`}>
                <Image
                  src={project.image}
                  className="img-fluid img-height"
                  alt={project.title}
                  fluid
                />
                <div className="version-badge">
                  <VscVersions size={24} className="mb-1" /> {project.version}
                </div>
              </Link>
            </div>
            <Carousel.Caption>
              <h4 className="fs-3">{project.title}</h4>
              <div className="icon-container">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link">
                  <FaGithub size={32} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link">
                  <MdOutlinePreview size={32} />
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ProjectsSlider;
