import PropTypes from "prop-types";
import useAxiosPublic from "../hooks/useAxiosPublic";
import EditTaskModal from "./modals/EditTaskModal";
import { useState } from "react";

const TaskCard = ({ task, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosPublic = useAxiosPublic();

  // task delete functionality
  const handleDelete = async (id) => {
    try {
      await axiosPublic.delete(`/tasks/${id}`);
      refetch();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="card text-black w-96 mt-6 bg-white">
      <div className="card-body">
        <h2 className="card-title">{task?.title}</h2>
        <p>{task?.description}</p>
        <div className="card-actions justify-end">
          <button onClick={() => setIsOpen(true)} className="btn btn-primary">
            Edit Now
          </button>
          <button
            onClick={() => handleDelete(task._id)}
            className="btn bg-red-500 text-white"
          >
            Delete Now
          </button>
        </div>
      </div>
      <EditTaskModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        refetch={refetch}
        task={task}
      ></EditTaskModal>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object,
  refetch: PropTypes.func,
};

export default TaskCard;
