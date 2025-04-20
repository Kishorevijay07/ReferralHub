import React, { useState } from 'react';

import NewPromoter from './NewPromoter';
import Leadingsetting from './Leadingsetting';

// Dummy components for illustration
const PromoterSettings = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Promoter Settings</h2>
    <NewPromoter/>
    {/* Your Promoter Settings form or content goes here */}
  </div>
);

const LeadsSettings = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Leads Settings</h2>
    <Leadingsetting/>
    {/* Your Leads Settings form or content goes here */}
  </div>
);

const CampaignSettingsForm = () => {
  const [activeTab, setActiveTab] = useState('promoter');

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Header Tabs */}
      <div className="flex border-b border-gray-200 mb-4">
        <button
          className={`px-4 py-2 font-semibold focus:outline-none border-b-2 ${
            activeTab === 'promoter' ? 'text-blue-500 border-blue-500' : 'text-gray-500 border-transparent'
          }`}
          onClick={() => setActiveTab('promoter')}
        >
          Promoter Settings
        </button>
        <button
          className={`px-4 py-2 font-semibold focus:outline-none border-b-2 ${
            activeTab === 'leads' ? 'text-blue-500 border-blue-500' : 'text-gray-500 border-transparent'
          }`}
          onClick={() => setActiveTab('leads')}
        >
          Leads Settings
        </button>
      </div>

      {/* Conditional Rendering Based on Active Tab */}
      {activeTab === 'promoter' && <PromoterSettings />}
      {activeTab === 'leads' && <LeadsSettings />}
    </div>
  );
};

export default CampaignSettingsForm;
