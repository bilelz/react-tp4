import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function BlogLayout() {
  return (
    <div>
      <Header />
      <Outlet /> {/* Ici s'affiche <Home />, <About />, etc. */}
      <Footer />
    </div>
  );
}
