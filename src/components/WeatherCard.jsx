import { useState, useEffect } from 'react'; // gives memory + allows [side]effects after renders like fetching from api
import { getWeather } from '../api/weather'; // importing that earlier getWeather we defined earlier, promise

// shows current temp + description for a city
export default function WeatherCard({ city }) {
  /* loading flag structure(data === null below), null will prompt it's loading
        if an object is returned show success w/ info
        if an empty string show no error
        if error is a non empty string, will show error message                   */
  const [data,  setData]  = useState(null);
  const [error, setError] = useState('');

  // runs after first render and anytime city changes
  useEffect(() => {
    
    if (!city) return; // skip the fetching if there is no city

    setData(null); // forces the ui into loading while new request + stops old city data from showing
    getWeather(city) // api call (weather in particular)
      .then(setData)            // on success, response object is stored in data
      .catch(e => setError(e.message)); // on failure, store a readable error
  }, [city]);                   //  dependency array

  // this is primarily rendering logic
  if (error)        return <p className="text-red-500">{error}</p>; // if error, show in red and stops render
  if (data === null) return <p>Loading weather…</p>; // otherwise if data is null show loading weather
 /* in react else statement is implicit, big thing to realize which can make code more concise
 and readable in good application */
  return ( // anyways if we have data: 
    <section className="p-6 rounded-xl text-center color-card"> {/* using those tokens from before that were defined earlier */}
      <h2 className="text-xl font-semibold mb-1">{data.name}</h2> {/* shows city name from api response */}
      <p  className="text-5xl">{Math.round(data.main.temp)}°F</p> {/* just rounding the temp to whole # */}
      <p  className="capitalize">{data.weather[0].description}</p> {/* capitalize is just aesthetic tbh */}
    </section>
  );
}
