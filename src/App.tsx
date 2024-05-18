// Components
import NavigationBar from './components/navigationBar/NavigationBar'

// Router
import { Route, Routes } from 'react-router'

// Enums
import EPagesPaths from './enum/EPagesPaths'

// Pages
import HomePage from './pages/home/HomePage'
import ExperiencePage from './pages/experience/ExperiencePage'
import EducationPage from './pages/education/EducationPage'
import MySkillsPage from './pages/skills/MySkillsPage'
import InterestsPage from './pages/interests/InterestsPage'
import AwardsPage from './pages/awards/AwardsPage'
import DocumentationPage from './pages/documentation/DocumentationPage'
import ProjectsPage from './pages/projects/ProjectsPage'
import CertificationsPage from './pages/certifications/CertificationsPage'
import PageNotFoundPage from './pages/pageNotFound/PageNotFoundPage'
import ComingSoonPage from './pages/comingSoon/ComingSoonPage'

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path={EPagesPaths.HOME} element={<HomePage />} />
        <Route path={EPagesPaths.EXPERIENCE} element={<ExperiencePage />} />
        <Route path={EPagesPaths.EDUCATION} element={<EducationPage />} />
        <Route path={EPagesPaths.MY_SKILLS} element={<MySkillsPage />} />
        <Route path={EPagesPaths.INTERESTS} element={<InterestsPage />} />
        <Route path={EPagesPaths.AWARDS} element={<AwardsPage />} />
        <Route
          path={EPagesPaths.DOCUMENTATION}
          element={<DocumentationPage />}
        />
        <Route path={EPagesPaths.PROJECTS} element={<ProjectsPage />} />
        <Route
          path={EPagesPaths.CERTIFICATIONS}
          element={<CertificationsPage />}
        />
        <Route
          path={EPagesPaths.PAGE_NOT_FOUND}
          element={<PageNotFoundPage />}
        />
        <Route path={EPagesPaths.COMING_SOON} element={<ComingSoonPage />} />
      </Routes>
    </>
  )
}

export default App
