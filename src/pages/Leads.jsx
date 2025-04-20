import React, { useState } from "react";
import { FaEye, FaRegCommentDots } from "react-icons/fa";
import { Mail, Phone, User, MessageCircle } from "lucide-react";

const leads = [
  {
    name: "Emery Dokidis",
    email: "emerydoki@gmail.com",
    contact: "+97970174715",
    coupon: "SAVE10NOW",
    status: "Pending",
  },
  {
    name: "Kadin Lipshutz",
    email: "kadinlipshutz@gmail.com",
    contact: "+971501948279",
    coupon: "WELCOME15",
    status: "Pending",
  },
  {
    name: "Randy Culhane",
    email: "randyculhane@gmail.com",
    contact: "+971501598978",
    coupon: "EXCLUSIVE20",
    status: "Pending",
  },
  {
    name: "Jaxson Vaccaro",
    email: "jaxonvaccaro@gmail.com",
    contact: "+971522503635",
    coupon: "GETDEAL25",
    status: "Completed",
  },
  {
    name: "Jocelyn Levin",
    email: "jocelynlevin@gmail.com",
    contact: "+971554315300",
    coupon: "FIRSTORDER10",
    status: "Pending",
  },
  {
    name: "Maren Septimus",
    email: "marenseptimus@gmail.com",
    contact: "+971525620832",
    coupon: "SPECIALSAVE15",
    status: "Completed",
  },
  {
    name: "Haylie Saris",
    email: "hayluesaris@gmail.com",
    contact: "+971503328228",
    coupon: "LIMITED20",
    status: "Completed",
  },
  {
    name: "Randy Herwitz",
    email: "randyherwitz@gmail.com",
    contact: "+971554231522",
    coupon: "TRYUS10",
    status: "Pending",
  },
];

export default function Leads() {
  const [selectedLead, setSelectedLead] = useState(null);
  const [status, setStatus] = useState(selectedLead?.status || "Pending");

  const handleViewProfile = (lead) => {
    setSelectedLead(lead);
    setStatus(lead.status); // Set dropdown to lead's status
  };

  const handleBack = () => {
    setSelectedLead(null);
  };

  return (
    <div className="p-8">
      {selectedLead ? (
        <>
          {/* Back Button */}
          <button
            className="text-sm text-blue-600 hover:underline mb-4 flex items-center"
            onClick={handleBack}
          >
            &larr; Back
          </button>

          {/* Lead Profile Card */}
          <div className="border-2 border-pink-400 rounded-xl p-6 flex justify-between items-start max-w-4xl mx-auto">
            <div className="flex items-start gap-5">
              {/* Avatar */}
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-blue-600" />
              </div>

              {/* Info */}
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">{selectedLead.name}</h3>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Mail className="w-4 h-4" />
                  <span>{selectedLead.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Phone className="w-4 h-4" />
                  <span>{selectedLead.contact}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-1">
              <MessageCircle className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              <Mail className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            </div>
          </div>

          {/* Dropdown */}
          <div className="max-w-4xl mx-auto mt-6">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Change Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </>
      ) : (
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-3xl font-bold text-gray-800">Leads Overview</h2>
            <div className="flex flex-wrap items-center gap-3">
              <input
                type="text"
                placeholder="Search leads..."
                className="input input-bordered w-64"
              />
              <select className="select select-bordered">
                <option disabled selected>
                  Change Status
                </option>
                <option>Pending</option>
                <option>Completed</option>
              </select>
              <button className="btn btn-outline btn-primary">Filter</button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border rounded-xl">
            <table className="table table-zebra">
              <thead className="bg-base-200 text-base-content">
                <tr>
                  <th>
                    <input type="checkbox" className="checkbox checkbox-sm" />
                  </th>
                  <th>Lead Name</th>
                  <th>Email ID</th>
                  <th>Contact No.</th>
                  <th>Coupon Code</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-base-100 transition-all duration-200"
                  >
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        defaultChecked={idx < 2}
                      />
                    </td>
                    <td
                      className="text-blue-600 font-medium hover:underline cursor-pointer"
                      onClick={() => handleViewProfile(lead)}
                    >
                      {lead.name}
                    </td>
                    <td className="text-gray-700">{lead.email}</td>
                    <td className="text-gray-700">{lead.contact}</td>
                    <td className="text-gray-600 font-mono">{lead.coupon}</td>
                    <td>
                      <span
                        className={`badge text-sm ${
                          lead.status === "Completed"
                            ? "badge-success"
                            : "badge-warning"
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <div className="tooltip" data-tip="View Profile">
                          <button
                            className="btn btn-sm btn-ghost"
                            onClick={() => handleViewProfile(lead)}
                          >
                            <FaEye className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="tooltip" data-tip="Send follow-up message">
                          <button className="btn btn-sm btn-ghost">
                            <FaRegCommentDots className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
