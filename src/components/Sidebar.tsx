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
  
  const Sidebar = () => {
    return (
      <div className="w-[18.875rem] font-roboto h-screen bg-[#EDF2F6] fixed top-0 left-0 flex flex-col">
        {/* Logo Section */}
        <div className="p-4">
          <div className="text-center">
            <img
              src="/Images/logo.png"
              alt="Logo"
              className="mx-auto w-[14.875rem] h-[7.57rem]"
            />
          </div>
        </div>
  
        {/* Navigation Items */}
        <div className="flex-1 px-8 overflow-y-auto">
          <ul className="space-y-4">
            <li>
              <div className="flex items-center gap-3 w-full p-2 rounded-md group hover:bg-[#3279A5] hover:text-white">
                <Home className="text-[#3279A5] group-hover:text-white" />
                <a
                  href="#dashboard"
                  className="block w-full text-[#3279A5] group-hover:text-white"
                >
                  Dashboard
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3 w-full p-2 rounded-md group hover:bg-[#3279A5] hover:text-white">
                <Calendar className="text-[#3279A5] group-hover:text-white" />
                <a
                  href="#meeting"
                  className="block w-full text-[#3279A5] group-hover:text-white"
                >
                  Meeting
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3 w-full p-2 rounded-md group hover:bg-[#3279A5] hover:text-white">
                <Users className="text-[#3279A5] group-hover:text-white" />
                <a
                  href="#manage-user"
                  className="block w-full text-[#3279A5] group-hover:text-white"
                >
                  Manage User
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3 w-full p-2 rounded-md group hover:bg-[#3279A5] hover:text-white">
                <Bell className="text-[#3279A5] group-hover:text-white" />
                <a
                  href="#notice"
                  className="block w-full text-[#3279A5] group-hover:text-white"
                >
                  Notice
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3 w-full p-2 rounded-md group hover:bg-[#3279A5] hover:text-white">
                <Clipboard className="text-[#3279A5] group-hover:text-white" />
                <a
                  href="#result"
                  className="block w-full  text-[#3279A5] group-hover:text-white"
                >
                  Result
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3 w-full p-2 rounded-md group hover:bg-[#3279A5] hover:text-white">
                <Settings className="text-[#3279A5] group-hover:text-white" />
                <a
                  href="#setting"
                  className="block w-full text-[#3279A5] group-hover:text-white"
                >
                  Setting
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3 w-full p-2 rounded-md group hover:bg-[#3279A5] hover:text-white">
                <User className="text-[#3279A5] group-hover:text-white" />
                <a
                  href="#portfolio"
                  className="block w-full text-[#3279A5] group-hover:text-white"
                >
                  Portfolio
                </a>
              </div>
            </li>
          </ul>
        </div>
  
        {/* Logout Button */}
        <div className="p-4 mt-auto">
          <button className="w-full flex items-center justify-center gap-2 p-2 bg-[#3279A5] text-white rounded-md hover:bg-[#245f7e]">
            <LogOut />
            Logout
          </button>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  