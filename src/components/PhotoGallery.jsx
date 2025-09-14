import { useEffect, useState } from "react"; // same as always, bringing the two hooks that enable memory + side effects
import { getPhotos } from "../api/photos"; // returns a promise w/ array of images from photo.js

export default function PhotoGallery({ city }) { // function, city is a prop(read only from parent)
  const [urls, setUrls] = useState([]); // list of photo urls that render that starts empty
  const [loading, setLoading] = useState(false); // fetching check that's defaulted to false

  useEffect(() => {  // runs after a render, upon city changing and on mount
    if (!city) return; 

    setLoading(true); // starts loading state
    setUrls([]); // removes old photos

    getPhotos(city) // the actual fetch that returns the promise from photos.js
      .then((photos) => setUrls(photos)) // if successful, the urls are saved
      .finally(() => setLoading(false)); // upon success or failure stop loading, so runs no matter what
  }, [city]); // dependency array that runs on mount and whenever city changes

  if (loading) return <p>Loading photos…</p>; // shows loading photos during loading
  if (!urls.length) return <p>No photos found.</p>; // if failure for whatever reason, show error state

  return ( // stylistic choices, grid format, lazy loading for better perofrmance, alt text added for accessibility
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-6">
      {urls.map((u) => (
        <img
          key={u}
          src={u}
          alt={`${city} view`}
          className="w-full h-40 object-cover rounded-md"
          loading="lazy"
        />
      ))}
    </div>
  );
}
