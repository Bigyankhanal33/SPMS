import React from "react";

interface User {
  id: number;
  name: string;
  role: "student" | "teacher"; // Added role to determine user type
  faculty: string;
  fatherName: string;
  phone: string;
  email: string;
  image: string;
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

  // Conditional Rendering for Students and Teachers
  const studentDetails = {
    course: "BIM",
    semester: "8th",
    gpa: 4.0,
  };

  const teacherDetails = {
    degree: "Ph.D. in Computer Science",
    experience: "10 years",
    specialization: "Artificial Intelligence",
  };

  return (
    <div className="relative p-4 shadow-md rounded-md">
      {/* Add left border dynamically matching the height */}
      <div className="absolute left-0 top-0 h-full border-l-2 border-blue-500"></div>

      <h2 className="text-lg font-bold mb-4">User Details</h2>
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={user.image}
          alt={`${user.name}`}
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

      {/* Conditional Content Based on Role */}
      {user.role === "student" && (
        <div className="mt-4">
          <h3 className="text-md font-bold">Academic Summary</h3>
          <p>
            <strong>Course:</strong> {studentDetails.course}
          </p>
          <p>
            <strong>Semester:</strong> {studentDetails.semester}
          </p>
          <p>
            <strong>GPA:</strong> {studentDetails.gpa}
          </p>
        </div>
      )}

      {user.role === "teacher" && (
        <div className="mt-4">
          <h3 className="text-md font-bold">Professional Summary</h3>
          <p>
            <strong>Degree:</strong> {teacherDetails.degree}
          </p>
          <p>
            <strong>Experience:</strong> {teacherDetails.experience}
          </p>
          <p>
            <strong>Specialization:</strong> {teacherDetails.specialization}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;