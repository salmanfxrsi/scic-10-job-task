import { Dialog, Field, Label, Input, Textarea } from "@headlessui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const AddTaskModal = ({ isOpen, setIsOpen, refetch }) => {
  const [selected, setSelected] = useState("todo");
  const axiosPublic = useAxiosPublic();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const status = selected;
    const time = new Date();
    const task = { title, description, status, time };
    try {
      const result = await axiosPublic.post("/tasks", task);
      if (result.data.acknowledged) {
        form.reset();
        setIsOpen(false);
        refetch();
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <form
            onSubmit={handleSubmit}
            className="w-lg space-y-4 border bg-white p-12"
          >
            {/* <DialogTitle className="font-bold">Deactivate account</DialogTitle> */}
            <Field>
              <Label className="font-semibold text-sm">Title</Label>
              <Input
                type="text"
                name="title"
                className="pl-4 py-2 rounded-md border w-full mt-2 "
              />
            </Field>
            <Field>
              <Label className="font-semibold text-sm">Description</Label>
              <Textarea
                type="text"
                name="description"
                className="pl-4 py-2 rounded-md border w-full mt-2 "
              />
            </Field>
            <div className="items-center gap-4">
              <label htmlFor="options" className="font-semibold text-sm">
                Select an option:
              </label>
              <select
                id="options"
                className="p-2 border border-gray-300 rounded-md w-full mt-2"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                <option defaultValue={selected} disabled>
                  Select an option
                </option>
                <option value="toDo">ToDo</option>
                <option value="inProgress">In Progress</option>
                <option value="done">Done</option>
              </select>
              {/* {selected && <p className="text-lg">You selected: {selected}</p>} */}
            </div>
            <div className="flex gap-4 mt-6">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="btn bg-red-500 text-white"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Add Now
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  );
};

AddTaskModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  bookedSession: PropTypes.object,
  refetch: PropTypes.func,
};

export default AddTaskModal;
