// import React from 'react';
// import { Chart } from 'react-google-charts';

// export default function ReferralDashboard() {
//   const lineChartData = [
//     ['Month', 'Performance'],
//     ['Jan', 30],
//     ['Feb', 30],
//     ['Mar', 35],
//     ['Apr', 37],
//     ['May', 40],
//     ['Jun', 38],
//   ];

  // const pieChartData = [
  //   ['Type', 'Percentage'],
  //   ['Referrals sent', 57],
  //   ['Converted', 42],
  // ];

  // const pieOptions = {
  //   pieHole: 0.5,
  //   legend: 'none',
  //   slices: {
  //     0: { color: '#6366F1' },
  //     1: { color: '#A5B4FC' },
  //   },
  //   pieSliceText: 'none',
  //   tooltip: { trigger: 'focus' },
  // };

//   const stats = [
//     { title: 'Total Promoters', value: '1,234', change: '+12%', color: 'text-green-500' },
//     { title: 'Conversion rate', value: '23.5%', change: '-2.4%', color: 'text-red-500' },
//     { title: 'Revenue Generated', value: '$12,345', change: '+8.7%', color: 'text-green-500' },
//     { title: 'Active Campaigns', value: '3' },
//   ];

//   const metricCards = [
//     { label: 'Repeat Referral Rate', value: 42, color: 'green' },
//     { label: 'Referral Engagement Rate', value: 67, color: 'red' },
//     { label: 'Churn Rate of Leads', value: 28, color: 'blue' },
//     { label: 'Upsell Rate of Leads', value: 19, color: 'purple' },
//   ];

//   const leaderboardData = [
//     { rank: 1, promoterName: 'Emery Dokidis', conversionRate: 150, referralsSent: 80, revenueGenerated: '$1,200' },
//     { rank: 2, promoterName: 'Kadin Lipshutz', conversionRate: 132, referralsSent: 90, revenueGenerated: '$980' },
//     { rank: 3, promoterName: 'Randy Culhane', conversionRate: 110, referralsSent: 60, revenueGenerated: '$880' },
//     { rank: 4, promoterName: 'Jaxson Vaccaro', conversionRate: 100, referralsSent: 85, revenueGenerated: '$500' },
//     { rank: 5, promoterName: 'Jocelyn Levin', conversionRate: 50, referralsSent: 30, revenueGenerated: '$600' },
//     { rank: 6, promoterName: 'Maren Septimus', conversionRate: 80, referralsSent: 35, revenueGenerated: '$200' },
//     { rank: 7, promoterName: 'Haylie Saris', conversionRate: 120, referralsSent: 55, revenueGenerated: '$150' },
//     { rank: 8, promoterName: 'Randy Herwitz', conversionRate: 110, referralsSent: 90, revenueGenerated: '$880' },
//   ];

//   const activitiesData = [
//     { activity: 'Julian earned $10', date: '28-4-2024', time: '10:30 AM' },
//     { activity: 'John Doe signed up from your referral link', date: '29-4-2024', time: '9:45 AM' },
//     { activity: 'You reached 50 referrals milestone!', date: '30-4-2024', time: '8:20 AM' },
//     { activity: 'You updated your referral campaign', date: '31-4-2024', time: '7:00 AM' },
//   ];

//   return (
//     <div className="p-6 space-y-6">
//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//         {stats.map((stat, i) => (
//           <div key={i} className="bg-white rounded-xl shadow-md p-4">
//             <p className="text-sm text-gray-500">{stat.title}</p>
//             <p className="text-xl font-bold">{stat.value}</p>
//             {stat.change && (
//               <p className={`text-xs mt-1 ${stat.color}`}>
//                 {stat.change} vs last month
//               </p>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Metric Progress Circles */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//         {metricCards.map((metric, i) => (
//           <div key={i} className="bg-white shadow rounded-xl p-4 text-center">
//             <p className="text-sm font-semibold mb-2">{metric.label}</p>
//             <div
//               className={`radial-progress text-${metric.color}-500`}
//               style={{ '--value': metric.value }}
//             >
//               {metric.value}%
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Chart & Conversion Pie */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {/* Line Chart */}
//         <div className="col-span-2 bg-white rounded-xl shadow p-4">
//           <div className="flex justify-between items-center mb-2">
//             <p className="font-semibold">Promoter Performance Over Time</p>
//             <select className="select select-sm select-bordered">
//               <option>Last 6 months</option>
//             </select>
//           </div>
//           <Chart
//             chartType="LineChart"
//             width="100%"
//             height="250px"
//             data={lineChartData}
//             options={{ legend: 'none', curveType: 'function', colors: ['#6366F1'] }}
//           />
//         </div>

//         {/* Conversion Pie & Channel Info */}
//         <div className="bg-white rounded-xl shadow p-4 space-y-4">
//           <div>
//             <p className="font-semibold mb-2">Conversion Success Rate</p>
//             <Chart
//               chartType="PieChart"
//               data={pieChartData}
//               options={pieOptions}
//               width="100%"
//               height="150px"
//             />
//           </div>
//           <div>
//             <p className="font-semibold">Top Performing Channel</p>
//             <div className="flex flex-wrap gap-2 mt-2">
//               <div className="badge bg-orange-100 text-orange-600">Facebook 78%</div>
//               <div className="badge bg-pink-100 text-pink-600">Twitter 45%</div>
//               <div className="badge bg-blue-100 text-blue-600">LinkedIn 23%</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Recent Activities */}
//       <div className="bg-white shadow-md rounded-lg p-4">
//         <h2 className="text-lg font-semibold mb-3 text-gray-700">Recent Activities</h2>
//         <ul className="divide-y divide-gray-200">
//           {activitiesData.map((item, i) => (
//             <li key={i} className="py-3 flex items-center justify-between">
//               <p className="text-sm text-gray-600">{item.activity}</p>
//               <div className="text-right text-xs text-gray-500">
//                 <p>{item.date}</p>
//                 <p>{item.time}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Leaderboard Table */}
//       <div className="overflow-x-auto">
//         <h2 className="text-lg font-semibold mb-3 text-gray-700">LeaderBoard Table View</h2>
//         <table className="min-w-full bg-white shadow-md rounded-lg">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
//               <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Promoter Name</th>
//               <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Rate</th>
//               <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referrals Sent</th>
//               <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue Generated</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {leaderboardData.map((item) => (
//               <tr key={item.rank}>
//                 <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.rank}</td>
//                 <td className="px-4 py-3 text-sm text-gray-500">{item.promoterName}</td>
//                 <td className="px-4 py-3 text-sm text-gray-500">{item.conversionRate}</td>
//                 <td className="px-4 py-3 text-sm text-gray-500">{item.referralsSent}</td>
//                 <td className="px-4 py-3 text-sm text-gray-500">{item.revenueGenerated}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

export default function ReferralDashboard() {
  // State for animated values
  const [totalPromoters, setTotalPromoters] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);
  const [revenue, setRevenue] = useState(0);
  
  // Animation effects
  useEffect(() => {
    const animateValues = () => {
      // Animate total promoters
      let count = 0;
      const promoterInterval = setInterval(() => {
        count += 25;
        if (count >= 1234) {
          clearInterval(promoterInterval);
          setTotalPromoters(1234);
        } else {
          setTotalPromoters(count);
        }
      }, 20);

      // Animate conversion rate
      let rate = 0;
      const rateInterval = setInterval(() => {
        rate += 0.5;
        if (rate >= 23.5) {
          clearInterval(rateInterval);
          setConversionRate(23.5);
        } else {
          setConversionRate(rate);
        }
      }, 30);

      // Animate revenue
      let rev = 0;
      const revenueInterval = setInterval(() => {
        rev += 250;
        if (rev >= 12345) {
          clearInterval(revenueInterval);
          setRevenue(12345);
        } else {
          setRevenue(rev);
        }
      }, 20);
    };

    animateValues();
  }, []);

  // Fixed chart data with validation
  const performanceData = [
    ['Month', 'Performance'],
    ['Jan', 20],
    ['Feb', 25],
    ['Mar', 30],
    ['Apr', 35],
    ['May', 40],
    ['Jun', 50],
  ];

  // Ensure no negative values in pie charts
  const referralPieData = [
    ['Type', 'Percentage'],
    ['Repeat Referral', 42],
    ['Engagement', 67],
    ['Other', Math.max(0, 100 - 42 - 67)], // Ensure not negative
  ];

  const leadPieData = [
    ['Type', 'Percentage'],
    ['Churn Rate', 28],
    ['Upsell Rate', 19],
    ['Other', Math.max(0, 100 - 28 - 19)], // Ensure not negative
  ];

  const conversionPieData = [
    ['Type', 'Percentage'],
    ['Referrals sent', 57],
    ['Converted', 42],
  ];

  // Chart options
  const performanceOptions = {
    legend: 'none',
    curveType: 'function',
    colors: ['#6366F1'],
    animation: {
      duration: 1000,
      easing: 'out',
      startup: true,
    },
  };

  const referralPieOptions = {
    pieHole: 0.4,
    legend: 'none',
    slices: {
      0: { color: '#0088FE' }, // Blue for Repeat Referral
      1: { color: '#00C49F' }, // Green for Engagement
      2: { color: '#FFBB28' }, // Yellow for Other
    },
    pieSliceText: 'none',
    tooltip: { trigger: 'focus' },
    animation: {
      duration: 1000,
      easing: 'out',
      startup: true,
    },
  };

  const leadPieOptions = {
    pieHole: 0.4,
    legend: 'none',
    slices: {
      0: { color: '#FF5733' }, // Red for Churn
      1: { color: '#33FF57' }, // Green for Upsell
      2: { color: '#3357FF' }, // Blue for Other
    },
    pieSliceText: 'none',
    tooltip: { trigger: 'focus' },
    animation: {
      duration: 1000,
      easing: 'out',
      startup: true,
    },
  };

  const conversionPieOptions = {
    pieHole: 0.5,
    legend: 'none',
    slices: {
      0: { color: '#6366F1' }, // Indigo for Referrals sent
      1: { color: '#A5B4FC' }, // Lighter indigo for Converted
    },
    pieSliceText: 'none',
    tooltip: { trigger: 'focus' },
    animation: {
      duration: 1000,
      easing: 'out',
      startup: true,
    },
  };

  const stats = [
    { 
      title: 'Total Promoters', 
      value: totalPromoters.toLocaleString(), 
      change: '+12%', 
      color: 'text-green-500' 
    },
    { 
      title: 'Conversion rate', 
      value: `${conversionRate.toFixed(1)}%`, 
      change: '-2.4%', 
      color: 'text-red-500' 
    },
    { 
      title: 'Revenue Generated', 
      value: `$${revenue.toLocaleString()}`, 
      change: '+8.7%', 
      color: 'text-green-500' 
    },
    { title: 'Active Campaigns', value: '3' },
  ];

  // Fixed metric cards with direct color values
  const metricCards = [
    { label: 'Repeat Referral Rate', value: 42, color: '#0088FE', textColor: 'text-blue-500' },
    { label: 'Referral Engagement Rate', value: 67, color: '#00C49F', textColor: 'text-green-500' },
    { label: 'Churn Rate of Leads', value: 28, color: '#FF5733', textColor: 'text-red-500' },
    { label: 'Upsell Rate of Leads', value: 19, color: '#9333EA', textColor: 'text-purple-500' },
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

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-4">
            <p className="text-sm text-gray-500">{stat.title}</p>
            <p className="text-xl font-bold">{stat.value}</p>
            {stat.change && (
              <div className="flex items-center">
                <span className={`text-xs mt-1 ${stat.color}`}>
                  {stat.change} vs last month
                </span>
                {stat.change.includes('+') ? (
                  <svg className="w-4 h-4 ml-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 ml-1 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Metric Progress Circles - Fixed color issues */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {metricCards.map((metric, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-4 text-center">
            <p className="text-sm font-semibold mb-2">{metric.label}</p>
            <Chart
              chartType="PieChart"
              data={[
                ['Metric', 'Value'],
                ['Completed', metric.value],
                ['Remaining', Math.max(0, 100 - metric.value)], // Ensure not negative
              ]}
              options={{
                pieHole: 0.8,
                legend: 'none',
                slices: {
                  0: { color: metric.color }, // Use direct color value
                  1: { color: '#E5E7EB' }, // Light gray for remaining
                },
                pieSliceText: 'none',
                tooltip: { trigger: 'none' },
                animation: {
                  duration: 1000,
                  easing: 'out',
                  startup: true,
                },
              }}
              width="100%"
              height="150px"
            />
            <p className={`text-xl font-bold ${metric.textColor} mt-[-60px]`}>{metric.value}%</p>
          </div>
        ))}
      </div>

      {/* Chart & Conversion Pie */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Chart & Conversion Pie */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 col-span-3">
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
            options={{
              legend: "none",
              curveType: "function",
              colors: ["#6366F1"],
              pointSize: 6,
              hAxis: { title: "Month" },
              vAxis: { title: "Performance", minValue: 0 },
            }}
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
              <div className="badge bg-orange-100 text-orange-600">
                Facebook 78%
              </div>
              <div className="badge bg-pink-100 text-pink-600">
                Twitter 45%
              </div>
              <div className="badge bg-blue-100 text-blue-600">
                LinkedIn 23%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Conversion Success Rate with error handling */}
      
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