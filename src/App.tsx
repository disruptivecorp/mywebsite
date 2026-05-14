// App.tsx — defines the route table and the shared page layout.
//
// Every page renders inside <Layout> so the nav and footer don't need to
// be repeated in each page component (the old vanilla site copy-pasted
// these into every .html file — exactly the duplication React is good at
// eliminating).
//
// Nav order: Home, Scaffa Lab, Publications, People, Other Projects.
// CV is intentionally not its own tab — CV highlights + download live
// on the Home page so the nav stays lean.
// "People" replaces the old Contact tab; personal contact info lives
// on the Home page, and /people is reserved for the lab directory.
// "Other Projects" is just a label change in Nav.tsx — the route stays
// /projects so the URL remains short.
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Publications from "./pages/Publications";
import ScaffaLab from "./pages/ScaffaLab";
import Projects from "./pages/Projects";
import People from "./pages/People";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      {/* Listens to route changes and scrolls the window to the top on
          every navigation. Without this, React Router preserves the
          previous page's scroll position. */}
      <ScrollToTop />
      <Routes>
        {/* All pages share the same Layout wrapper. */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/scaffa-lab" element={<ScaffaLab />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/people" element={<People />} />
          {/* Catch-all for unknown URLs. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
