import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

type Props = {
  institution: {
    name: string;
    website: string;
  };
  degree: string;
  fieldOfStudy: string;
  description: string[];
  grade: string;
  startDate: string;
  endDate: string;
};

const EducationCard = ({
  institution,
  degree,
  fieldOfStudy,
  description,
  grade,
  startDate,
  endDate,
}: Props) => {
  return (
    <section className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <hgroup className="flex-grow-1">
        <h3 className="mb-0">
          {institution.name}
          <a href={institution.website} target="_blank">
            <CiLink />
          </a>
        </h3>
        <h4 className="mb-1 text-primary">{degree}</h4>
        <h5 className="subheading mb-3">{fieldOfStudy}</h5>
        {description.map((desc, index) => (
          <p key={index} className="my-0">
            {desc}
          </p>
        ))}
        <p className="my-3">
          <FaTrophy className="text-primary mb-1" /> {grade}
        </p>
      </hgroup>
      <footer className="flex-shrink-0">
        <p>
          <IoCalendarNumberOutline className="text-primary mb-1" /> {startDate}{" "}
          - {endDate}
        </p>
      </footer>
    </section>
  );
};

export default EducationCard;
