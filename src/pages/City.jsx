import { useParams } from "react-router-dom"; // tool that lets the page read pieces of a url
import CardGrid from "../components/CardGrid"; // gets the cardgrid stylistic changes
import WeatherCard from "../components/WeatherCard"; // child that fetches + displays weather
import PhotoGallery from "../components/PhotoGallery"; // gets the images correlating to the city
import Headlines from "../components/Headlines"; // gets the reddit headlines


export default function City() {
  // defines city page component and grabs the dynamic portion of a url (so if it was city/Paris, it'd grab "Paris")
  const { name } = useParams();
  // stylizing [thank you tailwind]
  return (
    <main className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">City: {name}</h1>

      <CardGrid>
      {/* weather card section */}
      <div className="max-w-md">
        <WeatherCard city={name} />
      </div>

     {/* photo grid */}
      <div>
      <PhotoGallery city={name} />
      </div>

      {/* Headlines list */}
      <div className="p-4 rounded-xl bg-slate-800/40">
        <h2 className="text-lg font-semibold mb-2">Top Reddit Headlines</h2>
        <Headlines city={name} />
      </div>
      </CardGrid>
    </main>
  );
}
