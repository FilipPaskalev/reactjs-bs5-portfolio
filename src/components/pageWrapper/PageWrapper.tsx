import { ReactNode } from "react";
import Container from "react-bootstrap/Container";

type PageWrapperProps = {
  children: ReactNode;
  id?: string;
  sectionClassName?: string;
  contentClassName?: string;
};

const PageWrapper = ({
  children,
  id,
  sectionClassName = "resume-section",
  contentClassName = "resume-section-content"
}: PageWrapperProps) => {
  return (
    <section className={sectionClassName} {...(id && { id })}>
      <Container className={contentClassName}>{children}</Container>
    </section>
  );
};

export default PageWrapper;
