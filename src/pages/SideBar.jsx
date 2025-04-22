import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Payouts from './Payouts';
import AIAgent from './AIAgentConversation';
import Promotors from './Promotors';
import Leads from './Leads';
import PlatformSetup from './Platform';
import Headers from './Headers';
import MainDashboard from './Maindashboard';
import Help from './Help';
import Setting from "./Setting"
const SideBar = () => {
  const menuItems = [
    "Platform Setup",
    "AI Agent",
    "Dashboard",
    "Campaign",
    "Promoters",
    "Leads",
    "Payouts",
    "Settings",
    "Help",
  ];

  const [activeItem, setActiveItem] = useState("Platform Setup");

  const renderContent = () => {
    switch (activeItem) {
      case "Platform Setup":
        return <PlatformSetup />;
      case "AI Agent":
        return <AIAgent />;
      case "Dashboard":
        return <Dashboard />;
      case "Campaign":
        return <MainDashboard />;
      case "Payouts":
        return <Payouts />;
      case "Leads":
        return <Leads />;
      case "Promoters":
        return <Promotors />;
      case "Settings":
        return <Setting/>
      case "Help":
        return <Help/>
      default:
        return <div className="p-4">Coming Soon...</div>;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Top Header */}
      <Headers item={activeItem}/>
      {/* Sidebar + Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-56 bg-white border-r p-4 space-y-4 overflow-y-auto">
          {menuItems.map((item) => (
            <div
              key={item}
              onClick={() => setActiveItem(item)}
              className={`px-3 py-2 rounded-lg cursor-pointer text-sm flex items-center gap-2 transition-all ${
                activeItem === item
                  ? "bg-blue-100 text-blue-600 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item}
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  );
};

export default SideBar;
