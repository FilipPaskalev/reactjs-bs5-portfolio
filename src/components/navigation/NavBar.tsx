// Assets
import AVATAR_HI from "/public/assets/avatar-hi.png";

// Utils & data
import USER_DATA from "../../../public/data/user.json";

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
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={AVATAR_HI}
            alt="profile avatar"
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
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
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
