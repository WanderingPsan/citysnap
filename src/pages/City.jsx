import { useParams } from "react-router-dom"; // tool that lets the page read pieces of a url

export default function City() {
  // defines city page component and grabs the dynamic portion of a url (so if it was city/Paris, it'd grab "Paris")
  const { name } = useParams();

  return ( // just more ui stuff
    <main className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">City: {name}</h1>

      <p className="text-sm opacity-80">
        Weather, photos, headlines, and events will load here as we build features.
      </p>
    </main>
  );
}
