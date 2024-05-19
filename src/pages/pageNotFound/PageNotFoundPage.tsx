import { Container, Row, Col, Image } from "react-bootstrap";
import PAGE_NOT_FOUND_GIF from "../../assets/gif/page-not-found.gif";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import PageHeader from "../../components/pageHeader/PageHeader";

const PageNotFoundPage = () => {
  return (
    <PageWrapper id="page-not-found">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Container className="text-center my-3">
            <PageHeader label="Page Not Found" />
            <Container className="text-center">
              <Image src={PAGE_NOT_FOUND_GIF} alt="404 GIF" fluid />
            </Container>
            <p className="mt-3 text-center fs-4">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
          </Container>
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default PageNotFoundPage;
