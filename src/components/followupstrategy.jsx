import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const FollowUpStrategy = () => {
  const [steps, setSteps] = useState([
    { type: "SMS", value: "", iconColor: "green" },
    { type: "WAIT", value: "5", iconColor: "blue" },
    { type: "EMAIL", value: "", iconColor: "yellow" },
    { type: "WAIT", value: "2", iconColor: "blue" },
    { type: "SMS", value: "", iconColor: "green" },
    { type: "WAIT", value: "3", iconColor: "blue" },
    { type: "SMS", value: "", iconColor: "green" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleDelete = (index) => {
    setSteps((prev) => prev.filter((_, i) => i !== index));
  };

  const openEditModal = (index) => {
    setEditIndex(index);
    setEditValue(steps[index].value);
    setIsModalOpen(true);
  };

  const handleModalSave = () => {
    const updatedSteps = [...steps];
    updatedSteps[editIndex].value = editValue;
    setSteps(updatedSteps);
    setIsModalOpen(false);
    setEditIndex(null);
    setEditValue("");
  };

  const iconMap = {
    SMS: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 10l-2 2m0 0l2 2m-2-2h4m5-3h2a1 1 0 011 1v3h1m-3 0h1v3a1 1 0 01-1 1h-2m-3-6h2L15 10l2 2m-2 2h4"
      />
    ),
    EMAIL: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
      />
    ),
    WAIT: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  };

  return (
    <div className="w-full px-4 py-6 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Follow-Up Strategy *</h2>

      <div className="flex flex-col space-y-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 border rounded-md bg-gray-50"
          >
            <div className="flex items-center">
              <div
                className={`bg-${step.iconColor}-100 text-${step.iconColor}-500 rounded-full p-1 mr-2`}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {iconMap[step.type]}
                </svg>
              </div>
              <span className="text-gray-700 text-sm">
                {step.type === "WAIT" ? `Wait: ${step.value} days` : step.type}
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => openEditModal(index)}
                className="text-blue-500 hover:text-blue-700 focus:outline-none"
              >
                <FaEdit className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                <FaTrashAlt className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for editing */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[400px]">
            <h3 className="text-lg font-semibold mb-4">Edit Step</h3>
            <label className="block text-sm mb-2 text-gray-700">
              {steps[editIndex].type === "WAIT"
                ? "Days to Wait:"
                : "Optional Value (e.g. email subject):"}
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              placeholder={
                steps[editIndex].type === "WAIT" ? "Enter days" : "Enter value"
              }
            />
            <div className="flex justify-end mt-4 space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleModalSave}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FollowUpStrategy;
