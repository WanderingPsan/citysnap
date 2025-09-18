import { useEffect, useState } from "react"; // component memory + side effects
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
/* browserrouter checks address bar and uses history api so back/forward functions without reloading*/
/* routes is like a switchboard that checks current path and picks which route to render*/
/* route is just a single path, and link is cilent-sided <a> that doesnt need a full page reload*/
import Home from "./pages/Home";
import City from "./pages/City";
import About from "./pages/About";

export default function App() {
  // `theme` is light or dark
  const [theme, setTheme] = useState( 
    // theme remembers if light or dark, app checks browser storage but defaults to light otherwise
    () => localStorage.getItem("theme") || "light"
  );

  // Whenever theme changes, update <html> class and persist to storage
  useEffect(() => { // runs whenever theme changes
    const root = document.documentElement; // gets the main html element of the page
    if (theme === "dark") root.classList.add("dark"); // if dark mode, adds dark class to html via tailwind
    else root.classList.remove("dark"); // otherwise remove dark/ go into light mode
    localStorage.setItem("theme", theme); // saves it to the browser storage
  }, [theme]);

  // function to swap between light and dark
  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return (
    <BrowserRouter>
      <header className="border-b border-slate-300/40 py-3">
        <nav className="max-w-4xl mx-auto px-4 flex gap-4 items-center justify-between">
          <div className="flex gap-4 items-center">
            <Link to="/" className="font-semibold hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </div>

          {/* Theme toggle button with accessible label */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-md border border-slate-300/40 hover:bg-slate-200/40 dark:hover:bg-slate-800/50"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:name" element={<City />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
// this type of structure keeps navigation fast, shareable, and testable vs a full page refresh each time
