import './css/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import MainPage from "./containers/MainPage";
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <Router>
      <NavBar />
      <Jumbotron />
      <Route exact path="/" component={MainPage} />
      <Footer />
    </Router>
  );
}

export default App;
