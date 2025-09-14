import { useEffect, useState } from "react"; // component memory + side effect after render
import { getHeadlines } from "../api/headlines"; // api helper promise that returns title,link or [] on fail

export default function Headlines({ city }) { // city is prop (read only)
  const [items, setItems] = useState([]); // array of title, link that starts empty
  const [loading, setLoading] = useState(false); // loading state flag that starts as false

  useEffect(() => { // runs on mount and anytime city changes
    if (!city) return; // does nothing if city is empty
    setLoading(true); // loading state
    setItems([]); // clears old headlines

    getHeadlines(city) // fetch + promise 
      .then((list) => setItems(list)) //if successful, save results
      .finally(() => setLoading(false)); // regardless it'll always stop loading
  }, [city]); // runs on mount and on city change (dependacy array)

  if (loading) return <p>Loading headlines…</p>; // loading state
  if (!items.length) return <p>No headlines found.</p>; // empty state

  return ( // just stylistic choices on how to display such as as a list with bullet points
    <ul className="space-y-2 list-disc ml-5">
      {items.map((h) => (
        <li key={h.link}> {/*key must be unique among siblings and stable for this item */}
          <a
            href={h.link}
            target="_blank" // opens a new tab 
            rel="noreferrer" // prevents from sending to referrer
            className="underline hover:text-blue-400"
          >
            {h.title} ↗
          </a>
        </li>
      ))}
    </ul>
  );
}
