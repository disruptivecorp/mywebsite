// Footer — minimal, present on every page.
// Year is computed at render time so it stays correct without editing
// the source each January.
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-cream py-6 text-center text-sm text-ink-muted">
      <p>
        &copy; {year} Alejandro Scaffa ·{" "}
        {/* "Back to top" — a plain anchor to the top of the document. */}
        <a href="#top" className="hover:underline">
          Back to top
        </a>
      </p>
    </footer>
  );
}
