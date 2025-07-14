// === src/utils/localStorage.js ===
const employees = [
  {
    id: 1,
    firstName: 'Amitesh kumar',
    email: 'e@e.com',
    password: '123',
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Update website',
        taskDescription: 'Revamp the homepage design',
        taskDate: '2024-10-12',
        category: 'Design',
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: 'Client meeting',
        taskDescription: 'Discuss project requirements',
        taskDate: '2024-10-10',
        category: 'Meeting',
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: 'Fix bugs',
        taskDescription: 'Resolve bugs reported in issue tracker',
        taskDate: '2024-10-14',
        category: 'Development',
      },
    ],
  },
  {
    id: 2,
    firstName: 'Sneha',
    email: 'employee2@example.com',
    password: '123',
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: 'Database optimization',
        taskDescription: 'Optimize queries for better performance',
        taskDate: '2024-10-11',
        category: 'Database',
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: 'Design new feature',
        taskDescription: 'Create mockups for the new feature',
        taskDate: '2024-10-09',
        category: 'Design',
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: 'admin@me.com',
    password: '123',
  },
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const admin = JSON.parse(localStorage.getItem('admin')) || [];
  return { employees, admin };
};
