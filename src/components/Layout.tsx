import React from "react";
import { Link } from "react-router-dom";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-[#EDF2F6] text-white flex flex-col">
      
        <div className="p-4 text-center font-bold text-xl ">
        <img src="/logo.png"/>
        
        </div>
        <nav className="flex flex-col p-4 gap-4">
          <Link to="/dashboard" className="hover:bg-blue-700 hover:text-white text-blue-700 text p-2 rounded">
            Dashboard
          </Link>
          <Link to="/manageuser" className="hover:bg-blue-700  hover:text-white text-blue-700 p-2 rounded">
            Manage User
          </Link>
          <Link to="/settings" className="hover:bg-blue-700  hover:text-white text-blue-700 p-2 rounded">
            Settings
          </Link>
          <Link to="/" className="hover:bg-blue-700  hover:text-white text-blue-700 p-2 rounded">
            Log Out
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Manage User</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-200 rounded">
              🔔 Notification
            </button>
            <div className="flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="rounded-full w-10 h-10"
              />
              <span>Username</span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
