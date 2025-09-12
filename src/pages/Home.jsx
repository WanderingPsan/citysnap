
import { useState } from "react"; // importing tool that lets values be remembered
import { useNavigate } from "react-router-dom"; // tool that lets you change pages via code vs. entire page reload


export default function Home() { //
  // controlled input, textbox will show city (empty via ""), and typing calls setCity to update it
  const [city, setCity] = useState("");
  // programatically shifting pages
  const navigate = useNavigate();

  // function that runs anytime the form is submitted (like pressing enter or clicking the button)
  function handleSubmit(e) {
    e.preventDefault(); // stops a normal form submit that reloads the entire page
    const cityClean = city.trim(); // removes extra spaces so like " paris " becomes "paris"
    if (!cityClean) return; // returns nothing if city is empty, just a guard
    navigate(`/city/${cityClean}`); // move to city page with the city param
  }
    
  return ( // just a bunch of ui components
    <main className="max-w-xl mx-auto mt-20 p-4">  {/* main content settings */}
      <h1 className="text-3xl font-bold text-center mb-6">CitySnap</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 justify-center"> {/* connects our submit func to form*/}
        <input
          value={city}                         
          onChange={(e) => setCity(e.target.value)} // keep textbox + city state in sync
          placeholder="Enter a city (e.g., Paris)"
          className="p-2 rounded-md text-black w-64"
          aria-label="City name"
        />
        <button // just tailwind css class stuff + submits the form 
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white"
          type="submit"
        >
          Go
        </button>
      </form>
    </main>
  );
}

