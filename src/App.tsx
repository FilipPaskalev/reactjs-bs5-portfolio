// Components
import NavBar from "./components/navigation/NavBar";

// Router
import { Route, Routes } from "react-router";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Overriding Bootstrap styles with custom styles
import "./scss/styles.scss";

// Pages
import HomePage from "./pages/home/HomePage";
import ExperiencePage from "./pages/experience/ExperiencePage";
import EducationPage from "./pages/education/EducationPage";
import MySkillsPage from "./pages/skills/MySkillsPage";
import InterestsPage from "./pages/interests/InterestsPage";
import AwardsPage from "./pages/awards/AwardsPage";
import DocumentationPage from "./pages/documentation/DocumentationPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import CertificationsPage from "./pages/certifications/CertificationsPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/my-skills" element={<MySkillsPage />} />
        <Route path="/interests" element={<InterestsPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/project-documentation" element={<DocumentationPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
      </Routes>
    </>
  );
}

export default App;
