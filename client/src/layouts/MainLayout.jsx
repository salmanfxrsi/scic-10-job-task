import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <header>
        <Navbar></Navbar>
      </header>
      {/* Main Outlet */}
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      {/* Footer */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
