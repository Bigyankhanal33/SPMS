import React from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/Layout";

interface User {
  id: number;
  name: string;
  faculty: string;
  fatherName: string;
  phone: string;
  email: string;
  image: string;
}

const UserDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Dummy user data for the example
  const user: User = {
    id: parseInt(id || "0"),
    name: `User ${id}`,
    faculty: "BIM",
    fatherName: `Father ${id}`,
    phone: `98072695${parseInt(id || "0") + 20}`,
    email: `user${id}@example.com`,
    image: "https://via.placeholder.com/150", // Larger dummy image
  };

  return (
    <Layout>
    
    <div className="p-8">
        
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <div className="flex">
        <img
          src={user.image}
          alt={`${user.name}`}
          className="rounded-full h-32 w-32 mr-8"
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
          <p>
            <strong>Father's Name:</strong> {user.fatherName}
          </p>
          <p>
            <strong>Faculty:</strong> {user.faculty}
          </p>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default UserDetailPage;
