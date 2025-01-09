import React from "react";

interface User {
  id: number;
  name: string;
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
    return <div className="p-4 text-gray-500">Hover over a user to see details</div>;
  }

  return (
    

    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">User Details</h2>
      <img
        src={user.image}
        alt={`${user.name}`}
        className="rounded-full h-20 w-20 mb-4"
      />
      <p>
        <strong>Name:</strong> {user.name}
      </p>
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
    </div>
  );
};

export default UserDetails;
