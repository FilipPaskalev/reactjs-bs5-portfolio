// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSass } from '@fortawesome/free-brands-svg-icons/faSass'
import { faLess } from '@fortawesome/free-brands-svg-icons/faLess'
import { faSquareGit } from '@fortawesome/free-brands-svg-icons/faSquareGit'
import { faYarn } from '@fortawesome/free-brands-svg-icons/faYarn'
import { faJava } from '@fortawesome/free-brands-svg-icons/faJava'
import { faNpm } from '@fortawesome/free-brands-svg-icons/faNpm'
import { FaCheck } from 'react-icons/fa'

import { FaHtml5, FaNodeJs, FaReact, FaMarkdown } from 'react-icons/fa6'
import {
  SiReactrouter,
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiAdobexd,
  SiAsana,
  SiBootstrap,
  SiEclipseide
} from 'react-icons/si'

// TODO: Add more icons for the skills section
// TODO: wrap icons in a container with a tooltip and a title, also add <a> tag to the container and relevant href links
// TODO: Add animations to the icons on hover
// TODO: add icons in row and cols for responsive design, instead of a  ul list
// TODO: Add icons for the workflow section skills and links to relevant projects from the portfolio

import WORKFLOW from '../../data/workflow.json'

const MySkillsPage = () => {
  const languages = [
    <FaHtml5 />,
    <SiCss3 />,
    <SiJavascript />,
    <SiTypescript />,
    <FontAwesomeIcon icon={faJava} />
  ]
  const tools = [
    <FaReact />,
    <FaNodeJs />,
    <FontAwesomeIcon icon={faSquareGit} />,
    <FontAwesomeIcon icon={faYarn} />,
    <FontAwesomeIcon icon={faNpm} />,
    <FontAwesomeIcon icon={faSass} />,
    <FaMarkdown />,
    <SiReactrouter />,
    <FontAwesomeIcon icon={faLess} />,
    <SiBootstrap />,
    <SiAdobexd />,
    <SiAsana />,
    <SiEclipseide />
  ]

  const renderWorkflow = () => {
    return WORKFLOW.map((item, index) => (
      <article key={index}>
        <FaCheck className='text-primary' />
        {` ${item}`}
      </article>
    ))
  }

  const renderMyStack = () => {
    return languages.map((icon, index) => (
      <li key={index} className='list-inline-item'>
        {icon}
      </li>
    ))
  }

  const renderTools = () => {
    return tools.map((icon, index) => (
      <li key={index} className='list-inline-item'>
        {icon}
      </li>
    ))
  }

  return (
    <section className='resume-section' id='skills'>
      <div className='resume-section-content'>
        <h2 className='mb-5'>Skills</h2>

        <h3 className='subheading mb-3'>Programming Languages</h3>
        <ul className='list-inline dev-icons'>{renderMyStack()}</ul>

        <h3 className='subheading mb-3'>Tools & Frameworks</h3>
        <ul className='list-inline dev-icons'>{renderTools()}</ul>

        <h3 className='subheading mb-3'>Workflow</h3>
        <section className='fa-ul mb-0'>{renderWorkflow()}</section>
      </div>
    </section>
  )
}

export default MySkillsPage
