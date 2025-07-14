<<<<<<< HEAD
import React, { useState, useContext } from "react";
import Header from "../Header";
import CreateTask from "../../other/CreateTask";
import AllTask from "../../other/AllTask";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = ({ changeUser }) => {
  const [tasks, setTasks] = useState([]);
  const [userData] = useContext(AuthContext); // Assuming userData is your employee list

  const addTask = (task) => setTasks((prev) => [...prev, task]);

  return (
    <div className='h-screen w-full p-7 bg-gray-900 text-white'>
      <Header changeUser={changeUser} />
      <CreateTask addTask={addTask} employees={userData || []} />
      <AllTask tasks={tasks} />
    </div>
  );
};

=======
import React, { useState, useContext } from "react";
import Header from "../Header";
import CreateTask from "../../other/CreateTask";
import AllTask from "../../other/AllTask";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = ({ changeUser }) => {
  const [tasks, setTasks] = useState([]);
  const [userData] = useContext(AuthContext); // Assuming userData is your employee list

  const addTask = (task) => setTasks((prev) => [...prev, task]);

  return (
    <div className='h-screen w-full p-7 bg-gray-900 text-white'>
      <Header changeUser={changeUser} />
      <CreateTask addTask={addTask} employees={userData || []} />
      <AllTask tasks={tasks} />
    </div>
  );
};

>>>>>>> fe3a3eb2d16ea3a8f3be2ceca003d99dec90c76b
export default AdminDashboard;