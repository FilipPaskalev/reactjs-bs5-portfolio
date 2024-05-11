// @flow
import * as React from "react";
type Props = {};
const experienceCard = (props: Props) => {
  return (
    <section className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <hgroup className="flex-grow-1">
        <h3 className="mb-0">Senior Web Developer</h3>
        <h4 className="subheading mb-3">Intelitec Solutions</h4>
        <p>
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new normal that
          has evolved from generation X is on the runway heading towards a
          streamlined cloud solution. User generated content in real-time will
          have multiple touchpoints for offshoring.
        </p>
      </hgroup>
      <footer className="flex-shrink-0">
        <span className="text-primary">March 2013 - Present</span>
      </footer>
    </section>
  );
};

export default experienceCard;
