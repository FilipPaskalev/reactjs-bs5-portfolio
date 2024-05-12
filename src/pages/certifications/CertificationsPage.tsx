import { FaAward } from "react-icons/fa6";

import CERT_DATA from "../../data/certifications.json";

const CertificationsPage = () => {
  return (
    <section className="resume-section" id="awards">
      <div className="resume-section-content">
        <h2 className="mb-5">Certifications</h2>
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
                rel="noreferrer"
              >
                {certification.name}
              </a>
              <p className="pt-1">{certification.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CertificationsPage;
