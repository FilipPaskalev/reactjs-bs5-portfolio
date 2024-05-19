import PageHeaderComponent from "../../components/pageHeaderComponent/PageHeaderComponent";
import PageSubHeaderComponent from "../../components/pageSubHeaderSomponent/PageSubHeaderComponent";
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
