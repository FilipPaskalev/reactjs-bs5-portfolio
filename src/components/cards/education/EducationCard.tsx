type Props = {
  institution: string;
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
        <h3 className="mb-0">{institution}</h3>
        <h4 className="subheading mb-3">{degree}</h4>
        <h5 className="subheading">{fieldOfStudy}</h5>
        {description.map((desc, index) => (
          <p key={index} className="my-0">
            {desc}
          </p>
        ))}
        <p className="my-3">{grade}</p>
      </hgroup>
      <footer className="flex-shrink-0">
        <span className="text-primary">
          {startDate} - {endDate}
        </span>
      </footer>
    </section>
  );
};

export default EducationCard;
