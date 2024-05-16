import {
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas
} from 'react-bootstrap'
import { CiMenuKebab } from 'react-icons/ci'

export const FilterProjectsSection = () => {
  const expand: string = 'md'
  return (
    <Navbar expand={expand} className='bg-body-tertiary mb-3'>
      <Container fluid>
        <Navbar.Brand>
          <h5>Filters</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
          <CiMenuKebab />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement='end'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Options
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-start flex-grow-1 pe-3'>
              <NavDropdown
                title='Field'
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item>All</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something else here</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title='Category'
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item>All</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something else here</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title='Technologies'
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item>All</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something else here</NavDropdown.Item>
              </NavDropdown>

              <span className='d-flex flex-column flex-grow-1'></span>

              <Button variant='btn btn-primary mt-sm-5 mt-md-1 me-md-2'>
                Apply
              </Button>

              <Button className='btn btn-secondary mt-sm-2 mt-md-1'>
                Reset
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default FilterProjectsSection
