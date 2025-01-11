import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  Calendar,
  Bell,
  Clipboard,
  Settings,
  User,
  LogOut,
} from "lucide-react";

const Layout: React.FC = () => {
  const location = useLocation();

  // Map routes to header titles
  const routeTitles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/meeting": "Meeting",
    "/manageuser": "Manage User",
    "/notice": "Notice",
    "/result": "Result",
    "/settings": "Settings",
    "/portfolio": "Portfolio",
  };

  // Get the title based on the current route
  const currentTitle = routeTitles[location.pathname] || "Welcome";

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/6 bg-[#EDF2F6] text-blue-700 flex flex-col">
        <div className="p-3 text-center font-bold text-xl">
          <img src="/logo.png" alt="Logo" className="w-238 h-127" />
        </div>
        <nav className="flex flex-col p-3 gap-3">
          <Link to="/dashboard" className="flex items-center gap-2 p-2 rounded hover:bg-blue-700 hover:text-white text-blue-700">
            <Home className="w-5 h-5" /> Dashboard
          </Link>
          <Link to="/meeting" className="flex items-center gap-2 p-2 rounded hover:bg-blue-700 hover:text-white text-blue-700">
            <Calendar className="w-5 h-5" /> Meeting
          </Link>
          <Link to="/manageuser" className="flex items-center gap-2 p-2 rounded hover:bg-blue-700 hover:text-white text-blue-700">
            <Users className="w-5 h-5" /> Manage User
          </Link>
          <Link to="/notice" className="flex items-center gap-2 p-2 rounded hover:bg-blue-700 hover:text-white text-blue-700">
            <Bell className="w-5 h-5" /> Notice
          </Link>
          <Link to="/result" className="flex items-center gap-2 p-2 rounded hover:bg-blue-700 hover:text-white text-blue-700">
            <Clipboard className="w-5 h-5" /> Result
          </Link>
          <Link to="/settings" className="flex items-center gap-2 p-2 rounded hover:bg-blue-700 hover:text-white text-blue-700">
            <Settings className="w-5 h-5" /> Settings
          </Link>
          <Link to="/portfolio" className="flex items-center gap-2 p-2 rounded hover:bg-blue-700 hover:text-white text-blue-700">
            <User className="w-5 h-5" /> Portfolio
          </Link>
        </nav>
        <div className="flex pl-3 align-middle">
          <Link to="/" className="hover:bg-blue-700 flex hover:text-white text-blue-700 p-2 rounded">
            <LogOut /> Log Out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header with dynamic title */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">{currentTitle}</h1>
        </header>
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
