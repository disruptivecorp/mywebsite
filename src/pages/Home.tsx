// Home page — the "front door" of the site.
//
// Layout:
//   1. Bio          — section titled "Alejandro Scaffa, PhD". Portrait
//                     on the left, first-person three-paragraph bio on
//                     the right. Replaces both the old hero and the old
//                     About card; education is embedded in the prose, no
//                     standalone "Training" list.
//   2. Teaching     — short intro paragraph + bulleted course list for
//                     each semester (Fall 2026 and Spring 2027 expected).
//   3. Research     — three prose paragraphs (central question → lab
//                     framework → current/developing areas) + a link to
//                     the Scaffa Lab page for project-level detail.
//   4. Contact      — email + LinkedIn + GitHub + Download CV button.
//                     Anchored as #contact so old links keep working.
//
// All sections render inside the shared <Layout> from App.tsx — no nav
// or footer markup here.
import { Link } from "react-router-dom";
import Section from "../components/Section";

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* SECTION 1 — Alejandro Scaffa, PhD                                 */}
      {/* Portrait (h-[22rem]) + three first-person paragraphs. Without a   */}
      {/* hero in front of it, this card carries the visual weight of the   */}
      {/* landing — kept at 22rem so it has presence without dominating.    */}
      {/* ---------------------------------------------------------------- */}
      <Section
        title="Alejandro Scaffa, PhD"
        media={
          <img
            src="/images/portrait.jpg"
            alt="Portrait of Alejandro Scaffa"
            // object-cover with object-top so the crop drops the lower
            // body rather than the face.
            className="h-[22rem] w-full object-cover object-top"
          />
        }
        // CV access lives under the portrait, not in the Contact card.
        // Single secondary-styled button — opens the PDF in a new tab
        // so the SPA isn't navigated away from.
        mediaFooter={
          <a
            href="/files/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-full border border-ink/20 bg-cream-card px-5 text-sm font-medium text-ink no-underline hover:border-teal hover:text-teal"
          >
            View CV
          </a>
        }
      >
        {/* Three paragraphs with even vertical spacing between them.
            space-y-4 = 1rem between sibling elements. */}
        <div className="space-y-4">
         <p>
          I am the incoming Assistant Professor of Biology at Grinnell
          College for the 2026–2027 academic year, where I will teach
          pharmacology, biochemistry, and computational biology, and
          lead the Scaffa Lab. My research focuses on cellular
          senescence and stress responses across biological contexts,
          using computational and quantitative approaches to study how
          cell states differ across tissues, diseases, and
          microenvironments.
        </p>
        
        <p>
          I earned my PhD in Molecular Pharmacology and Physiology from
          Brown University, where I studied hyperoxia-induced senescence,
          metabolism, and lung development in the laboratory of Phyllis
          Dennery, MD. I then completed postdoctoral training at Merck
          Research Laboratories in Boston, working on cancer-associated
          fibroblasts, senescence, and the tumor microenvironment in
          pancreatic ductal adenocarcinoma. More recently, I completed an
          MS in Computer Science at Northeastern University's Roux Institute,
          adding formal training in algorithms, machine learning, and
          reproducible computational analysis.
        </p>
        
        <p>
          I am building the Scaffa Lab as a dry-lab-first research group
          that develops reproducible computational workflows for studying
          cell states. Over time, the goal is to grow into a computational
          and experimental biology lab that connects image analysis,
          single-cell transcriptomics, and experimental cell biology and
          biochemistry.
        </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* SECTION 2 — Teaching                                              */}
      {/* Intro paragraph + two semester cards with bulleted course lists.  */}
      {/* The semester headings are h3 (the section title is h2) so the    */}
      {/* document outline reads correctly to screen readers and search.   */}
      {/* ---------------------------------------------------------------- */}
      <Section title="Teaching">
      <p>
        Starting Fall 2026 at Grinnell, I will teach pharmacology,
        biochemistry, and computational biology. My teaching focuses on
        scientific thinking: helping students move beyond “what is the
        answer?” toward “how do we know?” and “what would happen if?”
        I emphasize mechanistic reasoning, systems thinking, and helping
        students connect molecular concepts to real biological and
        biomedical problems.
      </p>

        {/* "Grinnell College" stays as the single institution header
            (h3). Each semester is an h4 subheading underneath, with
            its bullets indented below. Avoids repeating "Grinnell
            College" twice. */}
        <h3 className="mt-8 text-xl font-semibold text-ink md:text-2xl">
          Grinnell College
        </h3>

        <h4 className="mt-5 text-lg font-semibold text-ink">Fall 2026</h4>
        <ul className="mt-2 space-y-2 pl-5">
          <li className="list-disc">BCM 262 — Biochemistry Laboratory</li>
          <li className="list-disc">BIO 375 — Principles of Pharmacology</li>
        </ul>

        <h4 className="mt-5 text-lg font-semibold text-ink">
          Spring 2027 (expected)
        </h4>
        <ul className="mt-2 space-y-2 pl-5">
          <li className="list-disc">
            Computational Biology{" "}
            <span className="text-ink-muted">(course number TBD)</span>
          </li>
          <li className="list-disc">BIO 375 — Principles of Pharmacology</li>
        </ul>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* SECTION 3 — Research                                              */}
      {/* Prose, not bullets. The central question, then the framework      */}
      {/* (biochemical resource profiles), then current/developing areas.   */}
      {/* Closing link points to /scaffa-lab for project-level detail.      */}
      {/* ---------------------------------------------------------------- */}
      <Section title="Research">
        <div className="space-y-4">
        <p>
          My research focuses on cellular senescence and stress responses.
          The central question motivating the Scaffa Lab is why cells exposed
          to similar stressors can differ in metabolism, secretory activity,
          inflammatory signaling, survival, and vulnerability to intervention.
          More at the{" "}
            <Link to="/scaffa-lab" className="font-medium">
              Scaffa Lab
            </Link>{" "}
          page.
        </p>
        
        <p>
          The long-term focus of the Scaffa Lab is senescence heterogeneity.
          We approach this through the idea of biochemical resource profiles:
          recurring patterns in how cells allocate energetic, redox,
          damage-repair, and secretory capacity under persistent stress.
        </p>
        
        <p>
          Current work in the Scaffa Lab is dry-lab-first and centered on
          reproducible computational workflows tied to publishable biological
          questions. These include single-cell RNA-seq analysis of senescent
          fibroblast states, quantitative image-based phenotyping of in vitro
          cell models, and computational pathology pipelines built from
          tissue images annotated by domain experts.
        </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* SECTION 4 — Contact                                               */}
      {/* Email + location + collaboration interests + technical areas +    */}
      {/* social icons. The CV access lives under the portrait in Section   */}
      {/* 1; this card does not have CV buttons.                            */}
      {/* ---------------------------------------------------------------- */}
      <Section title="Contact and Collaboration" id="contact">
        {/* Update the email below to your Grinnell address once it's
            issued. The Northeastern address stays here as a fallback. */}
        <p>
          Email:{" "}
          <a href="mailto:scaffa.a@northeastern.edu">
            scaffa.a@northeastern.edu
          </a>
        </p>
        {/* Collaboration paragraph + technical areas. Reads as a clear
            "here's what to email me about" statement, framed around
            research, teaching, and the methods the lab uses. */}
        <p className="mt-4">
          I am happy to hear from people interested in research, teaching,
          or collaboration at the intersection of cellular senescence,
          computational biology, and quantitative image analysis. I am
          especially interested in projects involving cell-state
          heterogeneity, histology image analysis, single-cell RNA-seq,
          fibroblast biology, tumor microenvironment biology, and stress
          responses across biological contexts.
        </p>
        <p className="mt-4">
          Selected technical areas include Python, single-cell RNA-seq
          analysis, computational pathology, image analysis, machine
          learning, CellProfiler, QuPath, and HoVer-Net.
        </p>

        {/* Icon row — three external links in the order requested:
            Google Scholar, GitHub, LinkedIn. GitHub and LinkedIn are
            inline SVGs so they inherit the text color; Google Scholar
            is a wordmark PNG downloaded from Wikimedia Commons and
            served locally from /public/images/. */}
        <div className="mt-6 flex items-center gap-5">
          <a
            href="https://scholar.google.com/citations?user=UsU8mJcAAAAJ&hl=en&oi=ao"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar profile"
            className="inline-flex items-center hover:opacity-75"
          >
            {/* The logo is a wordmark (icon + "Google Scholar" text), so
                it's much wider than the icon-only links beside it.
                Height h-8 to match; width auto preserves the aspect. */}
            <img
              src="/images/google-scholar-logo.png"
              alt="Google Scholar"
              className="h-8 w-auto"
            />
          </a>
          <a
            href="https://github.com/disruptivecorp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-ink hover:text-teal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.2.9 2.3v3.3c0 .3.2.7.8.6A12 12 0 0012 .3z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/alejandroscaffa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-ink hover:text-teal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.43a2.06 2.06 0 11.01-4.12 2.06 2.06 0 010 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
            </svg>
          </a>
        </div>

      </Section>
    </>
  );
}
