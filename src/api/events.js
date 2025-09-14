export async function getEvents(city) { // other files can use, async just means it an wait for things
  const key = import.meta.env.VITE_TM_KEY; // grabs the tm api key
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?city=${encodeURIComponent(
    city
  )}&size=3&apikey=${key}`; /* web address that asks tm for events. encode makes city name safe 4 urls 
   size = 3 limits it to 3 events */

  const res = await fetch(url); // asks or 'fetches' that web address data and awaits(waits) for an answer before continuing
  if (!res.ok) return []; // returns an empty list if something went wrong vs. just crashing

  const data = await res.json(); // turns json into javascript data/object we can use
  const events = data?._embedded?.events ?? []; /* ?. = if this part doesnt exist, don't crash, 
  ?? [] if nothing is found just use an empty list  */

  return events.map((ev) => ({ // takes each event and pulls the data we want: name, date, and link with safeguards if data is missing
    name: ev?.name ?? "Untitled Event",
    date: ev?.dates?.start?.localDate ?? "TBD",
    url: ev?.url ?? "#",
  }));
}
