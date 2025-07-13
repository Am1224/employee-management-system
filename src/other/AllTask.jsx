import React from "react";

const AllTask = ({ tasks }) => (
  <div className="mt-6 bg-gray-800 p-6 rounded-lg text-white shadow">
    <h2 className="text-lg font-semibold mb-4">All Tasks</h2>
    <ul className="space-y-2">
      {tasks.map((task, idx) => (
        <li key={idx} className="bg-gray-700 p-3 rounded">
          <div>
            <strong>{task.taskTitle}</strong> - {task.taskDescription}
          </div>
          <div className="text-sm text-gray-300">
            Category: {task.category || "N/A"}
            <span className="ml-4 text-yellow-400 font-semibold">
              Assigned to: {task.assignedTo || "Unassigned"}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default AllTask;