import PropTypes from 'prop-types';

const InProgressTask = ({ tasks }) => {
  return (
    <div className="bg-primary p-12 w-full">
      <h1 className="text-white font-bold text-2xl text-center mb-12">
        In Progress Task ({tasks.length})
      </h1>
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
    </div>
  );
};

InProgressTask.propTypes = {
  tasks: PropTypes.array,
}

export default InProgressTask;
