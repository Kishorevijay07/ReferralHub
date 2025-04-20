import React, { useState } from 'react';
import CampaignSection from './CampaignSection'; // Assuming CampaignSection is in the same directory
import CampaignSettingsForm from './CampaignSettingsForm';
import NewLeads from './NewLeads';
const MainDashboard = () => {
  const [activeTab, setActiveTab] = useState('Past Promoters');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Past Promoters':
        return  <CampaignSection />;
      case 'New Promoters':
        return <CampaignSettingsForm/>;
      case 'New Leads':
        return <NewLeads/>// Display the campaign section for "New Leads"
      default:
        return <div>Select a tab to see content.</div>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Create New Campaign Button */}
      {/* Navigation Tabs */}
      <div className="bg-gray-100 py-2 rounded-md mb-4">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === 'Past Promoters' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'
            } focus:outline-none`}
            onClick={() => handleTabClick('Past Promoters')}
          >
            Past Promoters
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === 'New Promoters' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'
            } focus:outline-none`}
            onClick={() => handleTabClick('New Promoters')}
          >
            New Promoters
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === 'New Leads' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'
            } focus:outline-none`}
            onClick={() => handleTabClick('New Leads')}
          >
            New Leads
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default MainDashboard;