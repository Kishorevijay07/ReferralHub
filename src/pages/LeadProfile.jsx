import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Mail, Phone, User, MessageCircle } from "lucide-react";

export default function LeadProfile() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const lead = state?.lead;

  const [status, setStatus] = useState(lead?.status || "Pending");

  if (!lead) {
    return (
      <div className="p-8">
        <p>No lead data found.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Back Button */}
      <button
        className="text-sm text-blue-600 hover:underline mb-4 flex items-center"
        onClick={() => navigate("/")}
      >
        &larr; Back
      </button>

      {/* Lead Card */}
      <div className="border-2 border-pink-400 rounded-xl p-6 flex justify-between items-start max-w-5xl mx-auto">
        <div className="flex items-start gap-5">
          {/* Avatar */}
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-blue-600" />
          </div>

          {/* Lead Info */}
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">{lead.name}</h3>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Mail className="w-4 h-4" />
              <span>{lead.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Phone className="w-4 h-4" />
              <span>{lead.contact}</span>
            </div>
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-4 mt-1">
          <MessageCircle className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
          <Mail className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
        </div>
      </div>

      {/* Dropdown */}
      <div className="max-w-5xl mx-auto mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Change Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
}
