// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons/faCss3Alt";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons/faSquareJs";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons/faNodeJs";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons/faMarkdown";
import { faSass } from "@fortawesome/free-brands-svg-icons/faSass";
import { faLess } from "@fortawesome/free-brands-svg-icons/faLess";
import { faSquareGit } from "@fortawesome/free-brands-svg-icons/faSquareGit";
import { faYarn } from "@fortawesome/free-brands-svg-icons/faYarn";
import { faJava } from "@fortawesome/free-brands-svg-icons/faJava";
import { faNpm } from "@fortawesome/free-brands-svg-icons/faNpm";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons/faBootstrap";
import { FaCheck } from "react-icons/fa";

// TODO: Add more icons for the skills section
// TODO: wrap icons in a container with a tooltip and a title, also add <a> tag to the container and relevant href links
// TODO: Add animations to the icons on hover
// TODO: add icons in row and cols for responsive design, instead of a  ul list
// TODO: Add icons for the workflow section skills and links to relevant projects from the portfolio

import WORKFLOW from "../../data/workflow.json";

const MySkillsPage = () => {
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages & Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faCss3Alt} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faSquareJs} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faNodeJs} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faReact} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faMarkdown} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faSass} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faLess} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faSquareGit} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faYarn} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faJava} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faNpm} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faBootstrap} />
          </li>
        </ul>
        <div className="subheading mb-3">Workflow</div>
        <section className="fa-ul mb-0">
          {WORKFLOW.map((item, index) => (
            <article key={index}>
              <FaCheck className="text-primary" />
              {` ${item}`}
            </article>
          ))}
        </section>
      </div>
    </section>
  );
};

export default MySkillsPage;
