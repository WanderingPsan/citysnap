export async function getHeadlines(city) { // returns a promise (title and link)
  const sub = String(city).replace(/\s+/g, ""); // makes sure city is a string and removes all spaces
  const url = `https://corsproxy.io/?https://www.reddit.com/r/${encodeURIComponent(sub)}/top.json?limit=5&t=week`;
/* encodeuricomponent makes url safe, top.json is reddit's json end point to list by top,
 limits it to 5, the time window to within a week, and finally sorts by top hence t
  also needed to add a corsproxy because reddit api doesnt enable web browser direct api calls*/
  const res = await fetch(url); // http fetch
  if (!res.ok) return []; // can return empty array because some citiies might not have subreddit

  const data = await res.json(); // json into js object
  const children = data?.data?.children ?? []; /* ?. is optional chaining (stop if its missing,) 
so it basically will read something and if its null or undefined it stops and gives undefined
as opposed to crashing,  whereas ?? gives a default only if the result is truly null or undefined */
  return children.map((c) => ({ // maps reddit objects into simpler shape
    title: c?.data?.title ?? "Untitled", // posts title or untitled if missing
    link: "https://reddit.com" + (c?.data?.permalink ?? "/"), // builds a full reddit url from permalink
  }));
}
