import { useState } from 'react'
import { Dropdown, Form, Button } from 'react-bootstrap'
import TopProjectsSection from '../../components/topProjectsSection/TopProjectsSection'
import AllProjectsSection from '../../components/allProjectsSection/AllProjectsSection'
import PROJECTS_DATA from '../../data/projects.json'

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedTechnologies, setSelectedTechnologies] = useState<Set<string>>(
    new Set()
  )

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

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setSelectedTechnologies(new Set())
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

  const handleResetFilters = () => {
    setSelectedCategory('All')
    setSelectedTechnologies(new Set())
  }

  const filteredProjects = PROJECTS_DATA.filter(project => {
    const matchesCategory =
      selectedCategory === 'All' || project.category.includes(selectedCategory)
    const matchesTechnologies =
      selectedTechnologies.size === 0 ||
      project.technologies.some(tech => selectedTechnologies.has(tech))
    return matchesCategory && matchesTechnologies
  })

  return (
    <section className='resume-section container-fluid' id='projects'>
      <div className='resume-section-content'>
        <h2 className='mb-5'>Top projects</h2>
        <TopProjectsSection projects={PROJECTS_DATA.slice(0, 3)} />

        <h2 className='my-5'>All projects</h2>
        <div className='subheading mb-3'>
          <div className='d-flex align-items-center'>
            <div className='me-3'>
              <Dropdown>
                <Dropdown.Toggle variant='success' id='category-dropdown'>
                  Category: {selectedCategory}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {categories.map(category => (
                    <Dropdown.Item
                      key={category.toString()}
                      onClick={() => handleCategorySelect(category.toString())}
                    >
                      {category}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className='me-3'>
              <Dropdown>
                <Dropdown.Toggle variant='success' id='technology-dropdown'>
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
            </div>

            <Button variant='secondary' onClick={handleResetFilters}>
              Reset
            </Button>
          </div>
        </div>

        <AllProjectsSection projects={filteredProjects} />
      </div>
    </section>
  )
}

export default ProjectsPage
