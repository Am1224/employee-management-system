<<<<<<< HEAD
import React, { useState } from "react";

const CreateTask = ({ addTask, employees }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !assignedTo) return;
    addTask({
      taskTitle: title,
      taskDescription: desc,
      category,
      assignedTo,
      completed: false,
      failed: false,
      active: true,
      newTask: false,
    });
    setTitle("");
    setDesc("");
    setCategory("");
    setAssignedTo("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="text-black"
      />
      <input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Task Description"
        className="text-black"
      />
      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="text-black"
      />
      <select
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        className="bg-gray-800 text-white px-2 py-1 rounded"
        required
      >
        <option value="" disabled>
          Please select an employee
        </option>
        {employees && employees.length > 0 ? (
          employees.map((emp, idx) => (
            <option key={idx} value={emp.name || emp.email || idx}>
              {emp.name || emp.email || `Employee ${idx + 1}`}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No employees available
          </option>
        )}
      </select>
      <button type="submit" className="bg-blue-600 px-3 py-1 rounded">
        Add Task
      </button>
    </form>
  );
};

=======
import React, { useState } from "react";

const CreateTask = ({ addTask, employees }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !assignedTo) return;
    addTask({
      taskTitle: title,
      taskDescription: desc,
      category,
      assignedTo,
      completed: false,
      failed: false,
      active: true,
      newTask: false,
    });
    setTitle("");
    setDesc("");
    setCategory("");
    setAssignedTo("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="text-black"
      />
      <input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Task Description"
        className="text-black"
      />
      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="text-black"
      />
      <select
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        className="bg-gray-800 text-white px-2 py-1 rounded"
        required
      >
        <option value="" disabled>
          Please select an employee
        </option>
        {employees && employees.length > 0 ? (
          employees.map((emp, idx) => (
            <option key={idx} value={emp.name || emp.email || idx}>
              {emp.name || emp.email || `Employee ${idx + 1}`}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No employees available
          </option>
        )}
      </select>
      <button type="submit" className="bg-blue-600 px-3 py-1 rounded">
        Add Task
      </button>
    </form>
  );
};

>>>>>>> fe3a3eb2d16ea3a8f3be2ceca003d99dec90c76b
export default CreateTask;