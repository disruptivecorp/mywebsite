# Personal Website (Parallax Portfolio)

A simple, didactic personal site built with **vanilla HTML + CSS**. It uses a **parallax hero**, clean **section cards** over a dimmed background image, and a **pill-style navigation**. The goal is to keep the code easy to read, extend, and grade for a web dev class.

---

## Live Structure (Concept)

- **Header / Nav (pills)** over the hero image
- **Parallax Hero** (name + tagline)
- **Section Cards** (About, CV Highlights, Publications, Projects, Contact)
- **Sticky Footer** at the bottom

Background image shows around/behind cards for a subtle parallax feel.

---

## Features

- **Parallax hero** (`.parallax`, `.parallax-content`)
- **Global dimmed background** via `body::before`
- **Sticky footer** using a flexbox layout (`<main>` grows, footer sits at bottom)
- **Pill navigation** with a brand “AS” button and link pills
- **Section pattern** with and without images:
  - Grid layout for **media + text** (`.section__body`)
  - Text-only mode (`.section__body--single`)
- **Image fit utilities**:
  - `.fit-cover` for portraits (may crop to fill)
  - `.fit-contain` for figures/diagrams (no cropping)
- **Mobile responsive**: sections stack on narrow screens

---

## File Tree

