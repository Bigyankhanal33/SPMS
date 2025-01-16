import React, { useState } from "react";
import AddNoticeForm from "./AddNoticeForm";

const AddNoticePage: React.FC = () => {
  const [notices, setNotices] = useState<{
    id: number;
    title: string;
    description: string;
    date: string;
  }[]>([]);

  const addNotice = (notice: { id: number; title: string; description: string; date: string }) => {
    setNotices([...notices, notice]);
  };

  return (
    <div className="flex">
      <div className="flex-grow">
        <main className="p-6 bg-gray-100 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">Add New Notice</h3>
          <AddNoticeForm addNotice={addNotice} />
          <div className="mt-8">
            <a href="/">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">
                Back to Front Page
              </button>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddNoticePage;
