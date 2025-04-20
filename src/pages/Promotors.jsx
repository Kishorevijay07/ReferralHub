import React, { useState } from 'react';
import {
  FaUser, FaUserPlus, FaPercent, FaDollarSign, FaEye, FaCommentDots, FaEnvelope, FaPhone, FaArrowLeft,
} from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import Promotercustumtool from './Promotercustumtool';

const stats = [
  { icon: <FaUser />, title: 'Total Customers', value: 8, change: '+12%', note: 'vs last month' },
  { icon: <FaUserPlus />, title: 'New Customers', value: 94, change: '+8%', note: 'vs last month' },
  { icon: <FaPercent />, title: 'Average Conversion rate', value: '64%', change: '-3%', note: 'vs last month' },
  { icon: <FaDollarSign />, title: 'Total Revenue Generated', value: '$23,900', change: '+15%', note: 'vs last month' },
];

// const promoters = [
//   {
//     name: 'Emery Dokidis',
//     email: 'emerydokidis@gmail.com',
//     phone: '+979970174715',
//     status: 'Active',
//     referrals: 24,
//     conversionRate: '75%',
//     revenue: '$1250',
//     followUp: '28-4-2024',
//     memberSince: 'February 15, 2024',
//     location: 'San Francisco, CA',
//     timezone: 'Pacific Time (PT)',
//     graph: [
//       { month: 'Jan', value: 30 },
//       { month: 'Feb', value: 30 },
//       { month: 'Mar', value: 35 },
//       { month: 'Apr', value: 33 },
//       { month: 'May', value: 37 },
//       { month: 'Jun', value: 39 },
//     ]
//   },
//   // ...other promoters
// ];





const statusColors = {
  Active: 'bg-blue-100 text-blue-600',
  Inactive: 'bg-orange-100 text-orange-600',
  Completed: 'bg-green-100 text-green-600',
};

export default function PromotersDashboard() {
  const [allPromoters] = useState([
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
      ],
    },
    {
      name: 'Kadin Lipshutz',
      email: 'kadin.lip@example.com',
      phone: '+971501948279',
      status: 'Active',
      referrals: 18,
      conversionRate: '65%',
      revenue: '$900',
      followUp: '27-5-2024',
      memberSince: 'March 1, 2024',
      location: 'Dubai, UAE',
      timezone: 'Gulf Standard Time (GST)',
      graph: [
        { month: 'Jan', value: 22 },
        { month: 'Feb', value: 26 },
        { month: 'Mar', value: 29 },
        { month: 'Apr', value: 28 },
        { month: 'May', value: 31 },
        { month: 'Jun', value: 34 },
      ],
    },
    {
      name: 'Randy Culhane',
      email: 'r.culhane@example.com',
      phone: '+971501598978',
      status: 'Inactive',
      referrals: 12,
      conversionRate: '50%',
      revenue: '$1000',
      followUp: '29-5-2024',
      memberSince: 'January 10, 2024',
      location: 'Abu Dhabi, UAE',
      timezone: 'Gulf Standard Time (GST)',
      graph: [
        { month: 'Jan', value: 18 },
        { month: 'Feb', value: 20 },
        { month: 'Mar', value: 22 },
        { month: 'Apr', value: 21 },
        { month: 'May', value: 23 },
        { month: 'Jun', value: 25 },
      ],
    },
    {
      name: 'Jocelyn Levin',
      email: 'jocelyn@example.com',
      phone: '+971554315300',
      status: 'Inactive',
      referrals: 9,
      conversionRate: '48%',
      revenue: '$750',
      followUp: '01-7-2024',
      memberSince: 'December 20, 2023',
      location: 'Toronto, Canada',
      timezone: 'Eastern Time (ET)',
      graph: [
        { month: 'Jan', value: 12 },
        { month: 'Feb', value: 14 },
        { month: 'Mar', value: 15 },
        { month: 'Apr', value: 13 },
        { month: 'May', value: 16 },
        { month: 'Jun', value: 17 },
      ],
    },
    {
      name: 'Jaxson Vaccaro',
      email: 'jax.vaccaro@example.com',
      phone: '+971522503635',
      status: 'Completed',
      referrals: 15,
      conversionRate: '60%',
      revenue: '$1200',
      followUp: '30-6-2024',
      memberSince: 'April 5, 2024',
      location: 'Los Angeles, CA',
      timezone: 'Pacific Time (PT)',
      graph: [
        { month: 'Jan', value: 25 },
        { month: 'Feb', value: 26 },
        { month: 'Mar', value: 30 },
        { month: 'Apr', value: 32 },
        { month: 'May', value: 33 },
        { month: 'Jun', value: 35 },
      ],
    },
    {
      name: 'Sasha Ellingsworth',
      email: 'sasha.e@example.com',
      phone: '+971553214788',
      status: 'Completed',
      referrals: 20,
      conversionRate: '70%',
      revenue: '$1800',
      followUp: '12-7-2024',
      memberSince: 'February 28, 2024',
      location: 'London, UK',
      timezone: 'GMT',
      graph: [
        { month: 'Jan', value: 15 },
        { month: 'Feb', value: 18 },
        { month: 'Mar', value: 20 },
        { month: 'Apr', value: 22 },
        { month: 'May', value: 25 },
        { month: 'Jun', value: 28 },
      ],
    },
    {
      name: 'Maren Septimus',
      email: 'm.septimus@example.com',
      phone: '+971525620832',
      status: 'Completed',
      referrals: 22,
      conversionRate: '68%',
      revenue: '$2000',
      followUp: '03-7-2024',
      memberSince: 'March 12, 2024',
      location: 'Berlin, Germany',
      timezone: 'Central European Time (CET)',
      graph: [
        { month: 'Jan', value: 27 },
        { month: 'Feb', value: 29 },
        { month: 'Mar', value: 30 },
        { month: 'Apr', value: 31 },
        { month: 'May', value: 33 },
        { month: 'Jun', value: 36 },
      ],
    },
    {
      name: 'Haylie Saris',
      email: 'haylie.saris@example.com',
      phone: '+971503328228',
      status: 'Active',
      referrals: 17,
      conversionRate: '58%',
      revenue: '$1100',
      followUp: '05-7-2024',
      memberSince: 'April 20, 2024',
      location: 'Mumbai, India',
      timezone: 'India Standard Time (IST)',
      graph: [
        { month: 'Jan', value: 16 },
        { month: 'Feb', value: 18 },
        { month: 'Mar', value: 21 },
        { month: 'Apr', value: 23 },
        { month: 'May', value: 24 },
        { month: 'Jun', value: 26 },
      ],
    },
    {
      name: 'Randy Herwitz',
      email: 'r.herwitz@example.com',
      phone: '+971554231522',
      status: 'Inactive',
      referrals: 13,
      conversionRate: '50%',
      revenue: '$600',
      followUp: '10-7-2024',
      memberSince: 'January 5, 2024',
      location: 'Chicago, IL',
      timezone: 'Central Time (CT)',
      graph: [
        { month: 'Jan', value: 11 },
        { month: 'Feb', value: 13 },
        { month: 'Mar', value: 14 },
        { month: 'Apr', value: 15 },
        { month: 'May', value: 17 },
        { month: 'Jun', value: 19 },
      ],
    },
    {
      name: 'Gideon Trask',
      email: 'gideon.trask@example.com',
      phone: '+971504587412',
      status: 'Active',
      referrals: 19,
      conversionRate: '62%',
      revenue: '$1350',
      followUp: '14-7-2024',
      memberSince: 'March 3, 2024',
      location: 'New York, NY',
      timezone: 'Eastern Time (ET)',
      graph: [
        { month: 'Jan', value: 20 },
        { month: 'Feb', value: 21 },
        { month: 'Mar', value: 23 },
        { month: 'Apr', value: 25 },
        { month: 'May', value: 27 },
        { month: 'Jun', value: 29 },
      ],
    }
  ]);
  const [promoters, setPromoters] = useState(allPromoters);

  const [showModal, setShowModal] = useState(false);
  const [selectedPromoterIndex, setSelectedPromoterIndex] = useState(null);

  const selectedPromoter = selectedPromoterIndex !== null ? promoters[selectedPromoterIndex] : null;

  return (
    <div className="p-6">
      <div className="flex gap-3 mb-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setShowModal(true)}
        >
          + New Promoter
        </button>
        <button className="border px-4 py-2 rounded">Ask Past Customers For Referrals</button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6 border p-4 rounded">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-4 border-dashed border p-4 rounded">
            <div className="text-2xl">{s.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{s.title}</p>
              <p className="text-lg font-semibold">{s.value}</p>
              <p className={`text-xs ${s.change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                {s.change} <span className="text-gray-400">{s.note}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded shadow mb-6">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl font-semibold">Promoters</h2>
          <div className="flex gap-2">
            <input type="text" placeholder="Search" className="border p-2 rounded text-sm" />
            <button className="border px-3 py-1 rounded text-sm">Filter</button>
          </div>
        </div>

        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3"><input type="checkbox" /></th>
              <th className="p-3">Promoter Name</th>
              <th className="p-3">Contact No.</th>
              <th className="p-3">Leads</th>
              <th className="p-3">Conversion Rate</th>
              <th className="p-3">Last Follow-Up</th>
              <th className="p-3">Revenue Generated</th>
              <th className="p-3">Referrer Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {promoters.map((p, i) => (
              <tr key={i} className="border-t">
                <td className="p-3"><input type="checkbox" /></td>
                <td
                  className="p-3 text-blue-600 underline cursor-pointer"
                  onClick={() => setSelectedPromoterIndex(i)}
                >
                  {p.name}
                </td>
                <td className="p-3">{p.phone}</td>
                <td className="p-3">{p.referrals}</td>
                <td className="p-3">{p.conversionRate}</td>
                <td className="p-3">{p.followUp}</td>
                <td className="p-3">{p.revenue}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 text-xs rounded ${statusColors[p.status]}`}>{p.status}</span>
                </td>
                <td className="p-3 flex items-center gap-3">
                  <button title="View Profile"><FaEye /></button>
                  <button title="Send follow-up message"><FaCommentDots /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedPromoter && (
        <div className="bg-white p-6 rounded shadow">
          <button
            onClick={() => setSelectedPromoterIndex(null)}
            className="text-blue-600 flex items-center gap-1 mb-4"
          >
            <FaArrowLeft /> Back to List
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white">
              <FaUser className="text-gray-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                {selectedPromoter.name}{' '}
                <span className="text-green-600 text-sm">{selectedPromoter.status}</span>
              </h2>
              <p className="text-gray-600 flex items-center gap-1"><FaEnvelope /> {selectedPromoter.email}</p>
              <p className="text-gray-600 flex items-center gap-1"><FaPhone /> {selectedPromoter.phone}</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-100 p-4 rounded text-center">
              <p className="text-sm text-gray-500">Total Referrals</p>
              <p className="text-lg font-semibold">{selectedPromoter.referrals}</p>
            </div>
            <div className="bg-green-100 p-4 rounded text-center">
              <p className="text-sm text-gray-500">Conversion Rate</p>
              <p className="text-lg font-semibold">{selectedPromoter.conversionRate}</p>
            </div>
            <div className="bg-purple-100 p-4 rounded text-center">
              <p className="text-sm text-gray-500">Revenue Generated</p>
              <p className="text-lg font-semibold">{selectedPromoter.revenue}</p>
            </div>
            <div className="bg-blue-100 p-4 rounded text-center">
              <p className="text-sm text-gray-500">Last follow-up</p>
              <p className="text-lg font-semibold">{selectedPromoter.followUp}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-white border p-4 rounded w-full md:w-2/3">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Referrals Over Time</h3>
                <select className="text-sm border rounded px-2 py-1">
                  <option>Last 6 months</option>
                </select>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={selectedPromoter.graph}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} dot />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white border p-4 rounded w-full md:w-1/3 text-sm">
              <h3 className="font-semibold mb-2">Contact Information</h3>
              <p><strong>Member since:</strong> {selectedPromoter.memberSince}</p>
              <p><strong>Location:</strong> {selectedPromoter.location}</p>
              <p><strong>Phone:</strong> {selectedPromoter.phone}</p>
              <p><strong>Email:</strong> {selectedPromoter.email}</p>
              <p><strong>Time zone:</strong> {selectedPromoter.timezone}</p>
            </div>
          </div>
        </div>
      )}

      {showModal && <Promotercustumtool onClose={() => setShowModal(false)} />}
    </div>
  );
}
