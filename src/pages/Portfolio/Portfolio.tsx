import React, { useState } from "react";
import { useParams } from "react-router-dom";

interface User {
  id: number;
  name: string;
  role: "student" | "teacher";
  faculty: string;
  fatherName: string;
  phone: string;
  email: string;
  image: string;
  course?: string | null; // Added course field
  year?: number | null;   // Added year field for students
}

const Portfolio: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Dummy data for users
  const users: User[] = [...Array(20)].map((_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    role: index % 2 === 0 ? "student" : "teacher",
    faculty: `Faculty ${index + 1}`,
    fatherName: `Father Name ${index + 1}`,
    phone: `98072695${index + 10}`,
    email: `user${index + 1}@example.com`,
    image: `https://randomuser.me/api/portraits/${index % 2 === 0 ? "men" : "women"}/${index + 1}.jpg`,
    course: index % 2 === 0 ? ["BIM", "BCA", "BBS"][index % 3] : ["BIM", "BCA", "BBS"][(index + 1) % 3],
    year: index % 2 === 0 ? 2072 + (index % 10) : null, // Only for students
  }));

  // Find the user based on the ID
  const user = users.find((user) => user.id === parseInt(id || "0"));

  // Tab state
  const [activeTab, setActiveTab] = useState("academic");

  if (!user) {
    return <p>User not found!</p>;
  }

  // Dummy data for each tab (dynamic based on the user role)
  const academicData = {
    course: user.course || "N/A",
    gpa: user.role === "student" ? 3.8 : "N/A",
    joined: user.role === "student" ? 2018 : "N/A",
    ended: user.role === "student" ? 2022 : "N/A",
    semester: user.role === "student" ? "8th" : "N/A",
    scholarship: user.role === "student" ? "Gold" : "N/A",
  };

  const teacherData = {
    teachingSince: 2015 + (user.id % 5), // Dynamic start year
    expertise: ["Data Structures", "Database Management", "Network Security"][user.id % 3],
    department: user.course || "N/A",
    publications: [
      `Research Paper on ${["AI", "Cybersecurity", "Cloud Computing"][user.id % 3]}`,
      `Guide to ${["Python", "Java", "React"][user.id % 3]}`,
    ],
  };

  const ccaData = {
    activities: user.role === "student" ? "Debate, Music Club, Football Team" : "Mentoring Coding Club",
    awards: user.role === "student" ? "Best Debater 2021" : "Best Faculty Mentor 2022",
  };

  const projectsData =
    user.role === "student"
      ? [
          { title: "E-commerce Website", year: 2021 },
          { title: "Library Management System", year: 2022 },
        ]
      : [
          { title: "University Management System", year: 2020 },
          { title: "Online Exam Portal", year: 2021 },
        ];

  const certificationsData =
    user.role === "student"
      ? [
          { name: "React Development", issuer: "Udemy", year: 2022 },
          { name: "Python for Data Science", issuer: "Coursera", year: 2021 },
        ]
      : [
          { name: "Advanced Teaching Techniques", issuer: "EdX", year: 2020 },
          { name: "Machine Learning", issuer: "Coursera", year: 2019 },
        ];

  const linkedInProfile = "https://linkedin.com/in/user-profile";

  return (
    <>
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* User Info */}
      <div className="flex items-center bg-white shadow-md p-6 rounded-md mb-6">
        <img
          src={user.image}
          alt={user.name}
          className="rounded-full h-32 w-32 mr-8"
        />
        <div className="font-roboto text-custom-18">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Father's Name:</strong> {user.fatherName}
          </p>
          <p>
            <strong>Faculty:</strong> {user.faculty}
          </p>
          <p>
            <strong>Role:</strong> {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
          </p>
          <p>
            <strong>Course:</strong> {user.course || "N/A"}
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-md rounded-md p-4">
        <div className="flex justify-between align-middle space-x-4 text-custom-18 font-serif border-b">
          <button
            className={`p-2 ${activeTab === "academic" ? "font-bold" : ""}`}
            onClick={() => setActiveTab("academic")}
          >
            {user.role === "student" ? "ACADEMIC" : "TEACHING DETAILS"}
          </button>
          <button
            className={`p-2 ${activeTab === "cca" ? "font-bold" : ""}`}
            onClick={() => setActiveTab("cca")}
          >
            CCA/ECA
          </button>
          <button
            className={`p-2 ${activeTab === "projects" ? "font-bold" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            PROJECTS
          </button>
          <button
            className={`p-2 ${activeTab === "certifications" ? "font-bold" : ""}`}
            onClick={() => setActiveTab("certifications")}
          >
            CERTIFICATIONS
          </button>
          <button
            className={`p-2 ${activeTab === "linkedin" ? "font-bold" : ""}`}
            onClick={() => setActiveTab("linkedin")}
          >
            LINKEDIN
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4 font-roboto text-custom-18">
          {activeTab === "academic" && user.role === "student" && (
            <div>
              <h3 className="font-bold mb-2">Academic Details</h3>
              <p>Course: {academicData.course}</p>
              <p>GPA: {academicData.gpa}</p>
              <p>Joined: {academicData.joined}</p>
              <p>Ended: {academicData.ended}</p>
              <p>Semester: {academicData.semester}</p>
              <p>Scholarship: {academicData.scholarship}</p>
            </div>
          )}

          {activeTab === "academic" && user.role === "teacher" && (
            <div>
              <h3 className="font-bold mb-2">Teaching Details</h3>
              <p>Teaching Since: {teacherData.teachingSince}</p>
              <p>Expertise: {teacherData.expertise}</p>
              <p>Department: {teacherData.department}</p>
              <h4 className="font-bold mt-2">Publications:</h4>
              <ul>
                {teacherData.publications.map((pub, index) => (
                  <li key={index}>{pub}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "cca" && (
            <div>
              <h3 className="font-bold mb-2">CCA/ECA Activities</h3>
              <p>{ccaData.activities}</p>
              <p>Awards: {ccaData.awards}</p>
            </div>
          )}

          {activeTab === "projects" && (
            <div>
              <h3 className="font-bold mb-2">Projects</h3>
              <ul>
                {projectsData.map((project, index) => (
                  <li key={index}>
                    {project.title} ({project.year})
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "certifications" && (
            <div>
              <h3 className="font-bold mb-2">Certifications</h3>
              <ul>
                {certificationsData.map((certification, index) => (
                  <li key={index}>
                    {certification.name} ({certification.year}) from{" "}
                    {certification.issuer}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "linkedin" && (
            <div>
              <h3 className="font-bold mb-2">LinkedIn Profile</h3>
              <a href={linkedInProfile} target="_blank" rel="noopener noreferrer">
                View LinkedIn Profile
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Portfolio;
