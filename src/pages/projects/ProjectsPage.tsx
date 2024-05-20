import { useState } from "react";
import ProjectsSlider from "../../components/ProjectsSlider/ProjectsSlider";
import PageHeader from "../../components/pageHeader/PageHeader";
import PageSubHeader from "../../components/pageSubHeader/PageSubHeader";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import "./projects-page.scss";
import PROJECTS_DATA from "../../data/projects.json";
import TProject from "../../types/TProject";
import ProjectsGrid from "../../components/projectsGrid/ProjectsGrid";
import { Form, Row, Col, Button } from "react-bootstrap";

const ProjectsPage = () => {
  const pageHeader: string = "My projects";
  const topProjects: TProject[] = PROJECTS_DATA.filter(
    (project: TProject) => project.topProject
  );
  const [filteredProjects, setFilteredProjects] =
    useState<TProject[]>(PROJECTS_DATA);
  const [technologyFilter, setTechnologyFilter] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [fieldFilter, setFieldFilter] = useState<string>("");

  const handleFilterChange = (filterType: string, value: string) => {
    switch (filterType) {
      case "technologies":
        setTechnologyFilter(value);
        break;
      case "category":
        setCategoryFilter(value);
        break;
      case "field":
        setFieldFilter(value);
        break;
      default:
        break;
    }

    let filteredProjectsResult = [...PROJECTS_DATA];

    if (technologyFilter !== "") {
      filteredProjectsResult = filteredProjectsResult.filter(project =>
        project.technologies.includes(technologyFilter)
      );
    }
    if (categoryFilter !== "") {
      filteredProjectsResult = filteredProjectsResult.filter(project =>
        project.category.includes(categoryFilter)
      );
    }
    if (fieldFilter !== "") {
      filteredProjectsResult = filteredProjectsResult.filter(project =>
        project.field.includes(fieldFilter)
      );
    }

    setFilteredProjects(filteredProjectsResult);
  };

  const handleResetFilters = () => {
    setFilteredProjects(PROJECTS_DATA);
    setTechnologyFilter("");
    setCategoryFilter("");
    setFieldFilter("");
  };

  return (
    <PageWrapper id="projects">
      <PageHeader label={pageHeader} />

      <PageSubHeader label="Selected projects" className="mb-2" />
      <ProjectsSlider projects={topProjects} />

      <PageSubHeader label="All projects" className="mb-3" />
      <Row className="mb-3">
        <Col xs={12} sm={6} md={4}>
          <Form.Select
            value={technologyFilter}
            onChange={e => handleFilterChange("technologies", e.target.value)}>
            <option value="">Filter by technology</option>
            {/* Populate options dynamically based on available technologies */}
            {Array.from(
              new Set(PROJECTS_DATA.flatMap(project => project.technologies))
            ).map((technology, index) => (
              <option key={index} value={technology}>
                {technology}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Form.Select
            value={categoryFilter}
            onChange={e => handleFilterChange("category", e.target.value)}>
            <option value="">Filter by category</option>
            {/* Populate options dynamically based on available categories */}
            {Array.from(
              new Set(PROJECTS_DATA.flatMap(project => project.category))
            ).map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Form.Select
            value={fieldFilter}
            onChange={e => handleFilterChange("field", e.target.value)}>
            <option value="">Filter by field</option>
            {/* Populate options dynamically based on available fields */}
            {Array.from(
              new Set(PROJECTS_DATA.flatMap(project => project.field))
            ).map((field, index) => (
              <option key={index} value={field}>
                {field}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Button variant="secondary" onClick={handleResetFilters}>
            Reset Filters
          </Button>
        </Col>
      </Row>

      <ProjectsGrid projects={filteredProjects} />
    </PageWrapper>
  );
};

export default ProjectsPage;
