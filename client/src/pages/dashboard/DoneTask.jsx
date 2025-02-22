import PropTypes from "prop-types";
import TaskCard from "../../components/taskCard";

const DoneTask = ({ tasks }) => {
  return (
    <div className="bg-primary p-12 w-full">
      <h1 className="text-white font-bold text-2xl text-center mb-12">
        Completed Task ({tasks.length})
      </h1>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task}></TaskCard>
      ))}
    </div>
  );
};

DoneTask.propTypes = {
  tasks: PropTypes.array,
};

export default DoneTask;
