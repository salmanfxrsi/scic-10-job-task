import { useState } from "react";
import AddTaskModal from "../../components/modals/AddTaskModal";

const ToDoTask = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>TODO</th>
            <th></th>
            <th></th>
            <th className="">
              <button
                className="btn btn-primary"
                onClick={() => setIsOpen(true)}
              >
                Add Task
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="bg-base-200">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
      {/* Add Task Modal */}
      <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen}></AddTaskModal>
    </div>
  );
};

export default ToDoTask;
