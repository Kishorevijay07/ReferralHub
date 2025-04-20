import React from 'react';
import CampaignSetup from './CampaignSetup';

const CreateCampaign = () => {
  return (
    <div className="fixed inset-0 z-50  bg-opacity-0 flex items-center justify-center overflow-auto p-6">
      <div className="bg-white shadow-2xl rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <CampaignSetup />
      </div>
    </div>
  );
};

export default CreateCampaign;
