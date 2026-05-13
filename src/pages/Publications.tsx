// Publications page — selected pub list followed by:
//   1. Postdoctoral Research Summary card (Section style: centered
//      teal-underlined title, image-left).
//   2. PhD Research Summary card (matching Section style).
//   3. Four "Featured Paper Summary" cards with images, using a custom
//      PaperCard component with a visually-distinct title treatment
//      (left-aligned, teal LEFT-border accent rather than centered with
//      bottom-underline). This distinguishes them from the broader
//      research-area summary cards above.
//   4. Two "Related Collaborative Paper" cards using the same PaperCard
//      component without images and with tighter padding, so they read
//      as a denser second tier.
//
// Cards 3 and 4 also include the exact paper title, formatted citation,
// inline Publisher · PDF links, and a summary paragraph (or a
// "[Summary coming soon.]" placeholder when not yet written).
import type { ReactNode } from "react";
import Section from "../components/Section";
import PubItem from "../components/PubItem";
import { publications, googleScholarUrl } from "../data/publications";

// ---------------------------------------------------------------- //
// PaperCard — visually distinct from <Section title="...">.        //
// Used for featured paper cards (with image) and for compact       //
// collaborative cards (no image). Same outer card styling as       //
// Section, but the title sits in a left-aligned column with a      //
// teal LEFT-border, instead of being centered with a teal          //
// bottom-underline like Section titles. Smaller title scale too.   //
// ---------------------------------------------------------------- //
function PaperCard({
  topicTitle,
  exactTitle,
  citation,
  publisherUrl,
  pdfUrl,
  summary,
  image,
  imageAlt,
  imageCaption,
  compact = false,
  imageHeight = "h-72",
}: {
  /** Short, readable headline (e.g. "HO-1 as a DNA-Binding Protein"). */
  topicTitle: string;
  /** The literal paper title as it appears in the published version. */
  exactTitle: string;
  /** Author list + venue + year, formatted as a single string. */
  citation: ReactNode;
  /** Link to the publisher / journal landing page. */
  publisherUrl: string;
  /** Local URL to the PDF in /public/files/. */
  pdfUrl: string;
  /** Either the human-written summary or the "[Summary coming soon.]"
   *  placeholder. Pass a string; the component does not invent text. */
  summary: string;
  /** Optional image path. When omitted, the card renders single-column. */
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  /** Compact variant: slightly tighter padding. Used for the
   *  collaborative paper cards at the bottom of the page. */
  compact?: boolean;
  /** Tailwind height class for the image container (e.g. "h-[32rem]").
   *  Override for tall portrait-aspect images that would otherwise leave
   *  a lot of horizontal whitespace inside the h-72 default. */
  imageHeight?: string;
}) {
  const hasImage = Boolean(image);
  return (
    <section
      className={
        compact
          ? "mx-auto my-6 max-w-6xl rounded-2xl bg-cream-card px-6 py-5 shadow-sm ring-1 ring-ink/5 md:px-10 md:py-6"
          : "mx-auto my-8 max-w-6xl rounded-2xl bg-cream-card px-6 py-6 shadow-sm ring-1 ring-ink/5 md:px-10 md:py-8"
      }
    >
      <div
        className={
          hasImage
            ? "grid gap-6 md:grid-cols-[minmax(0,360px)_1fr] md:items-start md:gap-10"
            : "mx-auto max-w-4xl"
        }
      >
        {hasImage && (
          <figure className="m-0">
            <div className="overflow-hidden rounded-lg bg-cream">
              <img
                src={image}
                alt={imageAlt}
                className={`w-full object-contain ${imageHeight}`}
              />
            </div>
            {imageCaption && (
              <figcaption className="mt-2 text-sm leading-relaxed text-ink-muted">
                {imageCaption}
              </figcaption>
            )}
          </figure>
        )}

        <div>
          {/* Topic title — left-aligned with a teal left-border accent.
              Smaller than Section h2; left-anchored rather than centered
              so paper cards read as catalog entries, not page chapters. */}
          <h2 className="border-l-4 border-teal pl-4 text-xl font-bold text-ink md:text-2xl">
            {topicTitle}
          </h2>

          {/* Exact paper title — italic, slightly muted, between the
              topic title and the citation. */}
          <p className="mt-3 italic text-ink-soft">{exactTitle}</p>

          {/* Citation — small and muted; reads as metadata. */}
          <p className="mt-2 text-sm text-ink-muted">{citation}</p>

          {/* Inline Publisher · PDF links — same pattern as PubItem. */}
          <p className="mt-2 text-sm">
            <a
              href={publisherUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Publisher
            </a>
            {" · "}
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
              PDF
            </a>
          </p>

          {/* Summary — either the human-written paragraph or the
              "[Summary coming soon.]" placeholder, set in the standard
              body text size for consistency with the rest of the page. */}
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            {summary}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Publications() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* SELECTED PUBLICATIONS — unchanged from previous pass.             */}
      {/* ---------------------------------------------------------------- */}
      <Section title="Selected Publications">
        <p className="mb-6">
          Selected publications are listed below. Scroll down for short,
          readable summaries of the research arc and featured papers.
        </p>

        <ul className="space-y-4">
          {publications.map((pub) => (
            <PubItem key={pub.title} pub={pub} />
          ))}
        </ul>
        <p className="mt-8">
          <a
            href={googleScholarUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            See all publications on Google Scholar →
          </a>
        </p>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* POSTDOCTORAL RESEARCH SUMMARY                                     */}
      {/* Research-area card. Same Section style as before, with updated   */}
      {/* Two-paragraph postdoc research overview.                          */}
      {/* ---------------------------------------------------------------- */}
      <Section
        title="Postdoctoral Research: Tumor Microenvironment and Cancer-Associated Fibroblasts"
        media={
          <img
            src="/images/CAFs.jpg"
            alt="Cancer-associated fibroblasts in the tumor microenvironment"
            className="h-72 w-full object-contain"
          />
        }
        mediaCaption="CAFs in the tumor microenvironment (Wikimedia, CC)."
      >
        <div className="space-y-4">
          <p>
            During my postdoctoral fellowship at Merck Research
            Laboratories in Boston, MA, mentored by Marta Wlodarska, PhD
            and Stavros Kopsiaftis, PhD, I worked on preclinical tumor
            microenvironment research in pancreatic ductal adenocarcinoma,
            with a focus on cancer-associated fibroblasts, cellular
            senescence, and stromal biology. This industry work remained
            unpublished, but it involved experimental and computational
            approaches including FACS, bulk RNA-seq, single-cell RNA-seq,
            secretomics, and bioinformatics analysis.
          </p>
          <p>
            Working in an industry drug-discovery setting gave me
            experience on interdisciplinary teams with experimental
            biologists, geneticists, bioinformaticians, and translational
            scientists. This work deepened my interest in fibroblast
            states, senescent cancer-associated fibroblasts, and the ways
            therapeutic responses emerge from interactions among tumor
            cells, stromal cells, immune signals, and the broader tissue
            microenvironment.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* PHD RESEARCH SUMMARY                                              */}
      {/* New card, same Section style as the postdoc card. BPD.jpg used   */}
      {/* as the lead image since the radiograph is the clearest visual    */}
      {/* anchor for the doctoral context (BPD).                            */}
      {/* ---------------------------------------------------------------- */}
      <Section
        title="PhD Research: Hyperoxia, Senescence, and Lung Development"
        media={
          <img
            // User to save the attached illustration here; until then,
            // the broken-image placeholder will show. File path is
            // public/images/bpd-illustration.png.
            src="/images/bpd-illustration.png"
            alt="Illustration comparing normal breathing with breathing in bronchopulmonary dysplasia"
            className="h-72 w-full object-contain"
          />
        }
        mediaCaption="Normal lung tissue compared with stiff lung tissue in BPD (The Nemours Foundation / KidsHealth)."
      >
        <div className="space-y-4">
          <p>
            My doctoral research in Molecular Pharmacology and Physiology
            at Brown University, conducted in the laboratory of Phyllis
            Dennery, MD, studied how neonatal hyperoxic exposure affects
            lung development, cellular senescence, metabolism, and
            long-term tissue remodeling. This work was motivated by
            bronchopulmonary dysplasia, a disease of premature infants in
            which life-saving supplemental oxygen can also contribute to
            disrupted lung development and lasting lung pathology.
          </p>
          <p>
            Across cell culture, mouse models, and single-cell RNA-seq,
            we asked how oxygen stress alters lung epithelial cell
            states, mitochondrial and metabolic function, senescence
            programs, and postnatal lung development. These studies
            showed that hyperoxia can drive senescence and metabolic
            rewiring in lung epithelial cells, that even early-life
            oxygen exposure can leave persistent changes in the lung
            cellular landscape, and that the timing and cell specificity
            of senescence determine whether it supports normal
            development or contributes to injury.
          </p>
          <p>
            Together, this work shaped my broader interest in cellular
            stress responses, senescence heterogeneity, metabolism, and
            computational approaches for understanding complex
            biological systems.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* FEATURED PAPER SUMMARY CARDS                                      */}
      {/* Four paper-specific cards with images. Visually distinct from    */}
      {/* the research summaries above via the PaperCard component.        */}
      {/* ---------------------------------------------------------------- */}

      {/* Card 1 — Yao et al., Nature Communications 2023. */}
      <PaperCard
        topicTitle="Paper Summary: Timing and Cell Specificity of Senescence in Lung Development and Injury"
        exactTitle="Timing and cell specificity of senescence drives postnatal lung development and injury"
        citation={
          <>
            Hongwei Yao, Joselynn Wallace, Abigail L. Peterson, Alejandro
            Scaffa, Salu Rizal, Katy Hegarty, Hajime Maeda, Jason L. Chang,
            Nathalie Oulhen, Jill A. Kreiling, Kelsey E. Huntington, Monique
            E. De Paepe, Guilherme Barbosa, and Phyllis A. Dennery.{" "}
            <em>Nature Communications</em>, 2023.
          </>
        }
        publisherUrl="https://www.nature.com/articles/s41467-023-35985-4"
        pdfUrl="/files/Nature Communications - Yao Scaffa.pdf"
        summary="Senescence is often thought of as a harmful process associated with aging and injury, but this paper asked whether senescence can also play a normal role in lung development. We found that senescence appears naturally around birth and decreases during early postnatal lung development. Removing senescent cells too early disrupted normal lung development, suggesting that some senescence is developmentally useful. In contrast, when newborn mice were exposed to high oxygen, senescence increased later in specific lung cell populations, including type II cells and secondary crest myofibroblasts, and this was linked to impaired alveolar and vascular development. The key idea is that timing matters: early programmed senescence helps organize lung development, while later hyperoxia-induced senescence contributes to lung injury."
        image="/images/yao_nature_comms.png"
        imageAlt="Graphical abstract from Yao et al. (2023), Nature Communications, showing senescence timing across lung development under normoxia and hyperoxia"
        imageCaption="Graphical abstract, Yao et al. (2023), Nature Communications."
        // Image aspect is ~0.54 (very tall). h-[29rem] is ~20% shorter
        // than the earlier h-[36rem], better matching the height of the
        // text column on the right.
        imageHeight="h-[29rem]"
      />

      {/* Card 2 — Scaffa et al., Redox Biology 2021 (scRNA-seq). */}
      <PaperCard
        topicTitle="Paper Summary: Single-cell Transcriptomics and Neonatal Hyperoxia"
        exactTitle="Single-cell transcriptomics reveals lasting changes in the lung cellular landscape into adulthood after neonatal hyperoxic exposure"
        citation={
          <>
            Alejandro Scaffa, Hongwei Yao, Nathalie Oulhen, Joselynn
            Wallace, Abigail L. Peterson, Salu Rizal, Ashok Ragavendran,
            Gary Wessel, Monique E. De Paepe, and Phyllis A. Dennery.{" "}
            <em>Redox Biology</em>, 2021.
          </>
        }
        publisherUrl="https://www.sciencedirect.com/science/article/pii/S2213231721002500"
        pdfUrl="/files/Single Cell Transcriptomics - Scaffa.pdf"
        summary="This paper asked whether a short oxygen exposure early in life can leave long-term changes in the lung, even after the initial injury has passed. Using single-cell RNA sequencing, we mapped more than 10,000 lung cells from neonatal mice exposed to high oxygen and followed them into adulthood. We identified many distinct lung cell states and found that early hyperoxia caused persistent changes, especially in type II alveolar epithelial cells, which are important for surfactant production and lung repair. Some of these altered signatures were also seen in lung samples from premature infants who required mechanical ventilation. The study showed that neonatal oxygen exposure can reshape the lung cellular landscape long after exposure ends, helping explain how early-life injury can contribute to adult lung dysfunction."
        image="/images/scrnaseq_paper.jpg"
        imageAlt="scRNA-seq paper graphical abstract (Scaffa et al., 2021)"
        imageCaption="Graphical abstract, Scaffa et al. (2021), Redox Biology."
        // Image aspect is ~0.73 (tall). h-[30rem] fills the column
        // width without leaving wide gutters on either side.
        imageHeight="h-[30rem]"
      />

      {/* Card 3 — Scaffa et al., Physiological Reports 2021
          (hyperoxia + glycolysis). No paper-specific image available;
          BPD.jpg radiograph used as a contextual proxy. */}
      <PaperCard
        topicTitle="Paper Summary: Hyperoxia, Senescence, and Glycolysis"
        exactTitle="Hyperoxia causes senescence and increases glycolysis in cultured lung epithelial cells"
        citation={
          <>
            Alejandro M. Scaffa, Abigail L. Peterson, Jennifer F. Carr,
            David Garcia, Hongwei Yao, and Phyllis A. Dennery.{" "}
            <em>Physiological Reports</em>, 2021.
          </>
        }
        publisherUrl="https://physoc.onlinelibrary.wiley.com/doi/full/10.14814/phy2.14839"
        pdfUrl="/files/Hyperoxia causes senescence and increases glycolysis - Scaffa.pdf"
        summary="This paper asked how high oxygen affects lung epithelial cells, focusing on the relationship between cellular senescence, DNA damage, p53 signaling, and metabolism. We used cultured mouse lung epithelial cells to model oxygen stress and found that hyperoxia caused DNA damage, reduced proliferation, activated p53, and increased senescence. Surprisingly, even though p53 is often linked to reduced glycolysis, hyperoxia also increased glycolysis in these cells. Sorting experiments showed that a subpopulation of senescent cells was especially glycolytic, suggesting that senescent cells may adopt distinct metabolic states under oxygen stress. The study helped connect hyperoxia-induced senescence to metabolic rewiring in lung epithelial cells."
        image="/images/scaffa_phys_reports.png"
        imageAlt="Figure 1A from Scaffa et al. (2021), Physiological Reports, showing SA-β-gal staining in air vs O2 with FACS signal"
        imageCaption="Figure 1A, Scaffa et al. (2021), Physiological Reports."
      />

      {/* Card 4 — Scaffa et al., Antioxidants 2022 (HO-1). */}
      <PaperCard
        topicTitle="Paper Summary: Heme Oxygenase-1 as a Putative DNA-Binding Protein"
        exactTitle="Identification of Heme Oxygenase-1 as a Putative DNA-Binding Protein"
        citation={
          <>
            Alejandro Scaffa, George A. Tollefson, Hongwei Yao, Salu
            Rizal, Joselynn Wallace, Nathalie Oulhen, Jennifer F. Carr,
            Katy Hegarty, Alper Uzun, and Phyllis A. Dennery.{" "}
            <em>Antioxidants</em>, 2022.
          </>
        }
        publisherUrl="https://www.mdpi.com/2076-3921/11/11/2135"
        pdfUrl="/files/HO1 is a DNA binding Protein - Scaffa.pdf"
        summary="Heme oxygenase-1, or HO-1, is best known for breaking down heme, but it also moves into the nucleus and influences gene transcription in ways unrelated to its enzymatic activity. What had not been clear is whether HO-1 directly binds DNA to control gene expression. To explore this, we combined HO-1 ChIP-seq with 3D structural modeling and identified three likely DNA-binding domains. Using the Proteinarium network tool, we found that HO-1 binding targets formed highly connected hubs, and follow-up studies in HO-1-deficient cells confirmed its role in regulating those genes. Mutating four conserved amino acids in one binding domain significantly altered expression of top predicted targets, including Gtpbp3 and Eif1. These results suggest HO-1 functions as a DNA-binding protein, opening the door to future strategies that fine-tune gene expression by targeting its binding domains."
        image="/images/ho1.png"
        imageAlt="HO-1 putative DNA-binding domain (Scaffa et al., 2022)"
        imageCaption="HO-1 putative DNA-binding domain shown in red (Scaffa et al., 2022)."
      />

      {/* ---------------------------------------------------------------- */}
      {/* RELATED COLLABORATIVE PAPER CARDS                                 */}
      {/* Compact, no images, slightly tighter padding. Render at the      */}
      {/* bottom of the page so they read as a denser "also wrote on"      */}
      {/* tier beneath the featured paper cards.                            */}
      {/* ---------------------------------------------------------------- */}

      {/* Collaborative Card 1 — Garcia et al., Pediatric Research 2021. */}
      <PaperCard
        compact
        topicTitle="Paper Summary: Hyperoxia, Mitochondrial Dysfunction, and Alveolar Simplification"
        exactTitle="Short exposure to hyperoxia causes cultured lung epithelial cell mitochondrial dysregulation and alveolar simplification in mice"
        citation={
          <>
            David Garcia, Jennifer F. Carr, Felix Chan, Abigail L.
            Peterson, Kimberlyn A. Ellis, Alejandro Scaffa, Andrew J.
            Ghio, Hongwei Yao, and Phyllis A. Dennery.{" "}
            <em>Pediatric Research</em>, 2021.
          </>
        }
        publisherUrl="https://pubmed.ncbi.nlm.nih.gov/33144707/"
        pdfUrl="/files/Garcia Scaffa - Pediatric Research.pdf"
        summary="This paper asked whether even a short exposure to high oxygen can cause lasting damage to lung epithelial cells and developing lungs. Many models of neonatal hyperoxic lung injury use long oxygen exposures, but premature infants can experience shorter periods of high oxygen during clinical care. We found that just 4 hours of hyperoxia disrupted mitochondrial respiration, electron transport chain activity, ATP production, and mitochondrial fuel use in cultured lung epithelial cells. Some metabolic defects persisted even after the cells were returned to normal oxygen. In neonatal mice, only 12 hours of hyperoxia was enough to cause later alveolar simplification, meaning the developing lung formed fewer or simplified airspaces. The study showed that brief oxygen exposure can have lasting effects on mitochondrial function and lung development."
      />

      {/* Collaborative Card 2 — Carr et al., Int J Mol Sci 2020. */}
      <PaperCard
        compact
        topicTitle="Paper Summary: HO-1 and Mitochondrial Energy Production"
        exactTitle="Heme Oxygenase-1 Supports Mitochondrial Energy Production and Electron Transport Chain Activity in Cultured Lung Epithelial Cells"
        citation={
          <>
            Jennifer F. Carr, David Garcia, Alejandro Scaffa, Abigail L.
            Peterson, Andrew J. Ghio, and Phyllis A. Dennery.{" "}
            <em>International Journal of Molecular Sciences</em>, 2020.
          </>
        }
        publisherUrl="https://www.mdpi.com/1422-0067/21/18/6941"
        pdfUrl="/files/Carr Scaffa - Int J Mol Sci.pdf"
        summary="This paper asked whether heme oxygenase-1, or HO-1, supports mitochondrial metabolism in lung epithelial cells. HO-1 is usually known as a stress-response enzyme that breaks down heme, but its protective effects may involve more than antioxidant activity alone. Using HO-1 knockout lung epithelial cells, we found that loss of HO-1 slowed cell growth and reduced mitochondrial respiration, including basal respiration, maximal respiration, and ATP production. Further experiments showed reduced electron flow through parts of the electron transport chain and altered use of mitochondrial fuels, including glucose and succinate. These findings suggest that HO-1 helps maintain mitochondrial energy production in lung epithelial cells and may protect cells partly by supporting mitochondrial function during stress."
      />
    </>
  );
}
