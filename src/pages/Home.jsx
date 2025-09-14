import { useState } from "react"; // memory tool
import { useNavigate } from "react-router-dom"; // enables the ability to programmatically change pages

export default function Home() { // home page component
  const [city, setCity] = useState(""); // remembers what the users types and starts empty
  const navigate = useNavigate(); // function to go to different pages


  // looks  in browser storage for old searches, converts saved text to a usable list 
  // or empty list if nothing was saved
  const saved = JSON.parse(localStorage.getItem("history") || "[]"); // looks  in browser storage

  function handleSubmit(e) { // function that runs when somenoe clicks go or enter
    e.preventDefault(); // stops form from reloading the page

    const cityClean = city.trim(); // removes excess spaces
    if (!cityClean) return; // if nothing was typed, do nothing

    // puts new city in front of the list
    // removes city if it was on the list to prevent duplicates and only keeps first 5 cities
    const updated = [cityClean, ...saved.filter((c) => c !== cityClean)].slice(
      0,
      5
    );

    // saves the updated history list to bbrowser so it can stick between different visits
    localStorage.setItem("history", JSON.stringify(updated));

    // takes the user to the page for the city
    navigate(`/city/${cityClean}`);
  }

  // only shows if there is saved searches, creates clickable button for each saved city
  return (
    <main className="max-w-xl mx-auto mt-20 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">CitySnap</h1>

      {saved.length > 0 && (
        <div className="mb-4 text-center">
          <p className="opacity-70 mb-2 text-sm">Recent:</p>
          {saved.map((h) => (
            <button
              key={h}
              onClick={() => navigate(`/city/${h}`)}
              className="underline mr-2"
            >
              {h}
            </button>
          ))}
        </div>
      )}

      {/* search form: creates form handleSubmit */}
      <form onSubmit={handleSubmit} className="flex gap-2 justify-center">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city (e.g., Tokyo)"
          className="p-2 rounded-md text-black w-64"
          aria-label="City name"
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white"
          type="submit"
        >
          Go
        </button>
      </form>
    </main>
  );
}

