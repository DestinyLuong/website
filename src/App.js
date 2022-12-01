import './App.css';
import {Home} from './pages/Home.js';
import {Projects} from './pages/Projects.js';
import {Contact} from './pages/Contact.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>

  );
}

export default App;
