import { useState } from 'react';
import { Pencil } from 'lucide-react';
import UserProfile from './../components/Userprofile'
import SubscriptionBillingUI from '../components/SubscriptionAndBilling';

const Setting = () => {
  const [activeTab, setActiveTab] = useState('User Profile');

  const tabs = [
    'User Profile',
    'Business Profile',
    'AI Settings',
    'Email & Phone Setup',
    'Subscription & Usage',
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium px-3 py-2 rounded-t-md ${
              activeTab === tab
                ? 'bg-gray-100 text-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* User Profile Tab Content */}
      {activeTab === 'User Profile' && (
        <UserProfile/>
      )}

{activeTab === 'Business Profile' && (
  <form
    className="text-sm text-gray-700 space-y-6"
    onSubmit={(e) => {
      e.preventDefault();
      // handle form submission
    }}
  >
    {/* Business Logo */}
    <div>
      <label className="block font-medium mb-1">Business Logo</label>
      <button
        type="button"
        className="border px-3 py-1 rounded text-sm hover:bg-gray-50"
      >
        Choose Image
      </button>
    </div>

    {/* Description */}
    <div>
      <label className="block font-medium mb-1">Business Description</label>
      <textarea
        rows={3}
        placeholder="Enter description..."
        className="w-full border rounded px-3 py-2"
      />
    </div>

    {/* Business Name & Email */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block mb-1">Business Name</label>
        <input
          type="text"
          placeholder="Enter business name"
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block mb-1">Business Email</label>
        <input
          type="email"
          placeholder="e.g., robert.fox@myemail.com"
          className="w-full border rounded px-3 py-2"
        />
      </div>
    </div>

    {/* Phone No. & Industry */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block mb-1">Business Phone No.</label>
        <input
          type="text"
          placeholder="Enter phone no."
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block mb-1">Industry</label>
        <select className="w-full border rounded px-3 py-2">
          <option value="">Select</option>
          <option value="tech">Technology</option>
          <option value="finance">Finance</option>
          <option value="retail">Retail</option>
          {/* Add more industries */}
        </select>
      </div>
    </div>

    {/* Services & Products */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block mb-1">Services</label>
        <input
          type="text"
          placeholder="Enter services..."
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block mb-1">Products</label>
        <input
          type="text"
          placeholder="Enter products..."
          className="w-full border rounded px-3 py-2"
        />
      </div>
    </div>

    {/* Company Size & City */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block mb-1">
          Company Size <span className="text-gray-400">(Optional)</span>
        </label>
        <select className="w-full border rounded px-3 py-2">
          <option value="">Select</option>
          <option value="1-10">1-10</option>
          <option value="11-50">11-50</option>
          <option value="51-200">51-200</option>
          <option value="200+">200+</option>
        </select>
      </div>
      <div>
        <label className="block mb-1">City</label>
        <select className="w-full border rounded px-3 py-2">
          <option value="">Select</option>
          {/* You can map real cities here */}
          <option value="ny">New York</option>
          <option value="la">Los Angeles</option>
        </select>
      </div>
    </div>

    {/* State & Zip Code */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block mb-1">State</label>
        <select className="w-full border rounded px-3 py-2">
          <option value="">Select</option>
          {/* Populate with real states */}
          <option value="ca">California</option>
          <option value="tx">Texas</option>
        </select>
      </div>
      <div>
        <label className="block mb-1">Zip Code</label>
        <input
          type="text"
          placeholder="Enter zip code"
          className="w-full border rounded px-3 py-2"
        />
      </div>
    </div>

    {/* Save Button */}
    <div className="pt-4 flex justify-center">
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-2 rounded hover:opacity-90"
      >
        Save
      </button>
    </div>
  </form>
)}

{activeTab === 'AI Settings' && (
  <form
    className="text-sm text-gray-700 space-y-6"
    onSubmit={(e) => {
      e.preventDefault();
      // handle AI settings save
    }}
  >
    {/* Example setting */}
    <div>
      <label className="block font-medium mb-1">Enable AI Assistant</label>
      <select className="w-full border rounded px-3 py-2">
        <option value="enabled">Enabled</option>
        <option value="disabled">Disabled</option>
      </select>
    </div>

    {/* Another example */}
    <div>
      <label className="block font-medium mb-1">Preferred AI Model</label>
      <select className="w-full border rounded px-3 py-2">
        <option value="gpt4">GPT-4</option>
        <option value="gpt3">GPT-3.5</option>
        <option value="custom">Custom Model</option>
      </select>
    </div>

    {/* Add more AI settings fields here as needed */}

    {/* Save Button */}
    <div className="pt-4 flex justify-center">
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-2 rounded hover:opacity-90"
      >
        Save
      </button>
    </div>
  </form>
)}
{activeTab === 'Email & Phone Setup' && (
  <div className="space-y-10 text-sm text-gray-700">
    {/* Email Sending Address */}
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-base">Global Email Sending Address</h3>
        <p className="text-gray-500">
          Choose how your outgoing emails (referral links, follow-ups, etc.) are sent from the platform.
        </p>
      </div>

      <div className="space-y-4">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="radio"
            name="emailSender"
            value="system"
            className="mt-1"
            defaultChecked
          />
          <div>
            <p className="font-medium">Use System Email</p>
            <p className="text-gray-500">
              Emails will be sent using the platform’s default system address (e.g., notify@yourapp.com).
            </p>
          </div>
        </label>

        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="radio"
            name="emailSender"
            value="custom"
            className="mt-1"
          />
          <div>
            <p className="font-medium">Connect Your Custom Email Domain</p>
            <p className="text-gray-500">
              Improve deliverability and brand recognition by sending from your own domain (e.g., you@yourcompany.com).
            </p>
          </div>
        </label>

        <button className="border border-blue-500 text-blue-600 text-sm px-4 py-2 rounded hover:bg-blue-50">
          Connect Email Domain
        </button>
      </div>
    </div>

    <hr />

    {/* SMS Sending Number */}
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-base">Global SMS Sending Number</h3>
        <p className="text-gray-500">
          Choose how SMS messages (referral links, updates, rewards) are sent to your customers.
        </p>
      </div>

      <div className="space-y-4">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="radio"
            name="smsSender"
            value="system"
            className="mt-1"
            defaultChecked
          />
          <div>
            <p className="font-medium">Use System Phone Number</p>
            <p className="text-gray-500">
              Messages will be sent from a standard number owned by the platform.
            </p>
          </div>
        </label>

        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="radio"
            name="smsSender"
            value="custom"
            className="mt-1"
          />
          <div>
            <p className="font-medium">Connect Your Own Phone Number</p>
            <p className="text-gray-500">
              Use a verified number for better brand trust and consistency.
            </p>
          </div>
        </label>

        <button className="border border-blue-500 text-blue-600 text-sm px-4 py-2 rounded hover:bg-blue-50">
          Connect Phone Number
        </button>
      </div>
    </div>
  </div>
)}

{activeTab === 'Subscription & Usage' && (
  <div className="space-y-10 text-sm text-gray-700">
    <SubscriptionBillingUI/>

    {/* Billing History */}
<div className="space-y-4">
  <h3 className="font-semibold text-base">Billing History</h3>

  <div className="overflow-x-auto">
    <table className="min-w-full text-sm text-left text-gray-700">
      <thead className="text-xs text-gray-500 uppercase border-b">
        <tr>
          <th className="px-4 py-3">Plan Name</th>
          <th className="px-4 py-3">Amount</th>
          <th className="px-4 py-3">Issued Date</th>
          <th className="px-4 py-3">Status</th>
          <th className="px-4 py-3 text-right">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y">
        {[
          { plan: "Standard Plan", amount: "$25", date: "28/09/2024", status: "Pending", color: "bg-red-100 text-red-500" },
          { plan: "Standard Plan", amount: "$25", date: "28/09/2024", status: "Failed", color: "bg-orange-100 text-orange-500" },
          { plan: "Standard Plan", amount: "$25", date: "28/09/2024", status: "Paid", color: "bg-green-100 text-green-600" },
          { plan: "Standard Plan", amount: "$25", date: "28/09/2024", status: "Paid", color: "bg-green-100 text-green-600" },
          { plan: "Standard Plan", amount: "$25", date: "28/09/2024", status: "Paid", color: "bg-green-100 text-green-600" }
        ].map((item, idx) => (
          <tr key={idx}>
            <td className="px-4 py-3">{item.plan}</td>
            <td className="px-4 py-3">{item.amount}</td>
            <td className="px-4 py-3">{item.date}</td>
            <td className="px-4 py-3">
              <span className={`text-xs font-medium px-2 py-1 rounded ${item.color}`}>
                {item.status}
              </span>
            </td>
            <td className="px-4 py-3 text-right">
              <button className="p-1 hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Pagination */}
  <div className="flex justify-between items-center text-sm text-gray-500 pt-4">
    <span>Showing 1 to 5 of 200 entries</span>
    <div className="flex items-center space-x-1">
      <button className="px-2 py-1 rounded bg-gray-100 text-gray-400" disabled>&lt;</button>
      <button className="px-3 py-1 rounded bg-blue-500 text-white">1</button>
      <button className="px-3 py-1 rounded bg-gray-100">2</button>
      <button className="px-3 py-1 rounded bg-gray-100">3</button>
      <button className="px-3 py-1 rounded bg-gray-100">4</button>
      <button className="px-3 py-1 rounded bg-gray-100">5</button>
      <span className="px-2">...</span>
      <button className="px-3 py-1 rounded bg-gray-100">20</button>
      <button className="px-2 py-1 rounded bg-gray-100 text-gray-700">&gt;</button>
    </div>
  </div>
</div>
  </div>
)}
    </div>
  );
};

export default Setting;
