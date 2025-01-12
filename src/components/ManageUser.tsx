import React, { useState } from "react";
import UserTable from "../components/UserTable";
import HoverUserDetails from "./HoverUserDetails";


interface User {
  id: number;
  name: string;
  faculty: string;
  fatherName: string;
  phone: string;
  email: string;
  image: string;
}

const ManageUser: React.FC = () => {
  const [hoveredUser, setHoveredUser] = useState<User | null>(null);

  return (
  
      <div className="flex gap-6">
        {/* User Table Section */}
        <div className="w-3/4">
          <UserTable onUserHover={setHoveredUser} />
        </div>

        {/* User Details Section */}
        <div className="w-1/4 bg-white rounded-xl border-2 border-black ">
         <HoverUserDetails user={hoveredUser}/>
          
        </div>
      </div>
    
  );
};

export default ManageUser;