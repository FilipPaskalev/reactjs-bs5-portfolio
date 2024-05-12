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

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/my-skills" element={<MySkillsPage />} />
      </Routes>
    </>
  );
}

export default App;
