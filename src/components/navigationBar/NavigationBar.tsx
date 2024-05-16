import { useState, useEffect, useRef } from 'react'
import USER_DATA from '../../data/user.json'
import AVATAR from '../../assets/png/avatar-hi.png'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { FaTelegram, FaWhatsapp, FaViber } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import EPagesPaths from '../../enum/EPagesPaths'

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const handleToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const handleClose = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <Navbar
      expand='lg'
      variant='dark'
      bg='primary'
      fixed='top'
      id='sideNav'
      expanded={menuOpen}
      ref={navbarRef}
    >
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
      <Navbar.Toggle aria-controls='navbarResponsive' onClick={handleToggle} />
      <Navbar.Collapse id='navbarResponsive'>
        <Nav className='navbar-nav'>
          <Nav.Item>
            <Link
              className='nav-link nav-item'
              to={EPagesPaths.HOME}
              onClick={() => {
                scrollToTop()
                handleClose()
              }}
            >
              About Me
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className='nav-link'
              to={EPagesPaths.EXPERIENCE}
              onClick={() => {
                scrollToTop()
                handleClose()
              }}
            >
              Experience
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className='nav-link'
              to={EPagesPaths.EDUCATION}
              onClick={() => {
                scrollToTop()
                handleClose()
              }}
            >
              Education
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className='nav-link'
              to={EPagesPaths.MY_SKILLS}
              onClick={() => {
                scrollToTop()
                handleClose()
              }}
            >
              My Skills
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className='nav-link'
              to={EPagesPaths.INTERESTS}
              onClick={() => {
                scrollToTop()
                handleClose()
              }}
            >
              Interests
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className='nav-link'
              to={EPagesPaths.AWARDS}
              onClick={() => {
                scrollToTop()
                handleClose()
              }}
            >
              Awards
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className='nav-link'
              to={EPagesPaths.CERTIFICATIONS}
              onClick={() => {
                scrollToTop()
                handleClose()
              }}
            >
              Certifications
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className='nav-link'
              to={EPagesPaths.PROJECTS}
              onClick={() => {
                scrollToTop()
                handleClose()
              }}
            >
              Projects
            </Link>
          </Nav.Item>

          <hr className='m-0 px-2 text-light' />

          <Nav.Item id='about-this-project-link'>
            <Link
              className='nav-link'
              to={EPagesPaths.DOCUMENTATION}
              onClick={() => {
                scrollToTop()
                handleClose()
              }}
            >
              Documentation
            </Link>
          </Nav.Item>
          <Container className='social-icons'>
            <a
              data-bs-toggle='tooltip'
              data-bs-placement='top'
              className='social-icon'
              title={USER_DATA.social.telegram.title}
              href={USER_DATA.social.telegram.href}
              target='_blank'
              rel='noopener noreferrer'
              onClick={handleClose}
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
              onClick={handleClose}
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
              onClick={handleClose}
            >
              <FaViber />
            </a>
          </Container>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
