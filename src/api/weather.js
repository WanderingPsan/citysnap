//  exporting so other functions can just import
export async function getWeather(city) {
  // pulling the api key i got earlier td from vite's runtime environment [env]
  const key = import.meta.env.VITE_WEATHER_KEY;

  /* encoding user input( New York being turned into New%20York instead of the url breaking)
   preventing faulty urls */
  const query = encodeURIComponent(city);

  // basically prompting the api for [queried loc] for degrees in f*  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${key}`;

  // http request
  const res = await fetch(url);

  //  checking response successfulness and throwing an error if not
  if (!res.ok) throw new Error('City not found');

  // parsing raw data (json) and returning it as a useable js object if all good above
  return res.json();
}
