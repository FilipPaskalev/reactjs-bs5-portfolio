import PageHeader from "../../components/pageHeader/PageHeader";
import PageSubHeader from "../../components/pageSubHeader/PageSubHeader";
import PageWrapper from "../../components/pageWrapper/PageWrapper";

const ProjectsPage = () => {
  return (
    <PageWrapper id="projects">
      <PageHeader label="My projects" />
      <PageSubHeader label="Selected" />
      <PageSubHeader label="All" />
    </PageWrapper>
  );
};

export default ProjectsPage;
