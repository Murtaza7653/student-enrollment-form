import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import Footer from './Components/Footer';
import About from './Components/About';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Form />} />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
