// Layout — the shared frame every page renders inside.
// Flex column with Nav on top, page body in the middle (<Outlet/> is the
// React Router slot where the matched page renders), and Footer pinned
// at the bottom via flex-1 on the main area.
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      {/* flex-1 pushes the footer down when content is short. */}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
