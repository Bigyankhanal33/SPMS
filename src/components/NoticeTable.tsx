import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NoticeTable: React.FC = () => {
  const navigate = useNavigate();

  // Initialize state for notices
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "Exam Notice For BIM",
      publishDate: "2025-08-20",
      dueDate: "2025-09-01",
      category: "Important",
      visibility: "Everyone",
    },
    {
      id: 2,
      title: "Exam Notice For BIM",
      publishDate: "2023-08-20",
      dueDate: "2024-07-01",
      category: "Important",
      visibility: "Everyone",
    },
  ]);

  // Determine the status of each notice based on the current date
  const updatedNotices = notices.map((notice) => {
    const currentDate = new Date();
    const dueDate = new Date(notice.dueDate);
    const status = dueDate >= currentDate ? "Available" : "Finished";
    return { ...notice, status };
  });

  const handleAddNoticeClick = () => {
    navigate("/notices"); // Navigate to the Add Notice page
  };

  const handleEdit = (id: number) => {
    navigate(`/edit/${id}`); // Navigate to the edit page with the notice ID
  };

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this notice?");
    if (confirmDelete) {
      // Filter out the deleted notice
      setNotices((prevNotices) => prevNotices.filter((notice) => notice.id !== id));
    }
  };

  return (
    <>
      <h2 className="text-xl font-semibold">
        
        <button
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          onClick={handleAddNoticeClick}
        >
          Add Notice
        </button>
      </h2>
      <div className="p-6 bg-white rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold">All Notices ({updatedNotices.length})</h4>
          <button className="px-4 py-2 text-sm border rounded-lg text-gray-700 hover:bg-gray-100">
            Archived Notices
          </button>
        </div>
        {updatedNotices.length === 0 ? (
          <div className="text-gray-500 text-center py-4">
            No notices available.
          </div>
        ) : (
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-gray-200 text-left">ID</th>
                <th className="px-4 py-2 border border-gray-200 text-left">Title</th>
                <th className="px-4 py-2 border border-gray-200 text-left">Publish Date</th>
                <th className="px-4 py-2 border border-gray-200 text-left">Due Date</th>
                <th className="px-4 py-2 border border-gray-200 text-left">Category</th>
                <th className="px-4 py-2 border border-gray-200 text-left">Visibility</th>
                <th className="px-4 py-2 border border-gray-200 text-left">Action</th>
                <th className="px-4 py-2 border border-gray-200 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {updatedNotices.map((notice) => (
                <tr key={notice.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-200">{notice.id}</td>
                  <td className="px-4 py-2 border border-gray-200">{notice.title}</td>
                  <td className="px-4 py-2 border border-gray-200">{notice.publishDate}</td>
                  <td className="px-4 py-2 border border-gray-200">{notice.dueDate}</td>
                  <td className="px-4 py-2 border border-gray-200">
                    <span className="px-2 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded">
                      {notice.category}
                    </span>
                  </td>
                  <td className="px-4 py-2 border border-gray-200">{notice.visibility}</td>
                  <td className="px-4 py-2 border border-gray-200">
                    <button
                      className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 mr-2"
                      onClick={() => handleEdit(notice.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                      onClick={() => handleDelete(notice.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td className="px-4 py-2 border border-gray-200">
                    <span
                      className={`px-2 py-1 text-sm font-medium rounded ${
                        notice.status === "Available"
                          ? "text-green-700 bg-green-100"
                          : "text-gray-700 bg-gray-200"
                      }`}
                    >
                      {notice.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default NoticeTable;
