import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

export default function MarketingDashboard() {
  // State for chart data and loading status
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize chart data with proper structure
  useEffect(() => {
    try {
      setIsLoading(true);
      
      // Sample data - replace with your actual data source
      const data = [
        ['Month', 'Performance'],
        ['Jan', 20],
        ['Feb', 25],
        ['Mar', 30],
        ['Apr', 35],
        ['May', 40],
        ['Jun', 50],
      ];

      // Validate data structure
      if (!Array.isArray(data)) {
        throw new Error('Data must be an array');
      }
      if (data.length < 2) {
        throw new Error('Not enough data points');
      }
      data.forEach(row => {
        if (!Array.isArray(row)) {
          throw new Error('Each row must be an array');
        }
      });

      setChartData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setChartData([
        ['Month', 'Performance'],
        ['Error', 0]
      ]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Chart options
  const chartOptions = {
    legend: 'none',
    curveType: 'function',
    colors: ['#6366F1'],
    animation: {
      duration: 1000,
      easing: 'out',
      startup: true,
    },
    hAxis: {
      title: 'Month',
    },
    vAxis: {
      title: 'Performance',
    },
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold">Promoter Performance Over Time</p>
        <select className="select select-sm select-bordered">
          <option>Last 6 months</option>
        </select>
      </div>
      
      <div className="h-64">
        {isLoading ? (
          <div className="h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : error ? (
          <div className="h-full flex flex-col items-center justify-center text-red-500 p-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="font-medium">Chart Error</p>
            <p className="text-sm">{error}</p>
          </div>
        ) : (
          <Chart
            chartType="LineChart"
            width="100%"
            height="100%"
            data={chartData}
            options={chartOptions}
            chartPackages={['corechart']}
            loader={
              <div className="h-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
              </div>
            }
            errorElement={
              <div className="h-full flex items-center justify-center text-red-500">
                Failed to render chart
              </div>
            }
          />
        )}
      </div>
    </div>
  );
}