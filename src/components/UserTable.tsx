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
  age?: number; // Optional if not always provided
  gender?: string; // Optional if not always provided
}


interface UserTableProps {
  onUserHover: (user: User | null) => void;
}

const UserTable: React.FC<UserTableProps> = ({ onUserHover }) => {
  const navigate = useNavigate();

  const users: User[] = [
    {
      id: 1,
      name: "John Doe",
      faculty: "BCA",
      fatherName: "Robert Doe",
      phone: "9807269520",
      email: "johndoe@example.com",
      image: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with actual image URL if available
    },
    {
      id: 2,
      name: "Jane Smith",
      faculty: "BIM",
      fatherName: "Michael Smith",
      phone: "9807269521",
      email: "janesmith@example.com",
      image: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with actual image URL if available
    },
    {
      id: 3,
      name: "Alice Johnson",
      faculty: "BCA",
      fatherName: "Mark Johnson",
      phone: "9807269522",
      email: "alicejohnson@example.com",
      image: "https://randomuser.me/api/portraits/men/3.jpg", // Replace with actual image URL if available
    },
    {
      id: 4,
      name: "Bob Brown",
      faculty: "BIM",
      fatherName: "Steven Brown",
      phone: "9807269523",
      email: "bobbrown@example.com",
      image: "https://randomuser.me/api/portraits/men/4.jpg", // Replace with actual image URL if available
    },
    {
      id: 5,
      name: "Charlie Wilson",
      faculty: "BCA",
      fatherName: "Paul Wilson",
      phone: "9807269524",
      email: "charliewilson@example.com",
      image: "https://randomuser.me/api/portraits/men/5.jpg", // Replace with actual image URL if available
    },
    {
      id: 6,
      name: "Daisy Miller",
      faculty: "BIM",
      fatherName: "Richard Miller",
      phone: "9807269525",
      email: "daisymiller@example.com",
      image: "https://randomuser.me/api/portraits/men/6.jpg", // Replace with actual image URL if available
    },
    {
      id: 7,
      name: "Ethan Taylor",
      faculty: "BCA",
      fatherName: "Samuel Taylor",
      phone: "9807269526",
      email: "ethantaylor@example.com",
      image: "https://randomuser.me/api/portraits/men/7.jpg", // Replace with actual image URL if available
    },
    {
      id: 8,
      name: "Fiona Anderson",
      faculty: "BIM",
      fatherName: "Peter Anderson",
      phone: "9807269527",
      email: "fionaanderson@example.com",
      image: "https://randomuser.me/api/portraits/men/8.jpg", // Replace with actual image URL if available
    },
     
  ];
  

  return (
    <div className="bg-white shadow-md  rounded p-4">
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
              onClick={() => navigate(`/admin/user/${user.id}`, { state: { user } })}

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
