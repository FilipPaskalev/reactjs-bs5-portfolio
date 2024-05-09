// Styles
import "./welcome-section.css";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import { faSlack } from "@fortawesome/free-brands-svg-icons/faSlack";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";

import DATA from "../../data/user.json";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons/faFacebookMessenger";
import { faViber } from "@fortawesome/free-brands-svg-icons/faViber";

// TODO?: icons for phone number could be add to navigation menu
// TODO: Add type definitions for DATA
// TODO: Add animations to the social icons on hover
// TODO: Finish Discord icon + add info in user.json for Discord
// TODO: Finish Slack icon + add info in user.json for Slack
// TODO: Finish Whatsapp icon + add info in user.json for Whatsapp + add icon to phone number
// TODO: Finish Telegram icon + add info in user.json for Telegram + add icon to phone number
// TODO: Finish Facebook Messenger icon + add info in user.json for Facebook Messenger + add icon to phone number
// TODO: Finish Viber icon + add info in user.json for Viber + add icon to phone number

const WelcomeSection = () => {
  const mailTo = `mailto:${DATA.email}`;
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
          <a
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={"TODO"}
            className="social-icon"
            href={"TODO"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={"TODO faSlack"}
            className="social-icon"
            href={"TODO faSlack"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faSlack} />
          </a>
          <a
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={"TODO faWhatsapp"}
            className="social-icon"
            href={"TODO faWhatsapp"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={"TODO faTelegram"}
            className="social-icon"
            href={"TODO faTelegram"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={"TODO faFacebookMessenger"}
            className="social-icon"
            href={"TODO faFacebookMessenger"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookMessenger} />
          </a>
          <a
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={"TODO faViber"}
            className="social-icon"
            href={"TODO faViber"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faViber} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
