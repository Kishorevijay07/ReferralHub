import React from 'react';
import { Chart } from 'react-google-charts';

export default function ReferralDashboard() {
  const lineChartData = [
    ['Month', 'Performance'],
    ['Jan', 30],
    ['Feb', 30],
    ['Mar', 35],
    ['Apr', 37],
    ['May', 40],
    ['Jun', 38],
  ];

  const pieChartData = [
    ['Type', 'Percentage'],
    ['Referrals sent', 57],
    ['Converted', 42],
  ];

  const pieOptions = {
    pieHole: 0.5,
    legend: 'none',
    slices: {
      0: { color: '#6366F1' },
      1: { color: '#A5B4FC' },
    },
    pieSliceText: 'none',
    tooltip: { trigger: 'focus' },
  };

  const stats = [
    { title: 'Total Promoters', value: '1,234', change: '+12%', color: 'text-green-500' },
    { title: 'Conversion rate', value: '23.5%', change: '-2.4%', color: 'text-red-500' },
    { title: 'Revenue Generated', value: '$12,345', change: '+8.7%', color: 'text-green-500' },
    { title: 'Active Campaigns', value: '3' },
  ];

  const metricCards = [
    { label: 'Repeat Referral Rate', value: 42, color: 'green' },
    { label: 'Referral Engagement Rate', value: 67, color: 'red' },
    { label: 'Churn Rate of Leads', value: 28, color: 'blue' },
    { label: 'Upsell Rate of Leads', value: 19, color: 'purple' },
  ];

  const leaderboardData = [
    { rank: 1, promoterName: 'Emery Dokidis', conversionRate: 150, referralsSent: 80, revenueGenerated: '$1,200' },
    { rank: 2, promoterName: 'Kadin Lipshutz', conversionRate: 132, referralsSent: 90, revenueGenerated: '$980' },
    { rank: 3, promoterName: 'Randy Culhane', conversionRate: 110, referralsSent: 60, revenueGenerated: '$880' },
    { rank: 4, promoterName: 'Jaxson Vaccaro', conversionRate: 100, referralsSent: 85, revenueGenerated: '$500' },
    { rank: 5, promoterName: 'Jocelyn Levin', conversionRate: 50, referralsSent: 30, revenueGenerated: '$600' },
    { rank: 6, promoterName: 'Maren Septimus', conversionRate: 80, referralsSent: 35, revenueGenerated: '$200' },
    { rank: 7, promoterName: 'Haylie Saris', conversionRate: 120, referralsSent: 55, revenueGenerated: '$150' },
    { rank: 8, promoterName: 'Randy Herwitz', conversionRate: 110, referralsSent: 90, revenueGenerated: '$880' },
  ];

  const activitiesData = [
    { activity: 'Julian earned $10', date: '28-4-2024', time: '10:30 AM' },
    { activity: 'John Doe signed up from your referral link', date: '29-4-2024', time: '9:45 AM' },
    { activity: 'You reached 50 referrals milestone!', date: '30-4-2024', time: '8:20 AM' },
    { activity: 'You updated your referral campaign', date: '31-4-2024', time: '7:00 AM' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-4">
            <p className="text-sm text-gray-500">{stat.title}</p>
            <p className="text-xl font-bold">{stat.value}</p>
            {stat.change && (
              <p className={`text-xs mt-1 ${stat.color}`}>
                {stat.change} vs last month
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Metric Progress Circles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {metricCards.map((metric, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-4 text-center">
            <p className="text-sm font-semibold mb-2">{metric.label}</p>
            <div
              className={`radial-progress text-${metric.color}-500`}
              style={{ '--value': metric.value }}
            >
              {metric.value}%
            </div>
          </div>
        ))}
      </div>

      {/* Chart & Conversion Pie */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Line Chart */}
        <div className="col-span-2 bg-white rounded-xl shadow p-4">
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold">Promoter Performance Over Time</p>
            <select className="select select-sm select-bordered">
              <option>Last 6 months</option>
            </select>
          </div>
          <Chart
            chartType="LineChart"
            width="100%"
            height="250px"
            data={lineChartData}
            options={{ legend: 'none', curveType: 'function', colors: ['#6366F1'] }}
          />
        </div>

        {/* Conversion Pie & Channel Info */}
        <div className="bg-white rounded-xl shadow p-4 space-y-4">
          <div>
            <p className="font-semibold mb-2">Conversion Success Rate</p>
            <Chart
              chartType="PieChart"
              data={pieChartData}
              options={pieOptions}
              width="100%"
              height="150px"
            />
          </div>
          <div>
            <p className="font-semibold">Top Performing Channel</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <div className="badge bg-orange-100 text-orange-600">Facebook 78%</div>
              <div className="badge bg-pink-100 text-pink-600">Twitter 45%</div>
              <div className="badge bg-blue-100 text-blue-600">LinkedIn 23%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">Recent Activities</h2>
        <ul className="divide-y divide-gray-200">
          {activitiesData.map((item, i) => (
            <li key={i} className="py-3 flex items-center justify-between">
              <p className="text-sm text-gray-600">{item.activity}</p>
              <div className="text-right text-xs text-gray-500">
                <p>{item.date}</p>
                <p>{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Leaderboard Table */}
      <div className="overflow-x-auto">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">LeaderBoard Table View</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Promoter Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Rate</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referrals Sent</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue Generated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {leaderboardData.map((item) => (
              <tr key={item.rank}>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.rank}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{item.promoterName}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{item.conversionRate}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{item.referralsSent}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{item.revenueGenerated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
