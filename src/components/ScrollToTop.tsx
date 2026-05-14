// ScrollToTop — listens for route changes and scrolls the window back
// to the top on every navigation. Without this, React Router preserves
// the previous page's scroll position, which feels broken (you click a
// nav link and the new page starts mid-scroll).
//
// In-page hash anchors (e.g. /#contact on Home) are intentionally NOT
// scrolled to top — when the URL has a hash, the browser's native
// anchor jump should win.
//
// Rendered for its side effect only (returns null). Place it inside
// the Router context, outside the Routes — see App.tsx.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Anchor jumps (e.g. /#contact) — let the browser handle scroll.
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
