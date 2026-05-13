// PubItem — renders a single publication entry.
// Used by both the Publications page (full list) and the Home page
// (selected pubs preview), driven by the same Publication interface.
import type { Publication } from "../data/publications";

export default function PubItem({ pub }: { pub: Publication }) {
  return (
    <li className="border-l-2 border-teal/40 pl-4">
      <h3 className="text-lg font-semibold leading-snug text-ink">
        {pub.title}
      </h3>
      <p className="mt-1 text-sm text-ink-soft">
        {pub.authors}. <em className="italic">{pub.venue}</em>, {pub.year}
      </p>
      <p className="mt-1 text-sm">
        <a href={pub.link} target="_blank" rel="noopener noreferrer">
          Publisher
        </a>
        {pub.pdf && (
          <>
            {" · "}
            <a href={pub.pdf} target="_blank" rel="noopener noreferrer">
              PDF
            </a>
          </>
        )}
      </p>
    </li>
  );
}
