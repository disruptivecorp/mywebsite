// Scaffa Lab page — five sections.
//
// Layout:
//   1. Scaffa Lab           — central question + framework + strategy.
//   2. Approach             — three method threads (scRNA-seq, in vitro
//                              imaging, computational pathology).
//   3. Active Project       — BCC computational pathology pipeline +
//                              project team and collaborator block.
//   4. Future Directions    — dry-lab → integrated wet-dry trajectory.
//   5. Join the Lab         — student opportunities + collaborator
//                              outreach, with pointer to /people.
//
// Voice: Section 1 uses "the lab" (third-person), Section 2 switches
// to "we" (first-person plural). Intentional — the soft shift between
// frame-setting and methods-description is a common academic-writing
// move. Section 3 mixes singular "the project" with the lab's plural
// voice carrying over from Section 2.
import Section from "../components/Section";

export default function ScaffaLab() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* SECTION 1 — Scaffa Lab                                            */}
      {/* Central question + biochemical resource profiles framework +     */}
      {/* dry-lab-first strategy. Sets the conceptual frame for the page.  */}
      {/* ---------------------------------------------------------------- */}
      <Section title="Scaffa Lab">
        <div className="space-y-4">
          <p>
            The Scaffa Lab studies cellular senescence heterogeneity and
            stress responses using computational and quantitative
            approaches. The central question motivating the lab is why
            senescent cells differ in function and vulnerability across
            biological contexts, even when they arise from similar
            stresses.
          </p>
          <p>
            {/* "Why study senescence?" — inline bold lead-in functioning
                as a sub-heading inside the paragraph. Replaces the
                standalone primer card that briefly lived between this
                section and Approach. */}
            <strong>Why study senescence?</strong> Cellular senescence is
            a stress-induced state in which cells stop dividing but remain
            metabolically active. Senescent cells can influence
            surrounding tissues through inflammatory signals, secreted
            factors, metabolic changes, and interactions with immune and
            stromal cells. Senescence is important in aging, cancer,
            fibrosis, tissue injury, and developmental disease, but it is
            not a single uniform cell state.
          </p>
          <p>
            Two cells can both meet the definition of senescence while
            differing substantially in metabolism, secretory activity,
            inflammatory signaling, survival, and response to intervention.
            Understanding this variation is the long-term goal of the lab.
          </p>
          <p>
            The lab approaches this question through biochemical resource
            profiles, recurring patterns in how cells allocate capacity
            across energetic, redox, damage-repair, and secretory demands
            under persistent stress. This framework provides a way to
            compare senescent states across tissues, diseases, and
            microenvironments.
          </p>
          <p>
            The Scaffa Lab is currently being built as a dry-lab-first
            (computational) research group, with the goal of developing
            reproducible computational infrastructure that supports
            collaborative projects now and future computational and
            experimental studies. During
            this phase, the lab prioritizes analysis pipelines tied to
            publishable biological questions rather than building tools
            in isolation.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* SECTION 2 — Approach                                              */}
      {/* The three method threads, each with a bolded inline label.       */}
      {/* Voice shifts to "we" — describing what the lab does, not what    */}
      {/* it conceptually argues for.                                       */}
      {/* ---------------------------------------------------------------- */}
      <Section title="Approach">
        <div className="space-y-4">
          <p>
            The lab is developing three connected approaches.
          </p>
          <p>
            <strong>Single-cell transcriptomics.</strong> We use publicly
            available and collaborative single-cell RNA-seq datasets to
            study fibroblast senescence heterogeneity. Rather than
            treating senescence as a single discrete cluster, we analyze
            cells along continua linked to metabolism, redox regulation,
            damage responses, and secretory activity.
          </p>
          <p>
            <strong>In vitro image analysis.</strong> Developing work
            focuses on quantitative microscopy workflows for cultured
            fibroblast models of senescence. These pipelines are intended
            to measure cell and nuclear morphology, mitochondrial
            organization, DNA damage-associated features, and other
            imaging-based readouts that can help compare senescent and
            non-senescent cell states.
          </p>
          <p>
            <strong>Computational pathology.</strong> We build
            reproducible pipelines that convert annotated tissue images
            into structured single-cell datasets. Current work uses H&amp;E
            whole-slide histology as the entry point, with future
            extension to IHC/IF imaging when senescence markers or other
            molecular labels are available.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* SECTION 3 — Active Project                                        */}
      {/* BCC computational pathology pipeline. Five-paragraph project     */}
      {/* description + a team/collaborator block at the bottom separated  */}
      {/* by a thin top border. Origin note (MS capstone) intentionally    */}
      {/* omitted per user.                                                 */}
      {/* ---------------------------------------------------------------- */}
      <Section title="Active Project">
        {/* Project title — h3 inside the section body, left-aligned (the
            section's h2 is centered above). text-xl on mobile bumps to
            text-2xl on desktop, matching the h3 cascade used elsewhere. */}
        <h3 className="text-xl font-semibold text-ink md:text-2xl">
          Computational Pathology of Fibroblasts in the Basal Cell
          Carcinoma Tumor Microenvironment
        </h3>

        <div className="mt-4 space-y-4">
          <p>
            The Scaffa Lab's first active project establishes a
            reproducible computational pathology workflow using basal
            cell carcinoma whole-slide images annotated by clinical
            collaborators. Although the
            current dataset is basal cell carcinoma, the broader goal
            is to build a generalizable tissue-image analysis pipeline
            that can be adapted to other biological contexts, including
            future studies of senescence markers in tissue. In this
            project, we are asking whether the nuclear morphology,
            spatial organization, and other image-derived features of
            fibroblast-like cells in the tumor microenvironment are
            associated with tumor-level outcomes, such as immune cell
            infiltration and other expert-defined tumor features.
          </p>
          <p>
            The pipeline converts annotated H&amp;E whole-slide images
            into structured single-cell datasets, with each nucleus
            represented by segmentation, approximate cell-type
            classification, morphology, spatial location, and
            relationship to pathologist-defined tumor and peritumor
            regions. It uses HoVer-Net trained on PanNuke for
            nucleus-level instance segmentation and approximate
            cell-type classification, CellProfiler for quantitative
            feature extraction, and QuPath-associated annotation files
            to connect image-derived data to dermatopathologist-defined
            regions. Whole-slide images and annotations are provided by
            clinical collaborators in Aperio XML or GeoJSON format and
            harmonized through custom scripts.
          </p>
          <p>
            These features can then be analyzed with supervised and
            unsupervised machine learning to identify patterns in
            fibroblast-like stromal cells and test whether image-derived
            features predict tumor-level phenotypes.
          </p>
          <p>
            This project is exploratory and hypothesis-generating. It
            does not claim that nuclear morphology fully defines
            fibroblast state. Instead, it asks whether quantitative
            features extracted from standard H&amp;E images can reveal
            reproducible patterns in the tumor microenvironment. Beyond
            the BCC dataset, the project establishes computational
            infrastructure that can be adapted to future tissue-based
            studies, including IHC/IF-based imaging.
          </p>
        </div>

        {/* Team & collaborators block — thin top border separates it from
            the project description so it reads as project metadata, not
            additional prose. Each line is self-labeling via bold inline. */}
        <div className="mt-8 space-y-3 border-t border-ink/10 pt-6">
          <p>
            <strong>Project lead.</strong> Alejandro Scaffa, PhD.
          </p>
          <p>
            <strong>Graduate students.</strong> Harshil Bhojwani and Khue
            "Cherry" Pham, Roux Institute, Northeastern University.
          </p>
          <p>
            <strong>Senior collaborators.</strong> Michael Wan, PhD,
            Institute for Experiential AI, Northeastern University;
            Candice Byers, PhD, Roux Institute, Northeastern University.
          </p>
          <p>
            <strong>Clinical collaborators.</strong> Melissa Gill, MD,
            and Hamza Tariq, MD, Dermatopathology, SUNY Downstate Health
            Sciences University.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* SECTION 4 — Future Directions                                     */}
      {/* The dry-lab → wet-dry trajectory. Strategic, not list-of-assays.  */}
      {/* ---------------------------------------------------------------- */}
      <Section title="Future Directions">
        <div className="space-y-4">
          <p>
            The long-term goal of the Scaffa Lab is to grow into a
            computational and experimental biology program for studying
            senescence heterogeneity in fibroblasts and other
            stress-responsive cell populations.
          </p>
          <p>
            The lab's central strategy is to use single-cell RNA-seq
            analysis to identify candidate senescent or senescence-like
            cell states, then test and interpret those states through
            tractable experimental models, quantitative imaging, and
            biochemical assays. In vitro fibroblast models, including
            replicative and stress-induced senescence, will provide a
            controlled system for comparing senescent, transitional, and
            stress-resistant cell states.
          </p>
          <p>
            As the lab grows, tissue-based analysis using H&amp;E, IHC,
            IF, and single-cell datasets will help connect
            these experimentally defined cell states to real tissue
            contexts. The current BCC project contributes to this
            broader direction by building computational pathology
            workflows for nuclear morphology, spatial context, and
            fibroblast-like stromal populations.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* SECTION 5 — Students and Collaborations                           */}
      {/* Outreach for students + external collaborators. Closes with a    */}
      {/* pointer to /people for the lab directory.                         */}
      {/* ---------------------------------------------------------------- */}
      <Section title="Students and Collaborations">
        <div className="space-y-4">
          <p>
            Students interested in the Scaffa Lab can contribute to
            computational and quantitative biology projects involving
            dataset curation, Python-based analysis, image analysis,
            machine learning, single-cell RNA-seq workflows, and
            biological interpretation. Projects are designed to be
            modular, well documented, and appropriate for students
            developing computational skills alongside biological
            reasoning.
          </p>
          <p>
            I also welcome collaborations with groups studying cellular
            senescence, fibroblast biology, tumor microenvironment
            biology, histology image analysis, IHC/IF imaging, or
            single-cell RNA-seq. These collaborations are especially
            useful when biological questions can be paired with existing
            datasets, annotated tissue images, or tractable experimental
            systems.
          </p>
          <p>
            Lab members and collaborators are listed on the{" "}
            <a href="/people">People</a> page. For inquiries, please
            contact me by email.
          </p>
        </div>
      </Section>
    </>
  );
}
