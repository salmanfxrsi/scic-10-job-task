import { useState } from "react";
import PropTypes from "prop-types";
import AddTaskModal from "../../components/modals/AddTaskModal";
import TaskCard from "../../components/taskCard";

const ToDoTask = ({ tasks, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-primary p-12 w-full">
      <div className="flex justify-between">
        <h1 className="text-white font-bold text-2xl text-center mb-12">
          ToDo Task ({tasks.length})
        </h1>
        <button onClick={() => setIsOpen(true)} className="btn">
          Add Task
        </button>
      </div>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task}></TaskCard>
      ))}
      {/* Add Task Modal */}
      <AddTaskModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        refetch={refetch}
      ></AddTaskModal>
    </div>
  );
};

ToDoTask.propTypes = {
  tasks: PropTypes.array,
  refetch: PropTypes.func,
};

export default ToDoTask;
