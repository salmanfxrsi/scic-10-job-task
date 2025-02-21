import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import DoneTask from "./DoneTask";
import InProgressTask from "./InProgressTask";
import ToDoTask from "./ToDoTask";

const Dashboard = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="h-screen py-24 flex flex-col lg:flex-row container mx-auto gap-8 justify-between">
        <ToDoTask></ToDoTask>
        <InProgressTask></InProgressTask>
        <DoneTask></DoneTask>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Dashboard;
