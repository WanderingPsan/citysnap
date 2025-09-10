import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import City from './pages/City';
import About from './pages/About';
import './style.css';     // keep Tailwind import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:name" element={<City />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

