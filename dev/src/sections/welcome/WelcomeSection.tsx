// Styles
import "./welcome-section.css";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";

import DATA from "../../data/user.json";

// TODO: Add type definitions for DATA
// TODO: Add animations to the social icons on hover

const WelcomeSection = () => {
  const mailTo = `mailto:%{DATA.email}`;
  const formattedPhoneNumber = DATA.phoneNumber.replace(
    /(\d{2})(\d{4})(\d{3})(\d{3})/,
    "($1) $2 $3 $4"
  );
  const formatterAddress = `${DATA.address.street} · ${DATA.address.city}, ${DATA.address.country} · ${DATA.address.postCode}`;

  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          {DATA.firstName}
          <span className="text-primary">{DATA.lastName}</span>
        </h1>
        <div className="subheading mb-5">
          {formatterAddress}
          {" · "}
          {formattedPhoneNumber}
          {" · "}
          <a href={mailTo}>{DATA.email}</a>
        </div>
        <p className="lead mb-5">
          I am experienced in leveraging agile frameworks to provide a robust
          synopsis for high level overviews. Iterative approaches to corporate
          strategy foster collaborative thinking to further the overall value
          proposition.
        </p>
        <div className="social-icons">
          <a
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={DATA.social.linkedin.title}
            className="social-icon"
            href={DATA.social.linkedin.href}
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={DATA.social.github.title}
            className="social-icon"
            href={DATA.social.github.href}
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={DATA.social.twitter.title}
            className="social-icon"
            href={DATA.social.twitter.href}
            target="_blank"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={DATA.social.facebook.title}
            className="social-icon"
            href={DATA.social.facebook.href}
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
