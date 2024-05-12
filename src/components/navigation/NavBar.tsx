// Utils, Data, Assets
import USER_DATA from "../../data/user.json";
import AVATAR_HI from "../../assets/avatar-hi.png";

// React Bootstrap
import Container from "react-bootstrap/Container";

// icons
import { FaTelegram, FaWhatsapp, FaViber } from "react-icons/fa";

// TODO: REFACTOR - replace components with React Bootstrap components for better readability

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand" href="#page-top">
        <span className="d-block d-lg-none">
          <b>
            {USER_DATA.firstName} {USER_DATA.lastName}
          </b>
        </span>
        <Container className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={AVATAR_HI}
            alt="profile avatar"
          />
        </Container>
      </a>
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
            <a className="nav-link" href="#about-me">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#experience">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#education">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              My Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#interests">
              Interests
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#awards">
              Awards
            </a>
          </li>
          <hr className="m-0 px-2 text-light" />
          <li className="nav-item" id="about-this-project-link">
            <a className="nav-link" href="/about-project">
              Documentation
            </a>
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
    </nav>
  );
};

export default NavBar;
