import PageHeaderComponent from "../../components/pageHeader/PageHeader";
import PageSubHeaderComponent from "../../components/pageSubHeader/PageSubHeader";
import PageWrapper from "../../components/pageWrapper/PageWrapper";

const ProjectsPage = () => {
  return (
    <PageWrapper id="projects">
      <PageHeaderComponent label="My projects" />
      <PageSubHeaderComponent label="Selected" />
      <PageSubHeaderComponent label="All" />
    </PageWrapper>
  );
};

export default ProjectsPage;
