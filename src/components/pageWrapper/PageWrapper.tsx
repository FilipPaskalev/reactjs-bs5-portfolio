import { ReactNode } from "react";

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
      <span className={contentClassName}>{children}</span>
    </section>
  );
};

export default PageWrapper;
