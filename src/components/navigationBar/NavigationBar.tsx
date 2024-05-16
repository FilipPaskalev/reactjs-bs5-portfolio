import USER_DATA from '../../data/user.json'
import AVATAR from '../../assets/png/avatar-hi.png'
import { Container, Navbar } from 'react-bootstrap'
import { FaTelegram, FaWhatsapp, FaViber } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import EPagesPaths from '../../enum/EPagesPaths'

const NavigationBar = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Navbar expand='lg' variant='dark' bg='primary' fixed='top' id='sideNav'>
      <Navbar.Brand href={EPagesPaths.HOME}>
        <b className='d-block d-lg-none'>
          {USER_DATA.firstName} {USER_DATA.lastName}
        </b>
        <Container className='d-none d-lg-block'>
          <img
            className='img-fluid img-profile rounded-circle mx-auto mb-2'
            src={AVATAR}
            alt='profile avatar'
          />
        </Container>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='navbarResponsive' />
      <Navbar.Collapse id='navbarResponsive'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to={EPagesPaths.HOME}
              onClick={handleScrollToTop}
            >
              About Me
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to={EPagesPaths.EXPERIENCE}
              onClick={handleScrollToTop}
            >
              Experience
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to={EPagesPaths.EDUCATION}
              onClick={handleScrollToTop}
            >
              Education
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to={EPagesPaths.MY_SKILLS}
              onClick={handleScrollToTop}
            >
              My Skills
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to={EPagesPaths.INTERESTS}
              onClick={handleScrollToTop}
            >
              Interests
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to={EPagesPaths.AWARDS}
              onClick={handleScrollToTop}
            >
              Awards
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to={EPagesPaths.CERTIFICATIONS}
              onClick={handleScrollToTop}
            >
              Certifications
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to={EPagesPaths.PROJECTS}
              onClick={handleScrollToTop}
            >
              Projects
            </Link>
          </li>

          <hr className='m-0 px-2 text-light' />

          <li className='nav-item' id='about-this-project-link'>
            <Link
              className='nav-link'
              to={EPagesPaths.DOCUMENTATION}
              onClick={handleScrollToTop}
            >
              Documentation
            </Link>
          </li>
          <Container className='social-icons'>
            <a
              data-bs-toggle='tooltip'
              data-bs-placement='top'
              className='social-icon'
              title={USER_DATA.social.telegram.title}
              href={USER_DATA.social.telegram.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTelegram />
            </a>
            <a
              data-bs-toggle='tooltip'
              data-bs-placement='top'
              className='social-icon'
              title={USER_DATA.social.whatsapp.title}
              href={USER_DATA.social.whatsapp.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaWhatsapp />
            </a>
            <a
              data-bs-toggle='tooltip'
              data-bs-placement='top'
              className='social-icon'
              title={USER_DATA.social.viber.title}
              href={USER_DATA.social.viber.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaViber />
            </a>
          </Container>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
