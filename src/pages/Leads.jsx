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
];

export default function Leads() {
  const [selectedLead, setSelectedLead] = useState(null);
  const [status, setStatus] = useState("Pending");

  const handleViewProfile = (lead) => {
    setSelectedLead(lead);
    setStatus(lead.status);
  };

  const handleBack = () => {
    setSelectedLead(null);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-6xl mx-auto">
      {selectedLead ? (
        <>
          <button
            className="text-sm text-blue-600 hover:underline mb-4"
            onClick={handleBack}
          >
            ← Back
          </button>

          <div className="border rounded-lg p-4 md:p-6 flex flex-col md:flex-row justify-between items-start gap-6 bg-white shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{selectedLead.name}</h3>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {selectedLead.email}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {selectedLead.contact}
                </p>
              </div>
            </div>
            <div className="flex gap-3 self-center md:self-start">
              <MessageCircle className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              <Mail className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Change Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border rounded-md px-3 py-2 w-full max-w-xs text-sm"
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </>
      ) : (
        <div className="bg-white rounded-xl shadow p-4 md:p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Leads</h2>
            <div className="flex flex-col sm:flex-row items-stretch gap-2">
              <input
                type="text"
                placeholder="Search leads..."
                className="input input-sm input-bordered w-full sm:w-48"
              />
              <select className="select select-sm select-bordered w-full sm:w-auto">
                <option disabled selected>
                  Change Status
                </option>
                <option>Pending</option>
                <option>Completed</option>
              </select>
              <button className="btn btn-sm btn-outline btn-primary">Filter</button>
            </div>
          </div>

          {/* Table for desktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="table table-zebra w-full text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="text-left p-3">#</th>
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3">Email</th>
                  <th className="text-left p-3">Contact</th>
                  <th className="text-left p-3">Coupon</th>
                  <th className="text-left p-3">Status</th>
                  <th className="text-left p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <input type="checkbox" className="checkbox checkbox-sm" />
                    </td>
                    <td
                      className="text-blue-600 hover:underline cursor-pointer p-3"
                      onClick={() => handleViewProfile(lead)}
                    >
                      {lead.name}
                    </td>
                    <td className="p-3">{lead.email}</td>
                    <td className="p-3">{lead.contact}</td>
                    <td className="p-3 font-mono text-xs">{lead.coupon}</td>
                    <td className="p-3">
                      <span
                        className={`badge badge-sm ${
                          lead.status === "Completed"
                            ? "badge-success"
                            : "badge-warning"
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-3">
                        <FaEye
                          className="w-4 h-4 text-gray-600 hover:text-black cursor-pointer"
                          onClick={() => handleViewProfile(lead)}
                        />
                        <FaRegCommentDots className="w-4 h-4 text-gray-600 hover:text-black cursor-pointer" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {leads.map((lead, idx) => (
              <div
                key={idx}
                className="border rounded-lg shadow-sm p-4 bg-white space-y-2"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">{lead.name}</h3>
                  <span
                    className={`badge badge-xs ${
                      lead.status === "Completed"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {lead.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{lead.email}</p>
                <p className="text-sm text-gray-600">{lead.contact}</p>
                <p className="text-xs text-gray-500">Coupon: {lead.coupon}</p>
                <div className="flex justify-end gap-4 pt-2">
                  <FaEye
                    className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer"
                    onClick={() => handleViewProfile(lead)}
                  />
                  <FaRegCommentDots className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
