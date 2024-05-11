// Components
import NavBar from "./components/NavBar";

// Pages
import HomePage from "./pages/home/HomePage";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Overriding Bootstrap styles with custom styles
import "./scss/styles.scss";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
    </>
  );
}

export default App;
