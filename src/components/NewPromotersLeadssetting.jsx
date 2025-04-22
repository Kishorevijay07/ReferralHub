import React, { useState } from 'react';

const NewPromotersLeadssetting = () => {
  const [campaignName, setCampaignName] = useState("Summer Referral Special");
  const [rewardType, setRewardType] = useState("Discount");
  const [rewardValue, setRewardValue] = useState("20%");
  const [referredMessage, setReferredMessage] = useState(
    "You've been invited! Sign up now and get 15% off your first order"
  );

  return (
    <>
      {/* Campaign Name */}
      <div className="mb-4">
        <label htmlFor="campaignName" className="block text-gray-700 text-sm font-bold mb-2">
          Campaign Name
        </label>
        <input
          type="text"
          id="campaignName"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)}
        />
      </div>

      {/* Leads Settings */}
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Leads Settings</h2>
      <div className="flex space-x-4 mb-4">
        <div className="w-1/2">
          <label htmlFor="rewardType" className="block text-gray-700 text-sm font-bold mb-2">
            Reward Type *
          </label>
          <select
            id="rewardType"
            value={rewardType}
            onChange={(e) => setRewardType(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>Discount</option>
            <option>Cashback</option>
            <option>Gift</option>
            <option>Coupon</option>
          </select>
        </div>

        <div className="w-1/2">
          <label htmlFor="rewardValue" className="block text-gray-700 text-sm font-bold mb-2">
            Reward Value *
          </label>
          <input
            type="text"
            id="rewardValue"
            value={rewardValue}
            onChange={(e) => setRewardValue(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>

      {/* Referred Message */}
      <div className="mb-4">
        <label htmlFor="referredMessage" className="block text-gray-700 text-sm font-bold mb-2">
          Referred Message *
        </label>
        <textarea
          id="referredMessage"
          value={referredMessage}
          onChange={(e) => setReferredMessage(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
        />
      </div>
    </>
  );
};

export default NewPromotersLeadssetting;
