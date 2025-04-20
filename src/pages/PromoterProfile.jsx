import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaUser, FaArrowLeft } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const dummyPromoters = [
  {
    name: 'Emery Dokidis',
    email: 'emerydokidis@gmail.com',
    phone: '+979970174715',
    status: 'Active',
    referrals: 24,
    conversionRate: '75%',
    revenue: '$1250',
    followUp: '28-4-2024',
    memberSince: 'February 15, 2024',
    location: 'San Francisco, CA',
    timezone: 'Pacific Time (PT)',
    graph: [
      { month: 'Jan', value: 30 },
      { month: 'Feb', value: 30 },
      { month: 'Mar', value: 35 },
      { month: 'Apr', value: 33 },
      { month: 'May', value: 37 },
      { month: 'Jun', value: 39 },
    ]
  },
];

const tabs = ["Referral History", "Interaction & Notes", "Rewards & Incentives", "Engagement Strategies"];

const PromoterProfile = () => {
  const { id } = useParams();
  const promoter = dummyPromoters[id];
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(tabs[0]);

  if (!promoter) return <p className="p-6 text-red-600">Promoter not found.</p>;

  const renderTabContent = () => {
    switch (activeTab) {
      case "Referral History":
        return <div className="mt-4 text-sm text-gray-600">This is referral history content.</div>;
      case "Interaction & Notes":
        return <div className="mt-4 text-sm text-gray-600">Interaction logs, notes, and updates go here.</div>;
      case "Rewards & Incentives":
        return <div className="mt-4 text-sm text-gray-600">Rewards earned, incentives unlocked, and payouts go here.</div>;
      case "Engagement Strategies":
        return <div className="mt-4 text-sm text-gray-600">Suggested actions, email campaigns, and strategy notes here.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <button onClick={() => navigate(-1)} className="text-blue-600 flex items-center gap-1 mb-4">
        <FaArrowLeft /> Back
      </button>

      <div className="bg-white p-6 rounded shadow-md">
        {/* Top Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white">
              <FaUser className="text-gray-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{promoter.name} <span className="text-green-600 text-sm">{promoter.status}</span></h2>
              <p className="text-gray-600 flex items-center gap-1"><FaEnvelope /> {promoter.email}</p>
              <p className="text-gray-600 flex items-center gap-1"><FaPhone /> {promoter.phone}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-gray-100 p-4 rounded text-center">
            <p className="text-sm text-gray-500">Total Referrals</p>
            <p className="text-lg font-semibold">{promoter.referrals}</p>
          </div>
          <div className="bg-green-100 p-4 rounded text-center">
            <p className="text-sm text-gray-500">Conversion Rate</p>
            <p className="text-lg font-semibold">{promoter.conversionRate}</p>
          </div>
          <div className="bg-purple-100 p-4 rounded text-center">
            <p className="text-sm text-gray-500">Revenue Generated</p>
            <p className="text-lg font-semibold">{promoter.revenue}</p>
          </div>
          <div className="bg-blue-100 p-4 rounded text-center">
            <p className="text-sm text-gray-500">Last follow-up</p>
            <p className="text-lg font-semibold">{promoter.followUp}</p>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-8">
          <div className="flex gap-4 border-b pb-2 mb-4">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm border-b-2 ${
                  activeTab === tab ? 'border-blue-500 text-blue-600 font-semibold' : 'border-transparent text-gray-500'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="bg-gray-50 p-4 rounded border">
            {renderTabContent()}
          </div>
        </div>

        {/* Chart + Contact Info */}
        <div className="mt-6 flex flex-col md:flex-row gap-6">
          <div className="bg-white border p-4 rounded w-full md:w-2/3">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Referrals Over Time</h3>
              <select className="text-sm border rounded px-2 py-1">
                <option>Last 6 months</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={promoter.graph}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} dot />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white border p-4 rounded w-full md:w-1/3 text-sm">
            <h3 className="font-semibold mb-2">Contact Information</h3>
            <p><strong>Member since:</strong> {promoter.memberSince}</p>
            <p><strong>Location:</strong> {promoter.location}</p>
            <p><strong>Phone:</strong> {promoter.phone}</p>
            <p><strong>Email:</strong> {promoter.email}</p>
            <p><strong>Time zone:</strong> {promoter.timezone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoterProfile;
