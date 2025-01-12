import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditNoticePage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get notice ID from route params
  const navigate = useNavigate();

  const [notice, setNotice] = useState<{
    id: number;
    title: string;
    publishDate: string;
    dueDate: string;
    category: string;
    visibility: string;
    content: string;
  } | null>(null);

  useEffect(() => {
    // Simulated data fetch
    const mockNotices = [
      {
        id: 1,
        title: "Exam Notice For BIM",
        publishDate: "2025-08-20",
        dueDate: "2025-09-01",
        category: "Important",
        visibility: "Everyone",
        content: "Exam will take place on September 1.",
      },
      {
        id: 2,
        title: "Exam Notice For BIM",
        publishDate: "2023-08-20",
        dueDate: "2024-07-01",
        category: "Important",
        visibility: "Everyone",
        content: "Exam will take place on July 1.",
      },
    ];

    // Fetch notice by ID
    const selectedNotice = mockNotices.find((notice) => notice.id === parseInt(id || ""));
    if (selectedNotice) setNotice(selectedNotice);
  }, [id]);

  const handleSave = () => {
    console.log("Updated Notice:", notice);
    navigate("/"); // Navigate back to notice table after saving
  };

  if (!notice) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Edit Notice</h2>
      <form>
        <div className="mb-4">
          <label className="block font-medium">Title</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={notice.title}
            onChange={(e) => setNotice({ ...notice, title: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Due Date</label>
          <input
            type="date"
            className="w-full border px-3 py-2 rounded"
            value={notice.dueDate}
            onChange={(e) => setNotice({ ...notice, dueDate: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Category</label>
          <select
            className="w-full border px-3 py-2 rounded"
            value={notice.category}
            onChange={(e) => setNotice({ ...notice, category: e.target.value })}
          >
            <option value="Important">Important</option>
            <option value="General">General</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Visibility</label>
          <select
            className="w-full border px-3 py-2 rounded"
            value={notice.visibility}
            onChange={(e) => setNotice({ ...notice, visibility: e.target.value })}
          >
            <option value="Everyone">Everyone</option>
            <option value="Students">Students</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Content</label>
          <textarea
            className="w-full border px-3 py-2 rounded"
            rows={5}
            value={notice.content}
            onChange={(e) => setNotice({ ...notice, content: e.target.value })}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditNoticePage;
