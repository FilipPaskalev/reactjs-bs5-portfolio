import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import avatarImage from "./assets/react.svg";
import "./nav-bar.css";

const NavBar = () => {
  const expand = "lg";
  const offcanvasLabel = "Menu";

  const NavLinksStack = () => {
    return (
      <>
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">About</Nav.Link>
        <Nav.Link href="#action3">Contact</Nav.Link>
        <Nav.Link href="#action4">Projects</Nav.Link>
      </>
    );
  };

  return (
    <div className="navbar-container">
      <Navbar
        key="top-navbar"
        expand={expand}
        className="top-navbar mb-3 d-lg-none"
      >
        <Container fluid>
          <Navbar.Brand href="#">Filip Paskalev</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                {offcanvasLabel}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLinksStack />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <div className="d-none d-lg-block side-navbar-container">
        <Navbar
          key="side-navbar"
          bg="dark"
          variant="dark"
          expand={expand}
          className="side-navbar h-100"
        >
          <Container>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse
              id="navbar-nav"
              className="d-flex flex-column justify-content-center"
            >
              <div className="text-center mb-3 avatar-container">
                <img src={avatarImage} alt="Avatar" />
              </div>
              <Nav className="flex-column text-center">
                <NavLinksStack />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
