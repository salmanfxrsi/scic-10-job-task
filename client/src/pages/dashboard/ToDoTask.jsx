import { useState } from "react";
import PropTypes from "prop-types";
import AddTaskModal from "../../components/modals/AddTaskModal";

const ToDoTask = ({ tasks }) => {
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
        <div key={task._id} className="card text-black w-96 mt-6 bg-white">
          <div className="card-body">
            <h2 className="card-title">{task.title}</h2>
            <p>{task.description}</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
      {/* Add Task Modal */}
      <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen}></AddTaskModal>
    </div>
  );
};

ToDoTask.propTypes = {
  tasks: PropTypes.array,
};

export default ToDoTask;
