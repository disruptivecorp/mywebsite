// Other Projects page — software, machine learning, and computational
// projects developed outside the Scaffa Lab research portfolio.
//
// Five cards in order of significance:
//   1. PulsePoint           — full-stack team project (CS5500, Fall 2025)
//   2. NotePad Sessions     — full-stack solo project (CS5610, Fall 2025)
//   3. PANCAN ML Pipeline   — TCGA cancer ML project (CS5100)
//   4. Markhords            — Markov chord generator (BINF6250)
//   5. This Website         — meta credit, no image
//
// Each main project uses the shared <Section> card pattern with an
// image on the left, description paragraphs on the right, and a row of
// "View on GitHub" / "View report" links in the media footer below the
// image — mirroring the View PDF placement on Publications paper cards.
//
// Voice convention: faculty-style, not student-portfolio. We name the
// course context briefly (e.g. "Developed during CS5500…") rather than
// leading with "for my final project". Collaborators get named with
// the same care as on the Scaffa Lab page.
import type { ReactNode } from "react";
import Section from "../components/Section";

// ---------------------------------------------------------------- //
// ProjectLink — small pill-style external link button. Two variants: //
//   primary (filled charcoal) — used for the main GitHub link.       //
//   secondary (outline) — used for additional links like reports.    //
// Matches the View CV / View PDF buttons elsewhere on the site for   //
// visual consistency across cards.                                    //
// ---------------------------------------------------------------- //
function ProjectLink({
  href,
  label,
  primary = false,
  note,
}: {
  href: string;
  label: string;
  primary?: boolean;
  /** Optional small qualifier shown after the label (e.g. "private"). */
  note?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        primary
          ? "inline-flex h-9 items-center rounded-full bg-ink px-5 text-sm font-medium text-cream no-underline hover:bg-teal"
          : "inline-flex h-9 items-center rounded-full border border-ink/20 bg-cream-card px-5 text-sm font-medium text-ink no-underline hover:border-teal hover:text-teal"
      }
    >
      {label}
      {note && (
        <span
          className={
            primary
              ? "ml-2 text-xs text-cream/70"
              : "ml-2 text-xs text-ink-muted"
          }
        >
          ({note})
        </span>
      )}
    </a>
  );
}

// Wrapper for the link row that sits under the media image. Flex with
// gap so multi-button rows wrap gracefully on narrow widths.
function LinkRow({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}

export default function Projects() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* INTRO — page title + framing paragraph. Title uses the same      */}
      {/* centered + teal-underline style as the other top-of-page         */}
      {/* section titles (Selected Publications, Scaffa Lab, etc.) so the  */}
      {/* page visually parallels them.                                     */}
      {/* ---------------------------------------------------------------- */}
      <Section title="Other Projects">
        <p>
          A collection of software, machine learning, and computational
          projects developed through my MS in Computer Science at
          Northeastern University's Roux Institute and related independent
          work. These sit outside the Scaffa Lab research portfolio but
          share the same emphasis on reproducible pipelines,
          instrument-agnostic abstractions, and domain-aware tooling.
        </p>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* PROJECT 1 — PulsePoint                                            */}
      {/* Image is portrait/mobile screenshot (629x1184, aspect 0.53).     */}
      {/* Same "tall image" treatment as the Yao paper on Publications.    */}
      {/* ---------------------------------------------------------------- */}
      <Section
        title="PulsePoint: MaineHealth Continuing Education Platform"
        media={
          <img
            src="/images/pulse_point_mobile.png"
            alt="PulsePoint mobile interface showing My Events list, search bar, event cards, and the user menu"
            className="h-[29rem] w-full object-contain"
          />
        }
        mediaCaption="PulsePoint mobile view: event browsing and saved-events menu."
        mediaFooter={
          <LinkRow>
            <ProjectLink
              href="https://github.com/ABFCode/maine-med-ce-website"
              label="View on GitHub"
              primary
            />
          </LinkRow>
        }
      >
        <div className="space-y-4">
          <p>
            A full-stack healthcare event management platform built for
            MaineHealth's continuing education program. PulsePoint gives
            clinicians a mobile-first way to discover, search, save, and
            calendar continuing education events that often get missed in
            email. Administrators can create and manage events;
            standard users can browse and save them to a personal events
            page.
          </p>
          <p>
            Developed at Northeastern University's Roux Institute for
            CS5500 (Foundations of Software Engineering, Fall 2025) in
            collaboration with Angela Leclerc at MaineHealth, mentored by
            Dr. Molly Domino. I co-led the team alongside August
            Halm-Perazone, with team members Mason Cheney, Aiden
            Finnegan, and Nikhila Koneru.
          </p>
          <p>
            <strong>Tech.</strong> React, Vite, Tailwind CSS, Flask,
            SQLAlchemy, SQLite, JWT authentication with two-factor
            authentication, pytest.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* PROJECT 2 — NotePad Sessions                                      */}
      {/* Image is landscape (849x622), fits standard h-72.                 */}
      {/* ---------------------------------------------------------------- */}
      <Section
        title="NotePad Sessions: A Songwriting Web App"
        media={
          <img
            src="/images/notepad_sessions_image.png"
            alt="NotePad Sessions entry editor with title and metadata fields, chord-selector panel, and aligned lyrics"
            className="h-72 w-full object-contain"
          />
        }
        mediaCaption="NotePad Sessions entry editor: chord selector and aligned lyrics view."
        mediaFooter={
          <LinkRow>
            <ProjectLink
              href="https://github.com/nuwebdev/project-fall25-disruptivecorp"
              label="View on GitHub"
              primary
              note="private"
            />
          </LinkRow>
        }
      >
        <div className="space-y-4">
          <p>
            A solo full-stack songwriting app for musicians. The lyrics
            editor solves the alignment problem between lyrics and chord
            symbols by storing chord positions structurally rather than
            as inline text. A clickable SVG fretboard generates chord
            diagrams from a reusable music-theory engine, so the same
            logic can extend to piano in future versions. The app also includes a WebAudio API
            metronome for practice and composition.
          </p>
          <p>
            Developed solo at Northeastern University's Roux Institute
            for CS5610 (Web Development, Fall 2025). Public mirror
            planned; the linked repository is currently private.
          </p>
          <p>
            <strong>Tech.</strong> React, Tailwind CSS, Flask, SQLite,
            WebAudio API, music-theory utilities in plain JavaScript.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* PROJECT 3 — PANCAN cancer ML pipeline                             */}
      {/* Confusion matrix image (already in repo).                         */}
      {/* ---------------------------------------------------------------- */}
      <Section
        title="A Reproducible Machine Learning Pipeline for TCGA Pan-Cancer RNA-seq"
        media={
          <img
            src="/images/pancan_project.png"
            alt="Confusion matrix for multiclass cancer-type prediction on the held-out test set"
            className="h-72 w-full object-contain"
          />
        }
        mediaCaption="Confusion matrix, multiclass cancer-type prediction on the held-out test set."
        mediaFooter={
          <LinkRow>
            <ProjectLink
              href="https://github.com/disruptivecorp/A-Reproducible-RNASeq-Cancer-ML-AI-Prediction-Pipeline"
              label="View on GitHub"
              primary
            />
            <ProjectLink
              href="/files/PANCAN Report.pdf"
              label="View report"
            />
          </LinkRow>
        }
      >
        <div className="space-y-4">
          <p>
            An end-to-end, reproducible machine learning pipeline for the
            TCGA Pan-Cancer dataset, which provides RNA-sequencing data
            from over 11,000 patient samples across 33 cancer types. The
            pipeline covers preprocessing, variance thresholding, model
            comparison, and stacked classification combining logistic
            regression and XGBoost. In this implementation, binary
            classification (cancer versus healthy) reached 99.3%
            accuracy, and multiclass classification (cancer type
            prediction) reached 97.6% on held-out test data.
          </p>
          <p>
            Developed at Northeastern University's Roux Institute for
            CS5100 (Foundations of Artificial Intelligence).
          </p>
          <p>
            <strong>Tech.</strong> Python, scikit-learn, XGBoost, NumPy,
            pandas, matplotlib, seaborn, joblib.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* PROJECT 4 — Markhords                                             */}
      {/* ---------------------------------------------------------------- */}
      <Section
        title="Markhords: A Markov-Model Chord Progression Generator"
        media={
          <img
            src="/images/Markov Chords.png"
            alt="Example chord progressions sampled from the trained Markov model, displayed as roman numerals"
            className="h-72 w-full object-contain"
          />
        }
        mediaCaption="Example output: chord progressions sampled from the trained Markov model, shown as roman numerals."
        mediaFooter={
          <LinkRow>
            <ProjectLink
              href="https://github.com/disruptivecorp/Markov-Model-Chord-Progression-Generator"
              label="View on GitHub"
              primary
            />
          </LinkRow>
        }
      >
        <div className="space-y-4">
          <p>
            A key-agnostic chord-progression engine trained on the
            Chordonomicon dataset (over 600,000 songs; Kantarelis et al.,
            2024). The project normalizes chords to roman numerals and
            derives Markov-chain transition models, then samples from
            those models to generate progressions that are stylistically
            grounded without imitating any single song. The approach
            borrows from computational biology, where Markov models
            capture the grammar of DNA and proteins, and applies it to
            music as an analogous symbolic domain.
          </p>
          <p>
            Developed at Northeastern University's Roux Institute for
            BINF6250 (Algorithmic Foundations in Bioinformatics).
          </p>
          <p>
            <strong>Tech.</strong> Python, NumPy.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* PROJECT 5 — This website                                          */}
      {/* No image; compact card at the bottom as a meta credit.           */}
      {/* ---------------------------------------------------------------- */}
      <Section title="This Website">
        <div className="space-y-4">
          <p>
            The site you're reading. Built with React, TypeScript,
            Tailwind CSS, and Vite, deployed via GitHub Pages with the
            custom domain <em>alejandroscaffa.com</em>. The repository is
            public and intentionally easy to fork as a starting point for
            academic personal sites. The current single-page architecture
            replaced an earlier hand-coded HTML and CSS version
            originally written as a course assignment.
          </p>
          <p>
            <strong>Tech.</strong> React, TypeScript, Tailwind CSS, Vite,
            React Router, GitHub Pages.
          </p>
          <div className="pt-2">
            <ProjectLink
              href="https://github.com/disruptivecorp/mywebsite"
              label="View on GitHub"
              primary
            />
          </div>
        </div>
      </Section>
    </>
  );
}
