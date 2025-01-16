import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserData {
  name: string;
  email: string;
  password: string;
  phone: string;
  image?: File | null;
  age?: string;
  fatherName?: string;
  motherName?: string;
  semesterOrYear?: string;
  class?: string;
  gender?: string;
  qualification?: string;
  experiences?: string;
}

export default function AddUserPage() {
  const navigate = useNavigate();
  const [isStudent, setIsStudent] = useState(true);
  const [formData, setFormData] = useState<UserData>({
    name: "",
    email: "",
    password: "",
    phone: "",
    image: null,
    age: "",
    fatherName: "",
    motherName: "",
    semesterOrYear: "",
    class: "",
    gender: "",
    qualification: "",
    experiences: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/manageuser");
  };

  const renderSemesterOrYearOptions = () => {
    if (formData.class === "BBS") {
      return Array.from({ length: 4 }, (_, i) => (
        <option key={i + 1} value={`${i + 1}`}>
          {i + 1} Year
        </option>
      ));
    }
    return Array.from({ length: 8 }, (_, i) => (
      <option key={i + 1} value={`${i + 1}`}>
        {i + 1} Semester
      </option>
    ));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">{isStudent ? "Add Student" : "Add Teacher"}</h2>
      <div className="mb-4">
        <button
          onClick={() => setIsStudent(true)}
          className={`px-4 py-2 rounded ${isStudent ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Add Student
        </button>
        <button
          onClick={() => setIsStudent(false)}
          className={`px-4 py-2 rounded ml-4 ${!isStudent ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Add Teacher
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32">
            <div className="w-full h-full rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              {formData.image ? (
                <img
                  src={URL.createObjectURL(formData.image) || "/placeholder.svg"}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="text-center">
                  <span className="block text-sm text-gray-500">Add</span>
                </div>
              )}
              <input
                type="file"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept="image/*"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          {isStudent && (
            <div className="space-y-2">
              <label htmlFor="age" className="block text-sm font-medium">Age</label>
              <input
                id="age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          {isStudent && (
            <>
              <div className="space-y-2">
                <label htmlFor="fatherName" className="block text-sm font-medium">Father name</label>
                <input
                  id="fatherName"
                  name="fatherName"
                  type="text"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="motherName" className="block text-sm font-medium">Mother name</label>
                <input
                  id="motherName"
                  name="motherName"
                  type="text"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="class" className="block text-sm font-medium">Class</label>
                <select
                  id="class"
                  name="class"
                  value={formData.class}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select class</option>
                  <option value="BCA">BCA</option>
                  <option value="BBA">BIM</option>
                  <option value="BBS">BBS</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="semesterOrYear" className="block text-sm font-medium">
                  {formData.class === "BBS" ? "Year" : "Semester"}
                </label>
                <select
                  id="semesterOrYear"
                  name="semesterOrYear"
                  value={formData.semesterOrYear}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">
                    Select {formData.class === "BBS" ? "Year" : "Semester"}
                  </option>
                  {renderSemesterOrYearOptions()}
                </select>
              </div>
            </>
          )}

          {!isStudent && (
            <>
              <div className="space-y-2">
                <label htmlFor="gender" className="block text-sm font-medium">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="qualification" className="block text-sm font-medium">Qualification</label>
                <input
                  id="qualification"
                  name="qualification"
                  type="text"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="experiences" className="block text-sm font-medium">Experiences</label>
                <input
                  id="experiences"
                  name="experiences"
                  type="text"
                  value={formData.experiences}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </>
          )}

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add {isStudent ? "student" : "teacher"}
        </button>
      </form>
    </div>
  );
}
