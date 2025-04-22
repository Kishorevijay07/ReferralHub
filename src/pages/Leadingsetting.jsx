import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import mamimage from './../images/mamimage.jpeg'
import man2image from './../images/man2image.jpeg'
import FollowUpStrategy from '../components/followupstrategy';
import Leadingpagereview from '../components/Leadingpagereview';
import NewPromotersLeadssetting from '../components/NewPromotersLeadssetting';

const Leadingsetting = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Header Tabs */}
      <NewPromotersLeadssetting/>
      <div>
        
        {/* Form Fields */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Form Fields *
            <span className="ml-1">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-4 h-4 inline-block align-middle"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1h-2zM9 13a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <div className="flex items-center space-x-4 flex-wrap">
            <label className="inline-flex items-center text-gray-700 text-sm">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" checked readOnly />
              <span className="ml-2">Full Name</span>
            </label>
            <label className="inline-flex items-center text-gray-700 text-sm">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" checked readOnly />
              <span className="ml-2">Email Address</span>
            </label>
            <label className="inline-flex items-center text-gray-700 text-sm">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" readOnly />
              <span className="ml-2">Phone Number</span>
            </label>
            <label className="inline-flex items-center text-gray-700 text-sm">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" checked readOnly />
              <span className="ml-2">Agree to Terms & Conditions & Opt-in</span>
            </label>
          </div>
        </div>

        {/* Follow-Up Strategy */}
        <div>
          <FollowUpStrategy/>
          </div>
          
          <div>
          <h1 className='text-lg font-semibold text-gray-700 mb-4'>Leading Page Review</h1>
          <div className="bg-gray-100 rounded-lg p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
              {/* Left Section (Potentially Navigation) */}
              <div className="flex space-x-4">
              <button className="text-gray-500 focus:outline-none">Chat with AI</button>
              <button className="text-gray-500 focus:outline-none">My Leads</button>
              <button className="text-gray-500 focus:outline-none">My Rewards</button>
              </div>
              {/* Right Section (User Info) */}
              <div className="flex items-center space-x-3">
              <button className="text-gray-500 focus:outline-none">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 009.828 16M4 4v5h.582m15.356 2A8.001 8.001 0 009.828 16m-5.864-2a8.005 8.005 0 00-4.228-4.227M15.918 17.918a8.005 8.005 0 00-3.513-3.513M4 16v-3m15.052 5.052A8.045 8.045 0 0016.9 13.1m-1.094-8.01a7.955 7.955 0 017.064 7.064M15 13.207l-5.786 5.786a2 2 0 01-2.828-2.828l5.786-5.786m3.414.586l-1.414-1.414m2.828 0l-1.414 1.414"
              />
              </svg>
              </button>
              <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gray-300">
              {/* Placeholder for notification */}
              </div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
              </div>
              <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-400 mr-1">
              {/* Placeholder for user profile */}
              </div>
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l8 4-8 4m-7 0l4-4-4-4m-7 0l4 4-4 4" />
              </svg>
              </div>
              </div>
              </div>

              {/* Hero Section */}
              <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">You've been invited by [Promoter Name]!</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
              SnackNation delivers hand-picked, chef-curated snacks — from spicy masala nuts to
              sweet jaggery treats — delivered fresh to your door in under 45 minutes.
              </p>
              <div className="relative inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 text-white font-bold py-2 px-6 rounded-full shadow-md">
              Get 20% off on your first order
              </span>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <img
              src={mamimage}
              alt="Promoter 1"
              className="absolute inset-0 w-full h-full object-cover"
              />
              </div>
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <img
              src={man2image}
              alt="Promoter 2"
              className="absolute inset-0 w-full h-full object-cover"
              />
              </div>
              </div>
              </div>

              {/* Form */}
              <div className="max-w-md mx-auto mb-8">
              <Leadingpagereview/>
              </div>

              {/* Instructions */}
              <div className="max-w-md mx-auto text-left text-gray-600 text-sm">
              <div className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Fill in the details.
              </div>
              <div className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3m-9-3h3m-1 16h5a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Just click the Claim Your Reward button above.
              </div>
              <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0l-7.89 5.26a2 2 0 01-2.22 0L3 8m0 0l1.66-1.1a2 2 0 012.22 0L11 9.16a2 2 0 012.22 0L19.34 6.9a2 2 0 012.22 0l1.66 1.1m-1.66-1.1l-1.13 1.5a2 2 0 01-2.22 0L15 7.84a2 2 0 01-2.22 0L12 9.16a2 2 0 01-2.22 0L8.34 6.9a2 2 0 01-2.22 0l-1.13 1.5" />
              </svg>
              Once done, you'll receive your reward automatically!
              </div>
              </div>
              </div>
        </div>
      </div>
      <div className="mt-auto pt-4 border-t border-gray-200 flex justify-center">
        <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Leadingsetting;
