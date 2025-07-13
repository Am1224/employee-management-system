import React, { useState } from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  const [tasks, setTasks] = useState(data.tasks);

  const markAsComplete = (idx) => {
    setTasks(tasks =>
      tasks.map((task, i) =>
        i === idx
          ? { ...task, completed: true, active: false, failed: false, newTask: false }
          : task
      )
    );
  };

  const markAsFailed = (idx) => {
    setTasks(tasks =>
      tasks.map((task, i) =>
        i === idx
          ? { ...task, failed: true, active: false, completed: false, newTask: false }
          : task
      )
    );
  };

  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
      {tasks.map((elem, idx) => {
        if (elem.active)
          return (
            <AcceptTask
              key={idx}
              data={elem}
              onComplete={() => markAsComplete(idx)}
              onFail={() => markAsFailed(idx)}
            />
          );
        if (elem.newTask)
          return (
            <NewTask
              key={idx}
              data={elem}
              onComplete={() => markAsComplete(idx)}
              onFail={() => markAsFailed(idx)}
            />
          );
        if (elem.completed)
          return <CompleteTask key={idx} data={elem} />;
        if (elem.failed)
          return <FailedTask key={idx} data={elem} />;
        return null;
      })}
    </div>
  );
};

export default TaskList;