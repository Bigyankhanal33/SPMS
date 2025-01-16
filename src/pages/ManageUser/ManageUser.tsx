import React, { useState } from "react";
import UserTable from "../../components/ManageUser/UserTable";
import UserDetails from "../../components/ManageUser/UserDetails";

interface User {
  id: number;
  name: string;
  role: "student" | "teacher"; // Added role field
  faculty: string;
  fatherName: string;
  phone: string;
  email: string;
  image: string;
}

const ManageUser: React.FC = () => {
  const [hoveredUser, setHoveredUser] = useState<User | null>(null);

  return (
    <div className="flex">
      {/* User Table Section */}
      <div className="w-3/4">
        <UserTable onUserHover={setHoveredUser} />
      </div>

      {/* User Details Section */}
      <div className="w-1/4 bg-gray-100">
        <UserDetails user={hoveredUser} />
      </div>
    </div>
  );
};

export default ManageUser;
