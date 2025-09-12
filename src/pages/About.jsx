
export default function About() { // defines about page component
  return ( // tailwind css stuff
    <main className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-2">About CitySnap</h1>
      <p>
        CitySnap is a learning project that I made that aggregates weather, images, Reddit
        headlines, and event listings for any city you search, but also as apart of a portfolio showcase.
      </p>
    </main>
  );
}

