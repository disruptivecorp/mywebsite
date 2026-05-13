// Publications data — kept as a typed array so the Publications page and
// the Home page's "Selected Publications" preview can both render from
// the same source. Adding a new paper means appending one entry here.
//
// Order is reverse-chronological (most recent first).

export interface Publication {
  title: string;
  // Author string as displayed — uses bracketed truncation ("[...]")
  // for long author lists.
  authors: string;
  venue: string;
  year: number;
  // Publisher link (PubMed / journal page / DOI landing).
  link: string;
  // Local PDF in /public/files. Relative URL — Vite serves /files/* directly.
  pdf?: string;
}

export const publications: Publication[] = [
  {
    title:
      "Timing and cell specificity of senescence drives postnatal lung development and injury",
    authors: "H Yao, J Wallace, AL Peterson, A Scaffa, [...], and PA Dennery",
    venue: "Nature Communications",
    year: 2023,
    link: "https://www.nature.com/articles/s41467-023-35985-4",
    pdf: "/files/Nature Communications - Yao Scaffa.pdf",
  },
  {
    title:
      "Identification of heme oxygenase-1 as a putative DNA-binding protein",
    authors: "A Scaffa, GA Tollefson, [...], and PA Dennery",
    venue: "Antioxidants",
    year: 2022,
    link: "https://www.mdpi.com/2076-3921/11/11/2135",
    pdf: "/files/HO1 is a DNA binding Protein - Scaffa.pdf",
  },
  {
    title:
      "Single-cell transcriptomics reveals lasting changes in the lung cellular landscape into adulthood after neonatal hyperoxic exposure",
    authors:
      "A Scaffa, H Yao, N Oulhen, J Wallace, AL Peterson, [...], and PA Dennery",
    venue: "Redox Biology",
    year: 2021,
    link: "https://www.sciencedirect.com/science/article/pii/S2213231721002500",
    pdf: "/files/Single Cell Transcriptomics - Scaffa.pdf",
  },
  {
    title:
      "Short exposure to hyperoxia causes cultured lung epithelial cell mitochondrial dysregulation and alveolar simplification in mice",
    authors:
      "D Garcia, JF Carr, F Chan, AL Peterson, KA Ellis, A Scaffa, AJ Ghio, H Yao, and PA Dennery",
    venue: "Pediatric Research",
    year: 2021,
    link: "https://pubmed.ncbi.nlm.nih.gov/33144707/",
    pdf: "/files/Garcia Scaffa - Pediatric Research.pdf",
  },
  {
    title:
      "Hyperoxia causes senescence and increases glycolysis in cultured lung epithelial cells",
    authors: "A Scaffa, AL Peterson, JF Carr, D Garcia, H Yao, and PA Dennery",
    venue: "Physiological Reports",
    year: 2021,
    link: "https://physoc.onlinelibrary.wiley.com/doi/full/10.14814/phy2.14839",
    pdf: "/files/Hyperoxia causes senescence and increases glycolysis - Scaffa.pdf",
  },
  {
    title:
      "Heme Oxygenase-1 Supports Mitochondrial Energy Production and Electron Transport Chain Activity in Cultured Lung Epithelial Cells",
    authors:
      "JF Carr, D Garcia, A Scaffa, AL Peterson, AJ Ghio, and PA Dennery",
    venue: "International Journal of Molecular Sciences",
    year: 2020,
    link: "https://www.mdpi.com/1422-0067/21/18/6941",
    pdf: "/files/Carr Scaffa - Int J Mol Sci.pdf",
  },
];

// Google Scholar profile — shown as the "see all" link beneath the list.
export const googleScholarUrl =
  "https://scholar.google.com/citations?user=UsU8mJcAAAAJ&hl=en&oi=ao";
