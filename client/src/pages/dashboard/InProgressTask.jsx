import PropTypes from "prop-types";
import TaskCard from "../../components/taskCard";

const InProgressTask = ({ tasks, refetch }) => {
  return (
    <div className="bg-primary p-12 w-full">
      <h1 className="text-white font-bold text-2xl text-center mb-12">
        In Progress Task ({tasks.length})
      </h1>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} refetch={refetch}></TaskCard>
      ))}
    </div>
  );
};

InProgressTask.propTypes = {
  tasks: PropTypes.array,
  refetch: PropTypes.func,
};

export default InProgressTask;
