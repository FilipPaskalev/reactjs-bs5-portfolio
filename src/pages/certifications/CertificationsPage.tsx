import { FaAward } from "react-icons/fa6";

import CERT_DATA from "../../data/certifications.json";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import PageHeader from "../../components/pageHeader/PageHeader";

const CertificationsPage = () => {
  return (
    <PageWrapper id="certifications">
      <PageHeader label="Certifications" />
      <ul className="fa-ul list-unstyled">
        {CERT_DATA.map((certification, index) => (
          <li key={index} className="pb-2">
            <span className="fa-li">
              <FaAward className="text-warning" />{" "}
            </span>
            <a
              href={certification.url}
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer">
              {certification.name}
            </a>
            <p className="pt-1">{certification.description}</p>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
};

export default CertificationsPage;
