// import React from 'react';
// import { FaTrashAlt, FaEye } from 'react-icons/fa'; // Import Icons from Font Awesome
// import { useNavigate } from 'react-router-dom';
// const CampaignCard = ({ campaign }) => (
//   <div className="bg-white shadow-md rounded-lg p-4 w-80 flex flex-col justify-between">
//     <div>
//       <h3 className="text-lg font-semibold text-gray-800">{campaign.name}</h3>
//       <p className="text-sm text-gray-500 mb-2">{campaign.dateRange}</p>
//       <div className="flex space-x-4 mb-3">
//         <div>
//           <p className="text-xs text-gray-600">Referrals</p>
//           <p className="font-semibold text-gray-800">{campaign.referrals}</p>
//         </div>
//         <div>
//           <p className="text-xs text-gray-600">Conversion</p>
//           <p className="font-semibold text-gray-800">{campaign.conversion}</p>
//         </div>
//         <div>
//           <p className="text-xs text-gray-600">ROI</p>
//           <p className="font-semibold text-gray-800">{campaign.roi}</p>
//         </div>
//       </div>
//       <div className={`rounded-full px-2 py-1 text-xs font-semibold ${
//         campaign.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
//       } inline-block mb-2`}>
//         {campaign.status}
//       </div>
//       <div className="bg-blue-50 rounded-md p-2 text-sm text-blue-700">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//         {campaign.tip}
//       </div>
//     </div>
//     <div className="flex justify-between items-center mt-4">
//       <button className="text-red-500 hover:text-red-700 focus:outline-none">
//         <FaTrashAlt className="h-6 w-6" /> {/* Trash Icon from Font Awesome */}
//       </button>
//       <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
//         <FaEye className="h-6 w-6" /> {/* Eye Icon from Font Awesome */}
//       </button>
//     </div>
//   </div>
// );

// const CampaignSection = () => {
//   const campaignsData = [
//     {
//       name: 'Summer Referral Program',
//       dateRange: '5/31/2024 - 8/30/2024',
//       referrals: '245',
//       conversion: '32%',
//       roi: '287%',
//       status: 'Active',
//       tip: 'Increase reward by 10% to boost conversion rates during peak season',
//     },
//     {
//       name: 'Early Bird Special',
//       dateRange: '8/20/2024 - 9/19/2024',
//       referrals: '300',
//       conversion: '40%',
//       roi: '320%',
//       status: 'Inactive',
//       tip: 'Extend your campaign! Strong engagement suggests higher conversions with more time.',
//     },
//   ];

//   const navigate = useNavigate();

//   const handleCreateClick = () => {
//     navigate('/create-campaign');
//   };
//   return (
//     <div className="flex flex-col space-y-4"> {/* Changed to flex-col and space-y-4 */}
//       <div className="mb-4">
//         <button  onClick={handleCreateClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
//           </svg>
//           Create New Campaign
//         </button>
//       </div>
//       <div className="flex space-x-4"> {/* This will align the cards in a row */}
//         {campaignsData.map((campaign, index) => (
//           <CampaignCard key={index} campaign={campaign} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CampaignSection;

import React, { useEffect, useState } from 'react';
import { FaTrashAlt, FaEye } from 'react-icons/fa';
import {
  getCampaigns,
  createCampaign,
  deleteCampaign,
} from './../API/mockCampaignAPI'; // Adjust path as needed

const CampaignCard = ({ campaign, onDelete }) => (
  <div className="bg-white shadow-md rounded-lg p-4 w-80 flex flex-col justify-between">
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{campaign.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{campaign.dateRange}</p>
      <div className="flex space-x-4 mb-3">
        <div>
          <p className="text-xs text-gray-600">Referrals</p>
          <p className="font-semibold text-gray-800">{campaign.referrals}</p>
        </div>
        <div>
          <p className="text-xs text-gray-600">Conversion</p>
          <p className="font-semibold text-gray-800">{campaign.conversion}</p>
        </div>
        <div>
          <p className="text-xs text-gray-600">ROI</p>
          <p className="font-semibold text-gray-800">{campaign.roi}</p>
        </div>
      </div>
      <div className={`rounded-full px-2 py-1 text-xs font-semibold ${
        campaign.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
      } inline-block mb-2`}>
        {campaign.status}
      </div>
      <div className="bg-blue-50 rounded-md p-2 text-sm text-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {campaign.tip}
      </div>
    </div>
    <div className="flex justify-between items-center mt-4">
      <button onClick={() => onDelete(campaign.id)} className="text-red-500 hover:text-red-700">
        <FaTrashAlt className="h-5 w-5" />
      </button>
      <button className="text-gray-500 hover:text-gray-700">
        <FaEye className="h-5 w-5" />
      </button>
    </div>
  </div>
);

const CampaignSection = () => {
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    const res = await getCampaigns();
    if (res.status === 'ok') {
      setCampaigns(res.data);
    }
  };

  const handleCreate = async () => {
    const newCampaign = {
      name: 'New Campaign',
      dateRange: '10/01/2024 - 11/01/2024',
      referrals: '0',
      conversion: '0%',
      roi: '0%',
      status: 'Active',
      tip: 'Run this campaign during the festive season for better ROI.',
    };
    const res = await createCampaign(newCampaign);
    if (res.status === 'ok') fetchCampaigns();
  };

  const handleDelete = async (id) => {
    const res = await deleteCampaign(id);
    if (res.status === 'ok') fetchCampaigns();
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      <div className="mb-4">
        <button onClick={handleCreate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Create New Campaign
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default CampaignSection;
