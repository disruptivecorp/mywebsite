// People — directory of lab members and collaborators.
//
// Layout: two sections, equal-sized cards across both.
//   1. Directly Associated with the Lab — PI + student researchers
//      together so the entire "in-the-lab" group reads as one unit.
//   2. Senior Collaborators — external collaborators.
//
// Cards are identical in size and style regardless of role. We use
// section headings to label role categories, not card visuals. Each
// card has four lines of text:
//   - Name
//   - Role title (Principal Investigator / Student Researcher /
//     Senior Collaborator) — italicized teal, the only colored line on
//     the card, signaling the lab role.
//   - Position (Assistant Professor / MS Student / Research Scientist)
//   - Institution
//
// Cards laid out via flex-wrap with justify-center, so 3-card and
// 2-card sections both center their cards rather than awkwardly
// left-anchoring with an empty grid cell.
//
// To add a person: drop another <PersonCard /> in the right section.
// To swap in a real headshot for a student, save the file to
// public/images/ and pass it as the `image` prop on their card.
import Section from "../components/Section";

// ---------------------------------------------------------------- //
// PersonAvatar — circular image OR circular teal initials.          //
// Same dimensions either way so cards stay visually consistent      //
// whether a real headshot exists or not.                            //
// ---------------------------------------------------------------- //
function PersonAvatar({
  image,
  imageAlt,
  initials,
}: {
  image?: string;
  imageAlt?: string;
  /** Two-letter fallback shown when no image is provided. */
  initials: string;
}) {
  if (image) {
    return (
      <img
        src={image}
        alt={imageAlt}
        // object-top so portrait crops favor the face over the torso.
        // h-32/w-32 (128px) is a deliberate bump from the earlier h-24
        // so the downscaled image renders crisper on retina displays.
        className="h-32 w-32 rounded-full object-cover object-top ring-2 ring-ink/10"
      />
    );
  }
  return (
    // Initials placeholder — teal background ties into the site accent
    // color and signals "image pending" without looking broken. Same
    // diameter as the photo variant for visual consistency across cards.
    <div
      aria-hidden="true"
      className="flex h-32 w-32 items-center justify-center rounded-full bg-teal font-serif text-3xl font-semibold text-cream"
    >
      {initials}
    </div>
  );
}

// ---------------------------------------------------------------- //
// PersonCard — vertical card: avatar on top, then name, role title  //
// (italic teal), position, and institution. Centered text and a     //
// fixed max-width so cards look identical across sections.           //
// ---------------------------------------------------------------- //
function PersonCard({
  name,
  roleTitle,
  position,
  institution,
  image,
  imageAlt,
  initials,
}: {
  name: string;
  /** Lab role: Principal Investigator / Student Researcher / Senior
   *  Collaborator. Rendered in teal italic to signal the lab role. */
  roleTitle: string;
  /** External-facing role/title (e.g. "Assistant Professor of Biology"). */
  position: string;
  /** Home institution and unit (e.g. "Grinnell College"). */
  institution: string;
  image?: string;
  imageAlt?: string;
  initials: string;
}) {
  return (
    <div className="flex w-full max-w-xs flex-col items-center text-center">
      <PersonAvatar image={image} imageAlt={imageAlt} initials={initials} />
      <p className="mt-4 text-base font-semibold text-ink">{name}</p>
      <p className="mt-1 text-sm italic text-teal">{roleTitle}</p>
      <p className="mt-1 text-sm text-ink-soft">{position}</p>
      <p className="mt-0.5 text-sm text-ink-muted">{institution}</p>
    </div>
  );
}

export default function People() {
  return (
    <Section title="People" wideBody>
      {/* ----- Lab Members ----- */}
      <h3 className="text-xl font-semibold text-ink md:text-2xl">
        Lab Members
      </h3>
      {/* flex-wrap + justify-center centers any number of cards in the
          row. On wide screens the three cards sit side by side; below
          the breakpoint they stack one per row. */}
      <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-10">
        <PersonCard
          name="Alejandro Scaffa, PhD"
          roleTitle="Principal Investigator"
          position="Assistant Professor of Biology"
          institution="Grinnell College"
          image="/images/portrait.jpg"
          imageAlt="Portrait of Alejandro Scaffa"
          initials="AS"
        />
        <PersonCard
          name="Harshil Bhojwani"
          roleTitle="Student Researcher"
          position="MS Student"
          institution="Roux Institute, Northeastern University"
          initials="HB"
        />
      </div>

      {/* ----- Senior Collaborators ----- */}
      <h3 className="mt-12 text-xl font-semibold text-ink md:text-2xl">
        Senior Collaborators
      </h3>
      <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-10">
        <PersonCard
          name="Michael Wan, PhD"
          roleTitle="Senior Collaborator"
          position="Research Scientist"
          institution="Institute for Experiential AI, Northeastern University"
          initials="MW"
        />
        <PersonCard
          name="Candice Byers, PhD"
          roleTitle="Senior Collaborator"
          position="Research Scientist"
          institution="Roux Institute, Northeastern University"
          initials="CB"
        />
      </div>
    </Section>
  );
}
