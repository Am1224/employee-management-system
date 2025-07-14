<<<<<<< HEAD
import React from 'react';

const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-orange-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='mt-6 flex gap-2'>
        <button
          className='bg-green-600 rounded font-medium py-1 px-2 text-xs'
          onClick={onComplete}
        >
          Mark as Complete
        </button>
        <button
          className='bg-red-600 rounded font-medium py-1 px-2 text-xs'
          onClick={onFail}
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

=======
import React from 'react';

const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-orange-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='mt-6 flex gap-2'>
        <button
          className='bg-green-600 rounded font-medium py-1 px-2 text-xs'
          onClick={onComplete}
        >
          Mark as Complete
        </button>
        <button
          className='bg-red-600 rounded font-medium py-1 px-2 text-xs'
          onClick={onFail}
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

>>>>>>> fe3a3eb2d16ea3a8f3be2ceca003d99dec90c76b
export default AcceptTask;