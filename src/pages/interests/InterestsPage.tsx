import PageHeaderComponent from "../../components/pageHeader/PageHeader";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import INTERESTS_PARAGRAPHS from "../../data/interests.json";

const InterestsPage = () => {
  return (
    <PageWrapper id="interests">
      <PageHeaderComponent label="Interests" />
      {INTERESTS_PARAGRAPHS.map((paragraph, index) => (
        <p key={index} className="lead mb-5">
          {paragraph}
        </p>
      ))}
    </PageWrapper>
  );
};

export default InterestsPage;
