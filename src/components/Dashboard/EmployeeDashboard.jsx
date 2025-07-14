import Header from "../Header";
// ✅ Correct relative path:
// ❌ Might be wrong:
import TaskList from "../Tasklist/TaskList";



const EmployeeDashboard = ({ changeUser, data }) => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen text-white'>
      <Header changeUser={changeUser} data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;