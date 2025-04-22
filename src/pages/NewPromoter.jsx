import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import man2image from './../images/man2image.jpeg';
import manimage from "./../images/mamimage.jpeg";
import FollowUpStrategy from '../components/followupstrategy';
import NewPromotersLeadssetting from '../components/NewPromotersLeadssetting';
const NewPromoter = () => {
  return (
    <div>
        {/* Campaign Name */}
      <div className="mb-4">
        <NewPromotersLeadssetting/>
        
      </div>

      {/* Follow-Up Strategy */}
      <div>
        <FollowUpStrategy/>
      </div>

      <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="container mx-auto px-4 mt-16">
        <h1 className="text-3xl font-bold text-gray-800 mb-10">
          Leading Page Preview
        </h1>

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <button className="text-gray-500 focus:outline-none">Chat with AI</button>
            <button className="text-gray-500 focus:outline-none">My Leads</button>
            <button className="text-gray-500 focus:outline-none">My Rewards</button>
          </div>
          <div className="flex items-center space-x-3">
            <button className="text-gray-500 focus:outline-none">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 009.828 16M4 4v5h.582m15.356 2A8.001 8.001 0 009.828 16m-5.864-2a8.005 8.005 0 00-4.228-4.227M15.918 17.918a8.005 8.005 0 00-3.513-3.513M4 16v-3m15.052 5.052A8.045 8.045 0 0016.9 13.1m-1.094-8.01a7.955 7.955 0 017.064 7.064M15 13.207l-5.786 5.786a2 2 0 01-2.828-2.828l5.786-5.786m3.414.586l-1.414-1.414m2.828 0l-1.414 1.414"
                />
              </svg>
            </button>
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gray-300" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white" />
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-400 mr-1" />
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M19 9l8 4-8 4m-7 0l4-4-4-4m-7 0l4 4-4 4"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Hero Section */}

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome back! You're promoting:</h1>
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">SnackNation Express</h2>
          <p className="text-gray-600 leading-relaxed">
            SnackNation delivers hand-picked, chef-curated snacks — from spicy masala nuts to sweet jaggery
            treats — delivered fresh to your door in under 45 minutes.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <img
                src={manimage}
                alt="Profile 1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <img
                src={man2image}
                alt="Profile 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Referral Reward Section */}
        <div className="bg-white rounded-lg p-8 shadow-md max-w-md mx-auto mb-6">
          <p className="text-lg text-green-500 font-semibold mb-4">
            Every successful referral earns you 200 points
          </p>
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline">
            Start Promoting & Earning
          </button>
        </div>

        {/* Edit Button */}

      </div>
      </div>

          </div>
          <div className="flex justify-center mt-6">
          <button className="bg-blue-400 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-md">
            Edit
          </button>
        </div>
          </div>
  )
}

export default NewPromoter