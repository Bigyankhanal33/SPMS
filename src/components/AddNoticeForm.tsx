import React, { useState } from "react";

interface Notice {
  id: number;
  title: string;
  description: string;
  date: string;
  image?: string;
  category: string;
  visibility: string;
}

const AddNoticeForm: React.FC<{ addNotice: (notice: Notice) => void }> = ({ addNotice }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    image: "",
    category: "Important",
    visibility: "Everyone",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNotice({ id: Date.now(), ...formData });
    setFormData({
      title: "",
      description: "",
      date: "",
      image: "",
      category: "Important",
      visibility: "Everyone",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter notice title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
          Description
        </label>
        <textarea
          id="description"
          rows={4}
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter notice description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
          Date
        </label>
        <input
          type="date"
          id="date"
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
          Category
        </label>
        <select
          id="category"
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="Important">Important</option>
          <option value="General">General</option>
          <option value="Event">Event</option>
        </select>
      </div>
      <div>
        <label htmlFor="visibility" className="block text-gray-700 font-medium mb-2">
          Visibility
        </label>
        <select
          id="visibility"
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.visibility}
          onChange={handleChange}
          required
        >
          <option value="Everyone">Everyone</option>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
        </select>
      </div>
      <div>
        <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleImageChange}
        />
        {formData.image && (
          <img
            src={formData.image}
            alt="Preview"
            className="mt-4 w-32 h-32 object-cover rounded-md shadow-md"
          />
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add Notice
      </button>
    </form>
  );
};

export default AddNoticeForm;
