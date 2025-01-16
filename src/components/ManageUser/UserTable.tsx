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
  course?: string | null; // Course field for students
  year?: number | null;   // Academic year for students
}

interface UserTableProps {
  onUserHover: (user: User | null) => void;
}

const UserTable: React.FC<UserTableProps> = ({ onUserHover }) => {
  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    console.log(`Edit User with ID: ${id}`);
    navigate(`/editUser/${id}`);
  };
  

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      onDeleteNotice(id);
    }
  }; 
  const onDeleteNotice = (id: number) => {
    setUsers((prevUsers: User[]) => prevUsers.filter((user: User) => user.id !== id));
  };

  // Dummy data with course and year for students
  const [users, setUsers] = useState<User[]>([...Array(20)].map((_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    role: index % 2 === 0 ? "student" : "teacher",
    faculty: `Faculty ${index + 1}`,
    fatherName: `Father Name ${index + 1}`,
    phone: `98072695${index + 10}`,
    email: `user${index + 1}@example.com`,
    image: `https://randomuser.me/api/portraits/${index % 2 === 0 ? "men" : "women"}/${index + 1}.jpg`,
    course: index % 2 === 0 ? ["BIM", "BCA", "BBS"][index % 3] : null,
    year: index % 2 === 0 ? 2072 + (index % 10) : null,
  })));

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState<"all" | "student" | "teacher">("all");
  const [selectedCourse, setSelectedCourse] = useState<"all" | "BIM" | "BCA" | "BBS">("all");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  

  const years = Array.from({ length: 10 }, (_, index) => 2072 + index);
  const usersPerPage = 7;

  // Filter users based on search query, role, course, and year
  const filteredUsers = users.filter((user) => {
    const matchesRole = selectedRole === "all" || user.role === selectedRole;
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCourse =
      selectedCourse === "all" || user.role === "teacher" || (user.course && user.course === selectedCourse);
    const matchesYear =
      !selectedYear || user.role === "teacher" || (user.year && user.year.toString() === selectedYear);
  
    return matchesRole && matchesSearch && matchesCourse && matchesYear;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handleRowClick = (userId: number) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const handleRowDoubleClick = (userId: number) => {
    navigate(`/portfolio/user/${userId}`);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(currentUsers.map((user) => user.id));
    }
    setSelectAll(!selectAll);
  };

  const handleExport = () => {
    const selectedData = users.filter((user) =>
      selectedUsers.includes(user.id)
    );

    if (selectedData.length === 0) {
      alert("No users selected to export.");
      return;
    }

    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Image,ID,Name,Role,Faculty,Father Name,Phone,Email,Course,Year"]
        .concat(
          selectedData.map(
            (user) =>
              `${user.image},${user.id},${user.name},${user.role},${user.faculty},${user.fatherName},${user.phone},${user.email},${user.course || "N/A"},${user.year || "N/A"}`
          )
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "selected_users.csv");
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
  };

  const handleAdd = () => {
    navigate("/addUser");
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-bold mb-4">User Table</h2>

      {/* Toolbar Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div>
          <select
            value={selectedRole}
            onChange={(e) =>
              setSelectedRole(e.target.value as "all" | "student" | "teacher")
            }
            className="p-2 border rounded bg-white"
          >
            <option value="all">All</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <div className="flex-grow">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>

        <button
          onClick={handleExport}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Export
        </button>

        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add +
        </button>
      </div>

      <div className="flex mb-4">
        <select
          value={selectedCourse}
          onChange={(e) =>
            setSelectedCourse(e.target.value as "all" | "BIM" | "BCA" | "BBS")
          }
          className="p-2 border rounded bg-blue-600 text-white"
        >
          <option value="all">Course</option>
          <option value="BIM">BIM</option>
          <option value="BCA">BCA</option>
          <option value="BBS">BBS</option>
        </select>

        <div className="ml-2">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="p-2 border rounded bg-blue-600 text-white"
          >
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3 border-b">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th className="p-3 border-b">Image</th>
            <th className="p-3 border-b">Name</th>
            <th className="p-3 border-b">Role</th>
            <th className="p-3 border-b">Faculty</th>
            <th className="p-3 border-b">Father Name</th>
            <th className="p-3 border-b">Phone</th>
            <th className="p-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr
              key={user.id}
              className={`cursor-pointer ${
                selectedUsers.includes(user.id)
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleRowClick(user.id)}
              onDoubleClick={() => handleRowDoubleClick(user.id)}
              onMouseEnter={() => onUserHover(user)}
              onMouseLeave={() => onUserHover(null)}
            >
              <td className="p-3 border-b">
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleRowClick(user.id)}
                />
              </td>
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
              <td className="p-3 border-b">
                <button
                  onClick={() => handleEdit(user.id)}
                  className="px-2 py-1 mr-2 bg-blue-700 text-white rounded hover:bg-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="px-2 py-1 bg-red-700 text-white rounded hover:bg-red-800"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserTable;
