import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const CreateNewCampaignLeadsSettings = () => {
    const nav = useNavigate();
    const handlesub = () =>{
        nav('/')
    }
  return (
    <div className="bg-white rounded-md shadow-md p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Create New Campaign</h2>
        <p className="text-sm text-gray-500">Create a new referral campaign in just a few steps.</p>
      </div>

      {/* Campaign Name */}
      <div className="mb-6">
        <label htmlFor="campaignName" className="block text-gray-700 text-sm font-medium mb-2">
          Campaign Name
        </label>
        <input
          type="text"
          id="campaignName"
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., Summer Referral Special"
        />
      </div>

      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-8 space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center text-sm font-bold">01</div>
          <span className="text-sm text-gray-700 font-medium">Promoter Settings</span>
        </div>
        <div className="h-px w-8 bg-gray-300"></div>
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">02</div>
          <span className="text-sm text-gray-700 font-medium">Leads Settings</span>
        </div>
      </div>

      {/* Leads Settings */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Leads Settings</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="rewardType" className="block text-gray-700 text-sm font-medium mb-2">
              Reward Type <span className="text-red-500">*</span>
            </label>
            <button
              id="rewardType"
              className="w-full px-4 py-2 text-sm font-semibold text-blue-500 bg-blue-50 border border-blue-200 rounded-md text-left"
            >
              Discount
            </button>
          </div>
          <div>
            <label htmlFor="rewardValue" className="block text-gray-700 text-sm font-medium mb-2">
              Reward Value <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="rewardValue"
              placeholder="e.g., 20%"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Lead Message */}
      <div className="mb-6">
        <label htmlFor="leadMessage" className="block text-gray-700 text-sm font-medium mb-2">
          Lead Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="leadMessage"
          placeholder="e.g., You've been invited! Sign up now and get 15% off your first order."
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
      </div>

      {/* Form Fields */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Form Fields <span className="text-red-500">*</span>
          <FaInfoCircle className="inline-block ml-1 text-gray-500 h-4 w-4 align-middle" />
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'Full Name', checked: true },
            { label: 'Email Address', checked: true },
            { label: 'Phone Number', checked: false },
            { label: 'Agree to Terms & Conditions & Opt-in', checked: true },
          ].map(({ label, checked }) => (
            <label key={label} className="inline-flex items-center text-gray-700 text-sm">
              <input
                type="checkbox"
                checked={checked}
                readOnly
                className="form-checkbox h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Follow-Up Strategy */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Follow-Up Strategy <span className="text-red-500">*</span>
        </label>
        <div className="border border-gray-200 rounded-md p-4">
          <h4 className="text-md font-semibold text-gray-700 mb-2">Add Action</h4>

          <div className="mb-3">
            <label htmlFor="actionType" className="block text-sm font-medium text-gray-700 mb-1">
              Action Type
            </label>
            <select
              id="actionType"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Email</option>
              <option>SMS</option>
              <option>Wait Duration</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <select
              id="phoneNumber"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Select</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="followUpMessage" className="block text-sm font-medium text-gray-700 mb-1">
              Follow-Up Message
            </label>
            <textarea
              id="followUpMessage"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>

          <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition text-sm">
            + Add Action
          </button>
        </div>
      </div>

      {/* Landing Page Preview */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Landing Page Preview</h3>
        <div className="border rounded-md p-6 text-center text-gray-500 text-sm">
          {/* Placeholder for now */}
          Preview content will appear here.
        </div>
      </div>
      <div className="flex justify-center mt-6">
            <button
            onClick={handlesub}
              className="w-50 bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Launch
            </button>
          </div>
    </div>
  );
};

export default CreateNewCampaignLeadsSettings;
