
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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

const EditUser: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  

  // Fetch user details (simulate API call)
  useEffect(() => {
    const fetchUser = async () => {
      // Simulated fetch with dummy data
      const users: User[] = [...Array(20)].map((_, index) => ({
        id: index + 1,
        name: `User ${index + 1}`,
        role: index % 2 === 0 ? "student" : "teacher", // Type is ensured to match the User interface
        faculty: `Faculty ${index + 1}`,
        fatherName: `Father Name ${index + 1}`,
        phone: `98072695${index + 10}`,
        email: `user${index + 1}@example.com`,
        image: `https://randomuser.me/api/portraits/${
          index % 2 === 0 ? "men" : "women"
        }/${index + 1}.jpg`,
        course: index % 2 === 0 ? ["BIM", "BCA", "BBS"][index % 3] : null,
        year: index % 2 === 0 ? 2072 + (index % 10) : null,
      }));
      const selectedUser = users.find((u) => u.id === parseInt(userId || "0"));
      setUser(selectedUser || null);
      setLoading(false);
    };
    fetchUser();
  }, [userId]);

  const handleSave = () => {
    console.log("Updated user data:", user);
    alert("User details updated successfully!");
    navigate("/"); // Navigate back to the user list after saving
  };

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found!</p>;

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-bold mb-4">Edit User: {user.name}</h2>
      <div className="mb-4">
        <label className="block font-bold mb-2">Name</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2">Role</label>
        <select
          value={user.role}
          onChange={(e) =>
            setUser({ ...user, role: e.target.value as "student" | "teacher" })
          }
          className="p-2 border rounded w-full"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2">Faculty</label>
        <input
          type="text"
          value={user.faculty}
          onChange={(e) => setUser({ ...user, faculty: e.target.value })}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2">Phone</label>
        <input
          type="text"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
          className="p-2 border rounded w-full"
        />
      </div>
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Save
      </button>
    </div>
  );
};

export default EditUser;
