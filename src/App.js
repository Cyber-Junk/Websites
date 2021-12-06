import './App.css';
import Contact from './Contact/Contact';
import Events from './Events/Events';
import Navbar from './Navbar/Navbar';
import Team from './Team/Team';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <img src={require("./logo.png").default} alt="logo" className="cyberjunk-logo"/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;