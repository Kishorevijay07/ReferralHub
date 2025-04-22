import React, { useState } from 'react';
import CreateNewCampaignLeadsSettings from './CreateNewCampaignLeadsSettings';

const CampaignSetup = () => {
  const [actionType, setActionType] = useState('sms');
  const [showSecondComponent, setShowSecondComponent] = useState(false);

  const [campaignName, setCampaignName] = useState('');
  const [rewardValue, setRewardValue] = useState('');
  const [referrerMessage, setReferrerMessage] = useState('');
  const [followUps, setFollowUps] = useState([]);

  const addFollowUp = () => {
    if (actionType === 'wait') {
      const days = prompt('Enter wait duration (in days):');
      if (days) {
        setFollowUps([...followUps, { type: 'wait', duration: parseInt(days) }]);
      }
    } else {
      const message = prompt(`Enter ${actionType} message:`);
      const phone = prompt('Enter phone number (optional):');
      if (message) {
        setFollowUps([...followUps, { type: actionType, message, phone }]);
      }
    }
  };

  const handleNext = () => {
    const newCampaign = {
      name: campaignName,
      rewardValue,
      referrerMessage,
      followUps,
    };

    console.log('✅ Campaign Created:', newCampaign);
    setShowSecondComponent(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {!showSecondComponent ? (
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Section 1: Create Campaign */}
          <div className="bg-white rounded-md shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Create New Campaign</h2>
            <p className="text-sm text-gray-500 mb-6">
              Create a new referral campaign in just a few steps.
            </p>

            {/* Campaign Name */}
            <div className="mb-6">
              <label className="block font-medium text-gray-700 mb-2">Campaign Name</label>
              <input
                type="text"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                placeholder="e.g., Summer Referral Special"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Step Indicator */}
            <div className="flex items-center justify-center mb-8 space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">01</div>
                <span className="text-sm text-gray-700 font-medium">Promoter Settings</span>
              </div>
              <div className="h-px w-8 bg-gray-300"></div>
              <div className="flex items-center space-x-2 opacity-40">
                <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center text-sm font-bold">02</div>
                <span className="text-sm text-gray-700 font-medium">Leads Settings</span>
              </div>
            </div>

            {/* Reward Type & Value */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-medium text-gray-700 mb-2">Reward Type <span className="text-red-500">*</span></label>
                <div className="flex items-center space-x-2">
                  <button className="bg-blue-100 text-blue-600 font-medium text-sm px-4 py-2 rounded-md border border-blue-400">
                    Points
                  </button>
                  <span className="text-xs text-gray-500">($1 is equivalent to 10 points)</span>
                </div>
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-2">Reward Value <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={rewardValue}
                  onChange={(e) => setRewardValue(e.target.value)}
                  placeholder="e.g., 200 points"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Referrer Message */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">Referrer Message <span className="text-red-500">*</span></label>
              <textarea
                rows={3}
                value={referrerMessage}
                onChange={(e) => setReferrerMessage(e.target.value)}
                placeholder='e.g., "Hey! Share this with your friends and get $20 for each successful signup!"'
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Section 2: Follow-Up Strategy */}
          <div className="bg-blue-50 p-6 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Follow-Up Strategy <span className="text-red-500">*</span>
            </h3>

            {/* Existing Follow-Ups Preview */}
            <div className="space-y-2 mb-6">
              {followUps.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white w-fit px-4 py-2 rounded-md shadow border border-gray-200 text-sm"
                >
                  {item.type === 'wait'
                    ? `⏳ Wait: ${item.duration} days`
                    : `📨 ${item.type.toUpperCase()}: ${item.message}`}
                </div>
              ))}
            </div>

            {/* Add Action */}
            <div className="bg-white p-4 rounded-md shadow-md border border-gray-200 max-w-md">
              <label className="block font-medium text-gray-700 mb-2">Action Type</label>
              <div className="flex items-center gap-4 mb-4">
                {['email', 'sms', 'wait'].map((type) => (
                  <label key={type} className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      name="actionType"
                      value={type}
                      checked={actionType === type}
                      onChange={(e) => setActionType(e.target.value)}
                    />
                    {type === 'wait' ? 'Wait Duration' : type.charAt(0).toUpperCase() + type.slice(1)}
                  </label>
                ))}
              </div>

              <button
                onClick={addFollowUp}
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md mt-2 hover:bg-blue-700 transition"
              >
                + Add Action
              </button>
            </div>
          </div>

          {/* Section 3: Landing Page Preview */}
          <div className="bg-white mt-6 p-6 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Landing Page Preview</h3>

            <div className="border rounded-md overflow-hidden shadow">
              <div className="bg-gray-50 border-b px-4 py-2 flex items-center justify-between text-sm font-medium text-gray-600">
                <div className="flex gap-6">
                  <span className="text-blue-600">Chat with AI</span>
                  <span>My Leads</span>
                  <span>My Rewards</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🔔</span>
                  <span>👤</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 via-white to-pink-50 p-10 text-center space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Welcome back! You're promoting: <br />
                  <span className="text-2xl font-bold text-blue-700">
                    {campaignName || 'SnackNation Express'}
                  </span>
                </h2>
                <p className="text-sm text-gray-600 max-w-xl mx-auto">
                  SnackNation delivers hand-picked, chef-curated snacks — from spicy masala nuts to sweet jaggery treats — delivered fresh to your door in under 45 minutes.
                </p>
                <div className="bg-blue-100 text-blue-700 inline-block px-4 py-2 rounded-md font-medium">
                  Every successful referral earns you {rewardValue || '200'} points
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-md font-medium hover:bg-blue-700 transition">
                  Start Promoting & Earning
                </button>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleNext}
              className="w-50 bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <CreateNewCampaignLeadsSettings />
      )}
    </div>
  );
};

export default CampaignSetup;
