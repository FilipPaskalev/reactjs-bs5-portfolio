import { FaTrophy } from "react-icons/fa6";

import AWARDS from "../../data/awards.json";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import PageHeaderComponent from "../../components/pageHeader/PageHeader";

const AwardsPage = () => {
  return (
    <PageWrapper id="awards">
      <PageHeaderComponent label="Awards" />
      <ul className="fa-ul mb-5 list-unstyled">
        {AWARDS.map((award, index) => (
          <li key={index}>
            <b className="text-primary">
              <FaTrophy className="text-warning mb-1" />{" "}
              {award.ranking.position.toString()}
              {award.ranking.suffix} Place
            </b>{" "}
            - {award.event.name} <i>{award.event.date}</i>
            <div>{award.event.location}</div>
            <p className="pt-2">{award.description}</p>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
};

export default AwardsPage;
