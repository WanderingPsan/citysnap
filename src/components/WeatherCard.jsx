import { useState, useEffect } from 'react'; /* importing two react hooks state giving memory,
effect enabling action in response to change after a render */
import { getWeather } from '../api/weather'; // importing that earlier getWeather we defined earlier

// shows current temp + description for a city
export default function WeatherCard({ city }) {
  /* 1. Local state:
        null   → loading
        object → success
        string → error message                                   */
  const [data,  setData]  = useState(null);
  const [error, setError] = useState('');

  /* 2. Side-effect: whenever `city` prop changes, trigger fetch. */
  useEffect(() => {
    // Guard against empty city on first render.
    if (!city) return;

    setData(null);              // forces loader state
    getWeather(city)
      .then(setData)            // on success
      .catch(e => setError(e.message)); // on failure
  }, [city]);                   // ← dependency array

  // 3.   Render paths
  if (error)        return <p className="text-red-500">{error}</p>;
  if (data === null) return <p>Loading weather…</p>;

  return (
    <section className="p-6 bg-slate-800 rounded-xl text-center">
      <h2 className="text-xl font-semibold mb-1">{data.name}</h2>
      <p  className="text-5xl">{Math.round(data.main.temp)}°C</p>
      <p  className="capitalize">{data.weather[0].description}</p>
    </section>
  );
}
