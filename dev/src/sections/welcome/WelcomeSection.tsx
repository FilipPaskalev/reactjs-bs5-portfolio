// Styles
import "./welcome-section.css";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";

const WelcomeSection = () => {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Clarence
          <span className="text-primary">Taylor</span>
        </h1>
        <div className="subheading mb-5">
          3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
          <a href="mailto:name@email.com">name@email.com</a>
        </div>
        <p className="lead mb-5">
          I am experienced in leveraging agile frameworks to provide a robust
          synopsis for high level overviews. Iterative approaches to corporate
          strategy foster collaborative thinking to further the overall value
          proposition.
        </p>
        <div className="social-icons">
          <a className="social-icon" href="#!">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a className="social-icon" href="#!">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="social-icon" href="#!">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a className="social-icon" href="#!">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
