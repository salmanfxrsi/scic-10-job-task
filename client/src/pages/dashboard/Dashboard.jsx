import { useQuery } from "@tanstack/react-query";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import DoneTask from "./DoneTask";
import InProgressTask from "./InProgressTask";
import ToDoTask from "./ToDoTask";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loading from "../../components/Loading";

const Dashboard = () => {
  const axiosPublic = useAxiosPublic();

  const { data: tasks, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/tasks");
      return data;
    },
  });

  if (isLoading) return <Loading />;

  const toDoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "inProgress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="py-24 grid lg:grid-cols-3 grid-cols-1 container mx-auto gap-12 justify-between">
        <ToDoTask tasks={toDoTasks}></ToDoTask>
        <InProgressTask tasks={inProgressTasks}></InProgressTask>
        <DoneTask tasks={doneTasks}></DoneTask>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Dashboard;
