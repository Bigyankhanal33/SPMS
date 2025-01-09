import React from "react";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
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
    faculty: "BIM",
    fatherName: `Father ${index + 1}`,
    phone: `98072695${index + 20}`,
    email: `user${index + 1}@example.com`,
    image: "https://via.placeholder.com/50", // Dummy image URL
  }));

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-bold mb-4">User Table</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3 border-b">Image</th>
            <th className="p-3 border-b">Name</th>
            <th className="p-3 border-b">Faculty</th>
            <th className="p-3 border-b">Father Name</th>
            <th className="p-3 border-b">Phone No</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="hover:bg-gray-100 transition-colors cursor-pointer"
              onMouseEnter={() => onUserHover(user)}
              onMouseLeave={() => onUserHover(null)}
              onClick={() => navigate(`/user/${user.id}`)} // Navigate on click
            >
              <td className="p-3 border-b">
                <img
                  src={user.image}
                  alt={`${user.name}`}
                  className="rounded-full h-10 w-10"
                />
              </td>
              <td className="p-3 border-b">{user.name}</td>
              <td className="p-3 border-b">{user.faculty}</td>
              <td className="p-3 border-b">{user.fatherName}</td>
              <td className="p-3 border-b">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
