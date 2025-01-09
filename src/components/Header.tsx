import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Manage User</h1>
      <div className="flex items-center space-x-4">
        <button className="p-2 bg-gray-100 rounded-full">🔔</button>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <button className="p-2 bg-gray-100 rounded-full">⚙️</button>
      </div>
    </header>
  );
};

export default Header;
