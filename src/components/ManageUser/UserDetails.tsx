import React from "react";

interface User {
  id: number;
  name: string;
  role: "student" | "teacher";
  faculty: string;
  fatherName: string;
  phone: string;
  email: string;
  image: string;
  course?: string | null;
  year?: number | null;
}

interface UserDetailsProps {
  user: User | null;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  if (!user) {
    return (
      <div className="p-4 text-gray-500">Hover over a user to see details</div>
    );
  }

  const detailsByRole = {
    student: {
      title: "Academic Summary",
      details: [
        { label: "Course", value: user.course || "N/A" },
        { label: "Year", value: user.year || "N/A" },
        { label: "GPA", value: 3.8 },
      ],
    },
    teacher: {
      title: "Professional Summary",
      details: [
        { label: "Teaching Since", value: 2015 + (user.id % 5) },
        { label: "Expertise", value: "Artificial Intelligence" },
        { label: "Department", value: user.faculty || "N/A" },
      ],
    },
  };

  const roleDetails = detailsByRole[user.role];

  return (
    <div className="relative p-4 shadow-md rounded-md bg-white">
      <div className="absolute left-0 top-0 h-full border-l-4 border-blue-500"></div>

      <h2 className="text-lg font-bold mb-4">User Details</h2>
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={user.image}
          alt={user.name}
          className="rounded-full h-20 w-20 border border-gray-300"
        />
        <div>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>
      </div>

      <p>
        <strong>Father's Name:</strong> {user.fatherName}
      </p>
      <p>
        <strong>Faculty:</strong> {user.faculty}
      </p>

      <div className="mt-4">
        <h3 className="text-md font-bold">{roleDetails.title}</h3>
        {roleDetails.details.map((detail, index) => (
          <p key={index}>
            <strong>{detail.label}:</strong> {detail.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
