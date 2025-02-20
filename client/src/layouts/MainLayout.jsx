import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <header>
        <Navbar></Navbar>
      </header>
      {/* Main Outlet */}
      <main>
        <Outlet></Outlet>
      </main>
      {/* Footer */}
      <footer></footer>
    </div>
  );
};

export default MainLayout;
