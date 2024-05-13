// Utils, Data, Assets
import USER_DATA from "../../data/user.json";
import AVATAR from "../../assets/avatar-hi.png";
// React Bootstrap
import Container from "react-bootstrap/Container";
// icons
import { FaTelegram, FaWhatsapp, FaViber } from "react-icons/fa";
import { Navbar } from "react-bootstrap";
// React Router
import { Link } from "react-router-dom";
import EPagesPaths from "../../enum/EPagesPaths";

// TODO: REFACTOR - replace components with React Bootstrap components for better readability

const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      bg="primary"
      fixed="top"
      id="sideNav"
      // className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      // id="sideNav"
    >
      <Navbar.Brand href={EPagesPaths.HOME}>
        <b className="d-block d-lg-none">
          {USER_DATA.firstName} {USER_DATA.lastName}
        </b>
        <Container className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={AVATAR}
            alt="profile avatar"
          />
        </Container>
      </Navbar.Brand>
      <a
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </a>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to={EPagesPaths.HOME}>
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={EPagesPaths.EXPERIENCE}>
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={EPagesPaths.EDUCATION}>
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={EPagesPaths.MY_SKILLS}>
              My Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={EPagesPaths.INTERESTS}>
              Interests
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={EPagesPaths.AWARDS}>
              Awards
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={EPagesPaths.CERTIFICATIONS}>
              Certifications
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={EPagesPaths.PROJECTS}>
              Projects
            </Link>
          </li>

          <hr className="m-0 px-2 text-light" />

          <li className="nav-item" id="about-this-project-link">
            <Link className="nav-link" to={EPagesPaths.DOCUMENTATION}>
              Documentation
            </Link>
          </li>
          <Container className="social-icons">
            <a
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              className="social-icon"
              title={USER_DATA.social.telegram.title}
              href={USER_DATA.social.telegram.href}
              target="_blank"
            >
              <FaTelegram />
            </a>
            <a
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              className="social-icon"
              title={USER_DATA.social.whatsapp.title}
              href={USER_DATA.social.whatsapp.href}
              target="_blank"
            >
              <FaWhatsapp />
            </a>
            <a
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              className="social-icon"
              title={USER_DATA.social.viber.title}
              href={USER_DATA.social.viber.href}
              target="_blank"
            >
              <FaViber />
            </a>
          </Container>
        </ul>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
