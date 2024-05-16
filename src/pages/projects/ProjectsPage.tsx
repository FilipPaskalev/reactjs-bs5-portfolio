import { useState } from 'react'
import { Navbar, Nav, Dropdown, Form, Button, Container } from 'react-bootstrap'
import { FaFilter } from 'react-icons/fa'
import TopProjectsSection from '../../components/topProjectsSection/TopProjectsSection'
import AllProjectsSection from '../../components/allProjectsSection/AllProjectsSection'
import PROJECTS_DATA from '../../data/projects.json'
import FilterProjectsSection from '../../components/filterProjectsSection/FilterProjectsSection'

const ProjectsPage = () => {
  const [selectedField, setSelectedField] = useState<string>('All')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedTechnologies, setSelectedTechnologies] = useState<Set<string>>(
    new Set()
  )
  const [selectedStatus, setSelectedStatus] = useState<string>('All')
  const [appliedFilters, setAppliedFilters] = useState({
    field: 'All',
    category: 'All',
    technologies: new Set<string>(),
    status: 'All'
  })

  const fields = [
    'All',
    ...new Set(PROJECTS_DATA.flatMap(project => project.field))
  ]
  const categories = [
    'All',
    ...new Set(PROJECTS_DATA.flatMap(project => project.category))
  ]
  const allTechnologies =
    selectedCategory === 'All'
      ? [...new Set(PROJECTS_DATA.flatMap(project => project.technologies))]
      : [
          ...new Set(
            PROJECTS_DATA.filter(project =>
              project.category.includes(selectedCategory)
            ).flatMap(project => project.technologies)
          )
        ]
  const statuses = [
    'All',
    ...new Set(PROJECTS_DATA.map(project => project.status))
  ]

  const handleFieldSelect = (field: string) => {
    setSelectedField(field)
  }

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
  }

  const handleTechnologyChange = (technology: string) => {
    setSelectedTechnologies(prev => {
      const newSelection = new Set(prev)
      if (newSelection.has(technology)) {
        newSelection.delete(technology)
      } else {
        newSelection.add(technology)
      }
      return newSelection
    })
  }

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status)
  }

  const handleApplyFilters = () => {
    setAppliedFilters({
      field: selectedField,
      category: selectedCategory,
      technologies: new Set(selectedTechnologies),
      status: selectedStatus
    })
  }

  const handleResetFilters = () => {
    setSelectedField('All')
    setSelectedCategory('All')
    setSelectedTechnologies(new Set())
    setSelectedStatus('All')
    setAppliedFilters({
      field: 'All',
      category: 'All',
      technologies: new Set(),
      status: 'All'
    })
  }

  const filteredProjects = PROJECTS_DATA.filter(project => {
    const matchesField =
      appliedFilters.field === 'All' ||
      project.field.includes(appliedFilters.field)
    const matchesCategory =
      appliedFilters.category === 'All' ||
      project.category.includes(appliedFilters.category)
    const matchesTechnologies =
      appliedFilters.technologies.size === 0 ||
      project.technologies.some(tech => appliedFilters.technologies.has(tech))
    const matchesStatus =
      appliedFilters.status === 'All' ||
      project.status === appliedFilters.status
    return (
      matchesField && matchesCategory && matchesTechnologies && matchesStatus
    )
  })

  return (
    <section className='resume-section container-fluid' id='projects'>
      <div className='resume-section-content'>
        <h2 className='mb-5'>Top projects</h2>
        <TopProjectsSection projects={PROJECTS_DATA.slice(0, 3)} />

        <h2 className='my-5'>All projects</h2>

        <FilterProjectsSection />
        {/* <Navbar bg='light' expand='xl' className='mb-3'>
          <Container fluid>
            <Navbar.Brand className='d-xl-none'>Filter</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'>
              <FaFilter />
            </Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Item className='me-3'>
                  <Dropdown>
                    <Dropdown.Toggle variant='secondary' id='field-dropdown'>
                      Field: {selectedField}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {fields.map(field => (
                        <Dropdown.Item
                          key={field}
                          onClick={() => handleFieldSelect(field)}
                        >
                          {field}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Item>

                <Nav.Item className='me-3'>
                  <Dropdown>
                    <Dropdown.Toggle variant='secondary' id='category-dropdown'>
                      Category: {selectedCategory}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {categories.map(category => (
                        <Dropdown.Item
                          key={category}
                          onClick={() => handleCategorySelect(category)}
                        >
                          {category}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Item>

                <Nav.Item className='me-3'>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant='secondary'
                      id='technology-dropdown'
                    >
                      Select Technologies
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Form>
                        {allTechnologies.map(technology => (
                          <Form.Check
                            key={technology}
                            type='checkbox'
                            label={technology}
                            checked={selectedTechnologies.has(technology)}
                            onChange={() => handleTechnologyChange(technology)}
                            className='dropdown-item'
                          />
                        ))}
                      </Form>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Item>

                <Nav.Item className='me-3'>
                  <Dropdown>
                    <Dropdown.Toggle variant='secondary' id='status-dropdown'>
                      Status: {selectedStatus}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {statuses.map(status => (
                        <Dropdown.Item
                          key={status}
                          onClick={() => handleStatusSelect(status)}
                        >
                          {status}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Item>
              </Nav>
              <Button
                variant='primary'
                onClick={handleApplyFilters}
                className='me-2 d-xl-none'
              >
                Apply Filters
              </Button>
              <Button
                variant='secondary'
                onClick={handleResetFilters}
                className='me-2'
              >
                Reset Filters
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Button
          variant='secondary'
          onClick={handleResetFilters}
          className='d-xl-none w-100 mb-3'
        >
          Reset Filters
        </Button> */}

        <AllProjectsSection projects={filteredProjects} />
      </div>
    </section>
  )
}

export default ProjectsPage
