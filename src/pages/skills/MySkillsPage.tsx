// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons/faMarkdown'
import { faSass } from '@fortawesome/free-brands-svg-icons/faSass'
import { faLess } from '@fortawesome/free-brands-svg-icons/faLess'
import { faSquareGit } from '@fortawesome/free-brands-svg-icons/faSquareGit'
import { faYarn } from '@fortawesome/free-brands-svg-icons/faYarn'
import { faJava } from '@fortawesome/free-brands-svg-icons/faJava'
import { faNpm } from '@fortawesome/free-brands-svg-icons/faNpm'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons/faBootstrap'
import { FaCheck } from 'react-icons/fa'

import {
  FaHtml5,
  FaCss3Alt,
  FaSquareJs,
  FaNodeJs,
  FaReact,
  FaMarkdown
} from 'react-icons/fa6'
import { SiReactrouter } from 'react-icons/si'

// TODO: Add more icons for the skills section
// TODO: wrap icons in a container with a tooltip and a title, also add <a> tag to the container and relevant href links
// TODO: Add animations to the icons on hover
// TODO: add icons in row and cols for responsive design, instead of a  ul list
// TODO: Add icons for the workflow section skills and links to relevant projects from the portfolio

import WORKFLOW from '../../data/workflow.json'

const MySkillsPage = () => {
  return (
    <section className='resume-section' id='skills'>
      <div className='resume-section-content'>
        <h2 className='mb-5'>Skills</h2>
        <div className='subheading mb-3'>Programming Languages & Tools</div>
        <ul className='list-inline dev-icons'>
          {/* TODO: Add react-icons logo */}
          <li className='list-inline-item'>
            <FaHtml5 />
          </li>
          <li className='list-inline-item'>
            <FaCss3Alt />
          </li>
          <li className='list-inline-item'>
            <FaSquareJs />
          </li>
          <li className='list-inline-item'>
            <FaNodeJs />
          </li>
          <li className='list-inline-item'>
            <FaReact />
          </li>
          <li className='list-inline-item'>
            <FaMarkdown />
          </li>
          <li className='list-inline-item'>
            <FontAwesomeIcon icon={faSass} />
          </li>
          <li className='list-inline-item'>
            <FontAwesomeIcon icon={faLess} />
          </li>
          <li className='list-inline-item'>
            <FontAwesomeIcon icon={faSquareGit} />
          </li>
          <li className='list-inline-item'>
            <FontAwesomeIcon icon={faYarn} />
          </li>
          <li className='list-inline-item'>
            <FontAwesomeIcon icon={faJava} />
          </li>
          <li className='list-inline-item'>
            <FontAwesomeIcon icon={faNpm} />
          </li>
          <li className='list-inline-item'>
            <FontAwesomeIcon icon={faBootstrap} />
          </li>
          <li className='list-inline-item'>
            <SiReactrouter />
          </li>
        </ul>
        <div className='subheading mb-3'>Workflow</div>
        <section className='fa-ul mb-0'>
          {WORKFLOW.map((item, index) => (
            <article key={index}>
              <FaCheck className='text-primary' />
              {` ${item}`}
            </article>
          ))}
        </section>
      </div>
    </section>
  )
}

export default MySkillsPage
