import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import man2image from './../images/man2image.jpeg';
import manimage from "./../images/mamimage.jpeg";
const NewPromoter = () => {
  return (
    <div>
        {/* Campaign Name */}
      <div className="mb-4">
        <label htmlFor="campaignName" className="block text-gray-700 text-sm font-bold mb-2">
          Campaign Name
        </label>
        <input
          type="text"
          id="campaignName"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value="Summer Referral Special" // Initial Value
        />
      </div>

      {/* Reward Type & Reward Value */}
      <div className="flex space-x-4 mb-4">
        <div className="w-1/2">
          <label htmlFor="rewardType" className="block text-gray-700 text-sm font-bold mb-2">
            Reward Type *
          </label>
          <div className="relative">
            <select
              id="rewardType"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value="points" // Initial Value
            >
              <option value="points">Points</option>
              {/* Add other reward types if needed */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
            <p className="text-xs text-blue-500 mt-1">( $1 is equivalent to 10 points )</p>
          </div>
        </div>
        <div className="w-1/2">
          <label htmlFor="rewardValue" className="block text-gray-700 text-sm font-bold mb-2">
            Reward Value *
          </label>
          <input
            type="text"
            id="rewardValue"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value="200 points" // Initial Value
          />
        </div>
      </div>

      {/* Promoter Message */}
      <div className="mb-4">
        <label htmlFor="promoterMessage" className="block text-gray-700 text-sm font-bold mb-2">
          Promoter Message *
        </label>
        <textarea
          id="promoterMessage"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24" // Added h-24 for height
          value="Hey! Share this with your friends and get $20 for each successful signup!" // Initial Value
        />
      </div>

      {/* Follow-Up Strategy */}
      <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Follow-Up Strategy *
                </label>
                <div className="rounded-md">
                  {/* Follow-Up Steps */}
                  <div className="flex flex-col space-y-2">
                    {/* SMS Step 1 */}
                    <div className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                      <div className="flex items-center">
                        <div className="bg-green-100 text-green-500 rounded-full p-1 mr-2">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10l-2 2m0 0l2 2m-2-2h4m5-3h2a1 1 0 011 1v3h1m-3 0h1v3a1 1 0 01-1 1h-2m-3-6h2L15 10l2 2m-2 2h4" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">SMS</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
                          <FaEdit className="h-5 w-5" />
                        </button>
                        <button className="text-red-500 hover:text-red-700 focus:outline-none">
                          <FaTrashAlt className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    {/* Wait - 5 days Step */}
                    <div className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                      <div className="flex items-center">
                        <div className="bg-blue-100 text-blue-500 rounded-full p-1 mr-2">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Wait: 5 days</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
                          <FaEdit className="h-5 w-5" />
                        </button>
                        <button className="text-red-500 hover:text-red-700 focus:outline-none">
                          <FaTrashAlt className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    {/* Email Step */}
                    <div className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                      <div className="flex items-center">
                        <div className="bg-yellow-100 text-yellow-500 rounded-full p-1 mr-2">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0l-7.89 5.26a2 2 0 01-2.22 0L3 8m0 0l1.66-1.1a2 2 0 012.22 0L11 9.16a2 2 0 012.22 0L19.34 6.9a2 2 0 012.22 0l1.66 1.1m-1.66-1.1l-1.13 1.5a2 2 0 01-2.22 0L15 7.84a2 2 0 01-2.22 0L12 9.16a2 2 0 01-2.22 0L8.34 6.9a2 2 0 01-2.22 0l-1.13 1.5" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Email</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
                          <FaEdit className="h-5 w-5" />
                        </button>
                        <button className="text-red-500 hover:text-red-700 focus:outline-none">
                          <FaTrashAlt className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    {/* Wait - 2 days Step */}
                    <div className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                      <div className="flex items-center">
                        <div className="bg-blue-100 text-blue-500 rounded-full p-1 mr-2">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Wait: 2 days</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
                          <FaEdit className="h-5 w-5" />
                        </button>
                        <button className="text-red-500 hover:text-red-700 focus:outline-none">
                          <FaTrashAlt className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    {/* SMS Step 2 */}
                    <div className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                      <div className="flex items-center">
                        <div className="bg-green-100 text-green-500 rounded-full p-1 mr-2">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10l-2 2m0 0l2 2m-2-2h4m5-3h2a1 1 0 011 1v3h1m-3 0h1v3a1 1 0 01-1 1h-2m-3-6h2L15 10l2 2m-2 2h4" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">SMS</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
                          <FaEdit className="h-5 w-5" />
                        </button>
                        <button className="text-red-500 hover:text-red-700 focus:outline-none">
                          <FaTrashAlt className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    {/* Wait - 3 days Step */}
                    <div className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                      <div className="flex items-center">
                        <div className="bg-blue-100 text-blue-500 rounded-full p-1 mr-2">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Wait: 3 days</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
                          <FaEdit className="h-5 w-5" />
                        </button>
                        <button className="text-red-500 hover:text-red-700 focus:outline-none">
                          <FaTrashAlt className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    {/* SMS Step 3 */}
                    <div className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                      <div className="flex items-center">
                        <div className="bg-green-100 text-green-500 rounded-full p-1 mr-2">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10l-2 2m0 0l2 2m-2-2h4m5-3h2a1 1 0 011 1v3h1m-3 0h1v3a1 1 0 01-1 1h-2m-3-6h2L15 10l2 2m-2 2h4" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">SMS</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
                          <FaEdit className="h-5 w-5" />
                        </button>
                        <button className="text-red-500 hover:text-red-700 focus:outline-none">
                          <FaTrashAlt className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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