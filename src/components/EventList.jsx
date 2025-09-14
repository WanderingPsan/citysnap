import { useEffect, useState } from "react"; // memory + side effects 
import { getEvents } from "../api/events"; // grabs function from other file

export default function EventList({ city }) { // component that expects city 
  const [evs, setEvs] = useState([]);  // remembers list of events, starts empty
  const [loading, setLoading] = useState(false); // remebers if we're getting data, starts false

  useEffect(() => { // runs whenever city changes, 
    if (!city) return; // if no city, nothing is done
    setLoading(true); // shows loading
    setEvs([]); // clears out events

    getEvents(city) 
      .then((list) => setEvs(list)) // saves events when gotten
      .finally(() => setLoading(false)); // when done (regardless of success or failure), stops showing loading
  }, [city]);

  if (loading) return <p>Loading events…</p>; // if data is still being obtained show this
  if (!evs.length) return <p>No events found.</p>; // if no events, show this

  return ( /* shows the events, creates a bulleted list
     with event name bolded, date, and ticket link that opens in a new tab w/ some styling*/
    <ul className="space-y-2">
      {evs.map((ev) => (
        <li key={ev.url} className="border rounded-md p-3"> {/* helps react keep track of each item */}
          <div className="font-semibold">{ev.name}</div>
          <div className="text-sm opacity-70">{ev.date}</div>
          <a
            href={ev.url}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Tickets ↗
          </a>
        </li>
      ))}
    </ul>
  );
}
