import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';

// Dummy Backend Logic
let dummyFollowUps = [
  { type: 'sms', label: 'SMS' },
  { type: 'wait', label: 'Wait - 5 days' },
  { type: 'email', label: 'Email' },
  { type: 'wait', label: 'Wait - 2 days' },
];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const getFollowUps = async () => {
  await delay(200);
  return { status: 'ok', data: dummyFollowUps };
};

const saveFollowUps = async (newData) => {
  await delay(200);
  dummyFollowUps = newData;
  return { status: 'ok' };
};

// Icons Map
const iconMap = {
  sms: <BsFillChatDotsFill className="text-green-500 text-xl" />,
  email: <MdEmail className="text-green-500 text-xl" />,
  wait: <BiTimeFive className="text-blue-500 text-xl" />,
};

// Main Component
const NewLeads = () => {
  const [steps, setSteps] = useState([]);
  const [newStepType, setNewStepType] = useState('sms');
  const [newLabel, setNewLabel] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await getFollowUps();
      if (res.status === 'ok') setSteps(res.data);
    };
    fetchData();
  }, []);

  const handleDelete = (index) => {
    const updated = [...steps];
    updated.splice(index, 1);
    setSteps(updated);
    saveFollowUps(updated);
  };

  const handleAddStep = () => {
    if (!newLabel.trim()) return alert('Label is required');
    const updated = [...steps, { type: newStepType, label: newLabel }];
    setSteps(updated);
    setNewLabel('');
    saveFollowUps(updated);
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-md shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Leads Settings</h2>

        <div className="bg-blue-50 rounded-md p-6">
          <h3 className="text-md font-semibold text-gray-700 mb-4">
            Follow-Up Strategy <span className="text-red-500">*</span>
          </h3>

          <div className="flex flex-col items-center space-y-6 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative">
                {index !== 0 && <div className="w-px h-6 bg-gray-300 absolute -top-6" />}

                <div className="flex items-center bg-white shadow-sm rounded-md px-4 py-2 space-x-4 w-64">
                  <div>{iconMap[step.type]}</div>
                  <div className="text-gray-700 font-medium text-sm">{step.label}</div>
                  <div className="flex items-center space-x-2 ml-auto">
                    <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(index)}>
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add New Step */}
          <div className="mt-6 w-full max-w-md mx-auto">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Add New Step</h4>
            <div className="flex items-center space-x-2">
              <select
                className="border rounded px-2 py-1"
                value={newStepType}
                onChange={(e) => setNewStepType(e.target.value)}
              >
                <option value="sms">SMS</option>
                <option value="email">Email</option>
                <option value="wait">Wait</option>
              </select>
              <input
                type="text"
                placeholder="Label"
                className="border rounded px-2 py-1 flex-1"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded flex items-center"
                onClick={handleAddStep}
              >
                <FaPlus className="mr-1" /> Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLeads;
