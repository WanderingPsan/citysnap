export default function CardGrid({ children }) { // children prop
  return <div className="grid gap-6 md:grid-cols-2">{children}</div>; // just presentational modifications
}
