import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import PromoterProfile from './PromoterProfile';
export default function Promotercustumtool({ onClose }) {
  const [activeTab, setActiveTab] = useState('sync');
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(70);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.name.endsWith('.csv')) {
      setFile(droppedFile);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.name.endsWith('.csv')) {
      setFile(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
    setUploadProgress(0);
  };

  const renderTabContent = () => {
    switch (activeTab) {
        case 'manual':
            return (
              <form className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email ID</label>
                  <input
                    type="email"
                    placeholder="Enter Email ID"
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
          
                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-md hover:from-blue-600 hover:to-blue-500"
                  >
                    Save
                  </button>
                </div>
              </form>
            );
      case 'csv':
        return (
          <div className="p-6">
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center text-gray-600 cursor-pointer"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="text-4xl text-blue-500">⤴️</div>
                <p className="font-medium">Drag and drop files here</p>
                <p>or</p>
                <label className="cursor-pointer text-blue-600 border border-blue-500 px-4 py-1 rounded-md hover:bg-blue-50">
                  Browse Files
                  <input type="file" accept=".csv" className="hidden" onChange={handleFileChange} />
                </label>
              </div>
            </div>

            {file && (
              <div className="mt-6 flex items-center justify-between bg-gray-100 rounded-md p-3">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://img.icons8.com/fluency/24/csv.png"
                    alt="csv icon"
                    className="w-6 h-6"
                  />
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(0)}KB</p>
                  </div>
                </div>
                <div className="text-right flex items-center space-x-2">
                  <p className="font-medium text-gray-600">{uploadProgress}%</p>
                  <button onClick={removeFile} className="text-red-500 text-xl font-bold">&times;</button>
                </div>
              </div>
            )}

            <div className="flex justify-end mt-6 space-x-3">
              <button className="px-6 py-2 bg-gray-200 rounded-md text-gray-700">Cancel</button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Save</button>
            </div>
          </div>
        );
      case 'sync':
        return (
          <div className="flex flex-col items-center justify-center text-center border-dashed border rounded p-6 m-4">
            <p className="text-gray-600 mb-4">
              Automatically sync your customer data from your CRM using Zapier
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Connect with Zapier
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-white/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[500px] shadow-lg relative z-10">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          <IoClose size={24} />
        </button>

        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold">Choose How You Want to Add Customers</h2>
        </div>

        <div className="flex border-b px-6">
          {['Add Manually', 'Upload CSV File', 'Sync with Zapier'].map((label, index) => {
            const value = label.toLowerCase().includes('manual')
              ? 'manual'
              : label.toLowerCase().includes('csv')
              ? 'csv'
              : 'sync';
            return (
              <button
                key={index}
                onClick={() => setActiveTab(value)}
                className={`px-4 py-2 text-sm ${
                  activeTab === value
                    ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div>{renderTabContent()}</div>
      </div>
    </div>
  );
}
