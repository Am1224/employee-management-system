<<<<<<< HEAD
import React from 'react';

const Header = ({ changeUser, data }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-emerald-700 text-white rounded-xl shadow">
      <h1 className="text-xl font-bold">
        {data?.firstName ? `Welcome, ${data.firstName}` : 'Admin Dashboard'}
      </h1>
      <button
        onClick={() => {
          localStorage.removeItem('loggedInUser');
          changeUser(null);
        }}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
=======
import React from 'react';

const Header = ({ changeUser, data }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-emerald-700 text-white rounded-xl shadow">
      <h1 className="text-xl font-bold">
        {data?.firstName ? `Welcome, ${data.firstName}` : 'Admin Dashboard'}
      </h1>
      <button
        onClick={() => {
          localStorage.removeItem('loggedInUser');
          changeUser(null);
        }}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
>>>>>>> fe3a3eb2d16ea3a8f3be2ceca003d99dec90c76b
