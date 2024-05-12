// Components
import NavBar from "./components/navigation/NavBar";

// Pages
import HomePage from "./pages/home/HomePage";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Overriding Bootstrap styles with custom styles
import "./scss/styles.scss";
import AboutProjectPage from "./pages/aboutProject/AboutProjectPage";
import AboutMePage from "./pages/aboutMe/aboutMePage";
import ExperiencePage from "./pages/experience/ExperiencePage";

function App() {
  return (
    <>
      <NavBar />
      <AboutMePage />
      <ExperiencePage />
    </>
  );
}

export default App;
