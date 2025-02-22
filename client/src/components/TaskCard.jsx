import PropTypes from "prop-types";

const TaskCard = ({ task }) => {
  return (
    <div key={task._id} className="card text-black w-96 mt-6 bg-white">
      <div className="card-body">
        <h2 className="card-title">{task.title}</h2>
        <p>{task.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Edit Now</button>
          <button className="btn bg-red-500 text-white">Delete Now</button>
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object,
};

export default TaskCard;
