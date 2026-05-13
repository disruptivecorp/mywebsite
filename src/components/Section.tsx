// Section — reusable card component for page content.
//
// Mirrors the "section card" pattern from the original vanilla site:
// a centered white card with optional title, with either single-column
// (text only) or two-column (image + text) layout.
//
// Usage:
//   <Section title="About">single-column body</Section>
//   <Section title="About" media={<img ... />}>two-column body</Section>
//   <Section
//     title="About"
//     media={<img ... />}
//     mediaFooter={<a ...>Open CV</a>}
//   >...</Section>
import type { ReactNode } from "react";

interface SectionProps {
  /** Title rendered at the top of the card. Optional for un-titled cards. */
  title?: string;
  /** When present, the section renders as a two-column image + text layout. */
  media?: ReactNode;
  /** Optional caption shown under the media (semantic <figcaption>). */
  mediaCaption?: ReactNode;
  /** Optional content below the media (e.g. a button). Rendered as a
   *  sibling of the image inside the same figure, not as a caption. */
  mediaFooter?: ReactNode;
  /** Body content — paragraphs, lists, anything. */
  children: ReactNode;
  /** Optional id for in-page anchor links (e.g. id="contact"). */
  id?: string;
  /** When true (and there's no media), the single-column body uses the
   *  full card width instead of the default max-w-4xl prose column.
   *  Useful for pages whose body is a wide card grid (e.g. People). */
  wideBody?: boolean;
}

export default function Section({
  title,
  media,
  mediaCaption,
  mediaFooter,
  children,
  id,
  wideBody = false,
}: SectionProps) {
  // Choose grid template based on whether there's media. CSS grid handles
  // the responsive collapse to a single column on mobile via Tailwind's
  // `md:` breakpoint.
  const hasMedia = Boolean(media);

  return (
    // Card width: max-w-6xl. Side gutters feel tight on a 13" screen.
    <section
      id={id}
      className="mx-auto my-8 max-w-6xl rounded-2xl bg-cream-card px-6 py-6 shadow-sm ring-1 ring-ink/5 md:px-10 md:py-8"
    >
      {title && (
        // Title + teal accent. The bar is a border-bottom on the h2
        // (set to inline-block so its width follows the title text).
        // Long titles get long bars, short titles get short bars —
        // visually proportional without per-section width tuning.
        // The wrapper div uses text-center to horizontally center the
        // inline-block h2 + its underline.
        <div className="mb-4 text-center">
          <h2 className="inline-block border-b-4 border-teal pb-1 text-2xl font-bold text-ink md:text-3xl">
            {title}
          </h2>
        </div>
      )}
      <div
        className={
          hasMedia
            ? "grid gap-6 md:grid-cols-[minmax(0,360px)_1fr] md:items-start md:gap-10"
            : wideBody
              ? // Full card width — used when body is a wide card grid
                // rather than reading-prose. People page uses this so
                // three person cards fit comfortably in one row.
                "w-full"
              : // Default single-column body max-width — keeps prose
                // line length comfortable on wider screens.
                "mx-auto max-w-4xl"
        }
      >
        {hasMedia && (
          <figure className="m-0">
            {/* Image wrapper — fixed-aspect frame so the card doesn't
                jump as it loads. */}
            <div className="overflow-hidden rounded-lg bg-cream">{media}</div>
            {mediaCaption && (
              <figcaption className="mt-2 text-sm leading-relaxed text-ink-muted">
                {mediaCaption}
              </figcaption>
            )}
            {/* Optional footer below the image (e.g. a CV button). Lives
                inside the figure but is not a caption — kept separate
                so it doesn't carry the muted-caption styling. */}
            {mediaFooter && <div className="mt-3">{mediaFooter}</div>}
          </figure>
        )}
        {/* Body text — text-lg (18px). Comfortable for sustained reading
            of paragraph prose, which is what most of the site is. The
            wider container (max-w-4xl inner) keeps line length in the
            65-75 char sweet spot at this size. */}
        <div className="text-lg leading-relaxed text-ink-soft">
          {children}
        </div>
      </div>
    </section>
  );
}
