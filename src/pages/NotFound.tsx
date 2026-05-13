// 404 page — shown by the React Router catch-all route in App.tsx.
// Separate from public/404.html: that file handles GitHub Pages' own
// 404 (when someone hits a deep URL before the SPA loads), and bounces
// them back to the SPA which then renders THIS component.
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-5xl font-bold text-ink">404</h1>
      <p className="mt-4 text-lg text-ink-soft">
        That page doesn't exist. The link may be old, or I may have moved
        something.
      </p>
      <p className="mt-6">
        <Link to="/" className="font-medium">
          Back to home →
        </Link>
      </p>
    </div>
  );
}
