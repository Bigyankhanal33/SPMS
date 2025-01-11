import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
  role: "student" | "teacher";
  faculty: string;
  fatherName: string;
  phone: string;
  email: string;
  image: string;
}

interface UserTableProps {
  onUserHover: (user: User | null) => void;
}

const UserTable: React.FC<UserTableProps> = ({ onUserHover }) => {
  const navigate = useNavigate();

  const users: User[] = [...Array(10)].map((_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    role: index % 2 === 0 ? "student" : "teacher", // Alternate between student and teacher
    faculty: `Faculty ${index + 1}`,
    fatherName: `Father Name ${index + 1}`,
    phone: `98072695${index + 10}`,
    email: `user${index + 1}@example.com`,
    image: index % 2 === 0 
      ? `https://randomuser.me/api/portraits/men/${index + 1}.jpg` // Student image
      : `https://randomuser.me/api/portraits/men/${index + 2}.jpg`, // Teacher image
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const [roleFilter, setRoleFilter] = useState<"student" | "teacher" | "all">("all");
  const usersPerPage = 7;

  // Filter users based on selected role
  const filteredUsers = roleFilter === "all" 
    ? users 
    : users.filter((user) => user.role === roleFilter);

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-bold mb-4">User Table</h2>
      
      {/* Role Filter */}
      <div className="mb-4">
        <label className="mr-2">Choose Role:</label>
        <select 
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value as "student" | "teacher" | "all")}
          className="p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
      </div>

      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3 border-b">Image</th>
            <th className="p-3 border-b">Name</th>
            <th className="p-3 border-b">Role</th>
            <th className="p-3 border-b">Faculty</th>
            <th className="p-3 border-b">Father Name</th>
            <th className="p-3 border-b">Phone No</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr
              key={user.id}
              className="hover:bg-gray-100 transition-colors cursor-pointer"
              onMouseEnter={() => onUserHover(user)}
              onMouseLeave={() => onUserHover(null)}
              onClick={() => navigate(`/user/${user.id}`)}
            >
              <td className="p-3 border-b">
                <img
                  src={user.image}
                  alt={`${user.name}`}
                  className="rounded-full h-10 w-10"
                />
              </td>
              <td className="p-3 border-b">{user.name}</td>
              <td className="p-3 border-b">{user.role}</td>
              <td className="p-3 border-b">{user.faculty}</td>
              <td className="p-3 border-b">{user.fatherName}</td>
              <td className="p-3 border-b">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserTable;
