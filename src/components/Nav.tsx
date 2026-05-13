// Nav — top navigation, used on every page.
//
// Design carryovers from the original vanilla site:
//   1. "AS" brand on the left links back to home.
//   2. Pill-shaped tabs — recolored to charcoal/teal/cream. The active
//      tab is teal (the accent color). Hovering an active tab darkens
//      it to full charcoal so the click feedback is unmistakable. The
//      brand color stays reserved for identity.
//
// All pills (brand and tabs) share the same explicit height (h-8) and
// horizontal padding (px-4). Vertical alignment via flex items-center.
// This keeps the pills visually consistent regardless of font size
// differences between the brand and the tab labels.
//
// On mobile (< md), only the brand and a single hamburger button are
// visible. Tapping the hamburger reveals a dropdown with all the tabs.
import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

// Tab table — nav order: Home, Scaffa Lab, Publications, People,
// Other Projects.
// `end` on the home tab makes NavLink match only "/" exactly, not every
// sub-path (otherwise Home would stay highlighted on every page).
//
// To rename or reorder tabs, edit this array. To add a new tab, add an
// entry here AND register the route in App.tsx.
const tabs = [
  { to: "/", label: "Home", end: true },
  { to: "/scaffa-lab", label: "Scaffa Lab" },
  { to: "/publications", label: "Publications" },
  { to: "/people", label: "People" },
  { to: "/projects", label: "Other Projects" },
];

// Shared pill class generator — keeps active/inactive styling in one
// place so the desktop nav and mobile menu stay visually identical.
//
// Active: teal background, darkens to charcoal on hover so click
// feedback is obvious. Inactive: subtle ink-5 hover background.
function pillClass(isActive: boolean): string {
  return [
    "inline-flex h-8 items-center rounded-full px-4 no-underline transition-colors",
    isActive
      ? "bg-teal text-cream hover:bg-ink"
      : "text-ink hover:bg-ink/5 hover:text-teal",
  ].join(" ");
}

export default function Nav() {
  // Controls the mobile menu dropdown.
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the dropdown whenever the route changes — covers links inside
  // the dropdown closing themselves and any external navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    // Sticky top nav. Cream-95% background + backdrop-blur keeps the
    // page text legible when it scrolls beneath the bar.
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        {/* Brand — full name in the same pill format as the tabs.
            Same h-8 so heights line up. Teal background matches the
            site's accent color and ties the brand to the section title
            underlines; serif type echoes the section titles too.
            Hovers to charcoal so click feedback is unmistakable. */}
        <Link
          to="/"
          className="inline-flex h-8 items-center rounded-full bg-teal px-4 font-serif text-base font-semibold text-cream no-underline hover:bg-ink md:text-lg"
        >
          Alejandro Scaffa
        </Link>

        {/* ----- Desktop nav: tabs visible at md and up ----- */}
        <ul className="hidden flex-1 items-center justify-end gap-3 text-base font-medium md:flex">
          {tabs.map((tab) => (
            <li key={tab.to}>
              <NavLink
                to={tab.to}
                end={tab.end}
                className={({ isActive }) => pillClass(isActive)}
              >
                {tab.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ----- Mobile nav: hamburger button only, below md ----- */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-haspopup="true"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink hover:bg-ink/5 hover:text-teal md:hidden"
        >
          {/* Three-line "hamburger" icon when closed, "X" when open. */}
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown — rendered outside the flex row so it spans the
          full width beneath the bar. Only present when menuOpen is true,
          and only visible below the md breakpoint. */}
      {menuOpen && (
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 border-t border-ink/10 px-6 pb-4 pt-2 text-lg font-medium md:hidden">
          {tabs.map((tab) => (
            <li key={tab.to}>
              <NavLink
                to={tab.to}
                end={tab.end}
                className={({ isActive }) =>
                  [
                    "block rounded-xl px-4 py-2 no-underline transition-colors",
                    isActive
                      ? "bg-teal text-cream hover:bg-ink"
                      : "text-ink hover:bg-ink/5 hover:text-teal",
                  ].join(" ")
                }
              >
                {tab.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
