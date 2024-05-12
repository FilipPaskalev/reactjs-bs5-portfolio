import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa6";
import { CiLink } from "react-icons/ci";
import { GiDiploma } from "react-icons/gi";
import { MdWhereToVote } from "react-icons/md";
import { FiTarget } from "react-icons/fi";

type Props = {
  institution: {
    name: string;
    website: string;
    location: {
      city: string;
      country: string;
    };
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
          <a
            href={institution.website}
            target="_blank"
            className="text-decoration-none text-dark"
          >
            {institution.name}
            <CiLink className="text-primary" />
          </a>
          <p className="fs-5">
            {institution.location.city}, {institution.location.country}
          </p>
        </h3>
        <h4 className="mb-0 text-primary">{degree}</h4>
        <h5 className="mb-3 fs-5">{fieldOfStudy}</h5>
        {description.map((desc, index) => (
          <p key={index} className="my-0">
            {desc}
          </p>
        ))}
        <p className="my-3">
          <FaTrophy className="text-warning mb-1" /> {grade}
        </p>
      </hgroup>
      <footer className="text-primary flex-shrink-0">
        <p>
          <IoCalendarNumberOutline className="mb-1" /> {startDate} - {endDate}
        </p>
      </footer>
    </section>
  );
};

export default EducationCard;
