import React from "react";

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


interface UserDetailsProps {
  user: User | null;
}

const HoverUserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  if (!user) {
    return <div className="p-4 text-gray-500">Hover over a user to see details</div>;
  }

  return (
    <div className="p-6 flex flex-col justify-between rounded-lg shadow-md  h-full  mx-auto text-center">
      {/* User ID */}
      <p className="text-sm text-gray-500 font-semibold mb-4">{user.id}</p>

      {/* Profile Image */}
      <img
        src={user.image}
        alt={`${user.name}`}
        className="rounded-full h-24 w-24 mx-auto mb-4"
      />

      {/* User Name and Faculty */}
      <h2 className="text-xl font-semibold text-gray-800 mb-1">{user.name}</h2>
      <p className="text-sm text-gray-500 mb-4">{user.faculty}</p>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          📚
        </button>
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          📞
        </button>
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          ✉️
        </button>
      </div>

      {/* About Section */}
      <div className="text-left">
        <p className="text-sm mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-sm mb-2">
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className="text-sm mb-2">
          <strong>Father's Name:</strong> {user.fatherName}
        </p>
        <p className="text-sm mb-2">
          <strong>Age:</strong> {user.age}
        </p>
        <p className="text-sm mb-2">
          <strong>Gender:</strong> {user.gender}
        </p>
      </div>

      {/* People from the same class */}
      <div className="mt-4">
        <p className="text-sm text-gray-500 mb-2">People from the same class</p>
        <div className="flex justify-center items-center space-x-2">
          {/* Replace with actual user avatars */}
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="h-8 w-8 bg-gray-200 rounded-full"
            ></div>
          ))}
          <p className="text-sm text-gray-400">+12 more</p>
        </div>
      </div>
    </div>
  );
};

export default HoverUserDetails;
