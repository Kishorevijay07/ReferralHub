import React, { useState } from "react";

const SetupFirstCompaign = () => {
  const [campaignName, setCampaignName] = useState('');
  const [promoterRewardValue, setPromoterRewardValue] = useState('');
  const [promoterMessage, setPromoterMessage] = useState('');
  const [leadRewardValue, setLeadRewardValue] = useState('');
  const [leadMessage, setLeadMessage] = useState('');
  const [followupMessage, setFollowupMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNext = () => {
    const formData = {
      campaignName,
      promoterRewardType: 'Points',
      promoterRewardValue,
      promoterMessage,
      leadRewardType: 'Discount',
      leadRewardValue,
      leadMessage,
      actionType: 'SMS',
      phoneNumber,
      followupMessage,
    };

    alert('🚀 Launching Campaign with Data:\n\n' + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md space-y-8">
      {/* Campaign Header */}
      <div>
        <h2 className="text-xl font-semibold mb-1">Create New Campaign</h2>
        <p className="text-sm text-gray-500 mb-4">Create a new referral campaign in just few steps.</p>
        <hr className="mb-6" />
      </div>

      {/* Campaign Name */}
      <div>
        <label className="block text-sm font-medium mb-2">Campaign Name</label>
        <input
          type="text"
          placeholder="e.g., Summer Referral Special"
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-sm"
        />
      </div>

      {/* Promoter Settings */}
      <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl space-y-4">
        <h3 className="text-md font-semibold">Promoter Settings</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Reward Type */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Reward Type<span className="text-red-500">*</span>
            </label>
            <div className="bg-blue-100 text-blue-700 text-sm font-semibold text-center py-2 rounded-lg border border-blue-300">
              Points <span className="text-xs block font-normal">($1 is equivalent to 10 points)</span>
            </div>
          </div>

          {/* Reward Value */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Reward Value<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g., 200 points"
              value={promoterRewardValue}
              onChange={(e) => setPromoterRewardValue(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm"
            />
          </div>
        </div>

        {/* Promoter Message */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Promoter Message<span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder='e.g., “Hey! Share this with your friends and get $20 for each successful signup!”'
            value={promoterMessage}
            onChange={(e) => setPromoterMessage(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 text-sm h-24 resize-none"
          />
        </div>
      </div>

      {/* Follow-Up Strategy */}
      <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl space-y-4">
        <h3 className="text-md font-semibold mb-2">Follow-Up Strategy<span className="text-red-500">*</span></h3>

        {/* Action Flow UI */}
        <div className="flex flex-col items-start space-y-3">
          <div className="flex items-center space-x-2">
            <div className="bg-green-100 text-green-700 px-4 py-1 rounded-lg text-sm font-medium">SMS</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-blue-100 text-blue-700 px-4 py-1 rounded-lg text-sm font-medium">Wait: 5 days</div>
          </div>
        </div>

        {/* Action Form */}
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <label className="block text-sm font-medium mb-2">Action Type</label>
          <div className="flex items-center space-x-4 mb-4">
            <label className="flex items-center space-x-1">
              <input type="radio" name="action" defaultChecked /> <span>Email</span>
            </label>
            <label className="flex items-center space-x-1">
              <input type="radio" name="action" /> <span>SMS</span>
            </label>
            <label className="flex items-center space-x-1">
              <input type="radio" name="action" /> <span>Wait Duration</span>
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <select
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm"
            >
              <option value="">Select</option>
              <option value="+91">+91</option>
              <option value="+1">+1</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Follow-Up Message</label>
            <textarea
              placeholder="Enter message..."
              value={followupMessage}
              onChange={(e) => setFollowupMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm h-24 resize-none"
            />
          </div>

          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-xl font-semibold">
            + Add Action
          </button>
        </div>
      </div>

      {/* Form Fields */}
      <div>
        <h3 className="text-md font-semibold mb-2">Form Fields<span className="text-red-500">*</span></h3>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked /> <span>Full Name</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked /> <span>Email Address</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked /> <span>Phone Number</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked /> <span>Agree</span>
          </label>
        </div>
      </div>

      {/* Lead Settings */}
      <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl space-y-4">
        <h3 className="text-md font-semibold">Leads Settings</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Reward Type<span className="text-red-500">*</span>
            </label>
            <div className="bg-blue-100 text-blue-700 text-sm font-semibold text-center py-2 rounded-lg border border-blue-300">
              Discount
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Reward Value<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g., 20%"
              value={leadRewardValue}
              onChange={(e) => setLeadRewardValue(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Referred Message<span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder='e.g., “You’ve been invited! Sign up now and get 15% off your first order.”'
            value={leadMessage}
            onChange={(e) => setLeadMessage(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 text-sm h-24 resize-none"
          />
        </div>
      </div>

      {/* Launch Button */}
      <div className="pt-4">
        <button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition"
          onClick={handleNext}
        >
          Launch
        </button>
      </div>
    </div>
  );
};

export default SetupFirstCompaign;
