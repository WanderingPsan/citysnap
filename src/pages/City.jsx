import { useParams } from "react-router-dom"; // tool that lets the page read pieces of a url
import WeatherCard from "../components/WeatherCard"; // child that fetches + displays weather

export default function City() {
  // defines city page component and grabs the dynamic portion of a url (so if it was city/Paris, it'd grab "Paris")
  const { name } = useParams();
  // stylizing [thank you tailwind]
  return (
    <main className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">City: {name}</h1>

      {/* weather card section */}
      <div className="max-w-md">
        <WeatherCard city={name} />
      </div>
    </main>
  );
}
