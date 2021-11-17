import './App.css';
import Contact from './Contact/Contact';
import Events from './Events/Events';
import Navbar from './Navbar';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Events/>
    </div>
  );
}

export default App;