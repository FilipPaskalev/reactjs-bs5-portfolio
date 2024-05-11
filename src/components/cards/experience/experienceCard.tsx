type Props = {
  position: string;
  company: {
    name: string;
    website: string;
  };
  description: string[];
  startDate: string;
  endDate: string;
};

const ExperienceCard = ({
  position,
  company,
  description,
  startDate,
  endDate,
}: Props) => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className="mb-0">{position}</h3>
        <div className="subheading mb-3">{company.name}</div>
        {description.map((desc, index) => (
          <p key={index} className="my-0 py-0">
            {desc}
          </p>
        ))}
      </div>
      <div className="flex-shrink-0 pt-3">
        <span className="text-primary">
          {startDate} - {endDate}
        </span>
      </div>
    </div>
  );
};

export default ExperienceCard;
