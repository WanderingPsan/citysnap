import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
/* browserrouter checks address bar and uses history api so back/forward functions without reloading*/
/* routes is like a switchboard that checks current path and picks which route to render*/
/* route is just a single path, and link is cilent-sided <a> that doesnt need a full page reload*/
import Home from "./pages/Home";
import City from "./pages/City";
import About from "./pages/About";

export default function App() {
  return (
    // BrowserRouter checks for url changes and renders the matching <Route>
    <BrowserRouter>
      {/* just an a header */}
      <header className="border-b border-slate-300/40 py-3">
        <nav className="max-w-4xl mx-auto px-4 flex gap-4 items-center">
          {/* enabling url update and new route to be rendered without page refresh. basically <a> */}
          <Link to="/" className="font-semibold hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </nav>
      </header>

      {/* choosing which page renders what, :name is dynamic in city. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:name" element={<City />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
// this type of structure keeps navigation fast, shareable, and testable vs a full page refresh each time
