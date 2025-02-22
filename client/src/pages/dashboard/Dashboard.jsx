import { useQuery } from "@tanstack/react-query";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import DoneTask from "./DoneTask";
import InProgressTask from "./InProgressTask";
import ToDoTask from "./ToDoTask";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loading from "../../components/Loading";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks", user.email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/tasks?email=${user.email}`);
      return data;
    },
  });

  if (isLoading) return <Loading />;

  const toDoTasks = tasks.filter((task) => task.status === "toDo");
  const inProgressTasks = tasks.filter((task) => task.status === "inProgress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="py-24 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 container mx-auto gap-12 justify-between min-h-screen">
        <ToDoTask tasks={toDoTasks} refetch={refetch}></ToDoTask>
        <InProgressTask
          tasks={inProgressTasks}
          refetch={refetch}
        ></InProgressTask>
        <DoneTask tasks={doneTasks} refetch={refetch}></DoneTask>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Dashboard;
