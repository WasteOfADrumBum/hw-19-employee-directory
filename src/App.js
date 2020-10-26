import { BrowserRouter as Router, Route } from "react-router-dom";
// CSS3
import "./css/App.css";
// COMPONENTS
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import MainPage from "./containers/MainPage";
import Footer from "./components/Footer";

// APP
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Jumbotron />
      <Route exact path="/" component={MainPage} />
      <Footer />
    </Router>
  );
}

// EXPORT
export default App;
