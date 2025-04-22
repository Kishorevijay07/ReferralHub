import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import man2image from './../images/man2image.jpeg';

const Headers = ({ item }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const menuRef = useRef();
  const notifRef = useRef();
  const navigate = useNavigate();

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotification(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 border-b bg-white">
      <h1 className="text-xl font-semibold">{item}</h1>

      <div className="flex items-center space-x-4 relative">
        {/* Notification Icon */}
        <div
          className="relative cursor-pointer"
          ref={notifRef}
          onMouseEnter={() => setShowNotification(true)}
          onMouseLeave={() => setShowNotification(false)}
        >
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          <svg
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405C18.21 14.79 18 14.21 18 13.586V11a6 6 0 10-12 0v2.586c0 .624-.21 1.204-.595 1.621L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>

          {/* Notification Popover */}
          {showNotification && (
            <div className="absolute top-8 right-0 w-56 bg-white shadow-lg border rounded-md p-3 text-sm z-50">
              <p className="font-medium mb-2">Notifications</p>
              <ul className="space-y-1">
                <li className="text-gray-700">You received a new message</li>
                <li className="text-gray-700">Campaign update posted</li>
                <li className="text-gray-700">Reminder: Submit your report</li>
              </ul>
            </div>
          )}
        </div>

        {/* Profile Section */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center space-x-2 cursor-pointer"
          ref={menuRef}
        >
          <img
            src={man2image}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-right">
            <p className="text-sm font-medium">Kadin Stanton</p>
            <p className="text-xs text-gray-500">kadinstanton@gmail.com</p>
          </div>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-14 right-0 bg-white border rounded-md shadow-lg w-48 z-50">
            <ul className="py-1 text-sm text-gray-700">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  navigate('/settings'); // navigate to settings route
                  setMenuOpen(false);
                }}
              >
                View Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Headers;
