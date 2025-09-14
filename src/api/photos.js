export async function getPhotos(city) {
  const key = import.meta.env.VITE_UNSPLASH_KEY; // reading/pulling key from .env

  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    city
  )}&orientation=landscape&per_page=6&client_id=${key}`; /*encodeuricomponent has same purpose as before, which is just safeguarding the urls, 
orientation set to landscape and limiting results to 6 at most*/
  const res = await fetch(url); // http request
  if (!res.ok) {
    // empty array is returned in case of failure (bad query/rate limitation etc)
    return [];
  }

  const data = await res.json(); // response comes in as json string which this parses into normal js object readable

  return (data.results ?? []).map((pic) => pic.urls.small); 
  /*  ?? [] is a nulling coalescing operator which brings an empty array if data.results is null/undefined
  which prevents crashes, and the .map((pic) => pic.urls.small) means each photo will
  keep the small image link which keeps the the ui simpler. */
}
