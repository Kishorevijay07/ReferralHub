import React, { useState } from "react";
import { Eye, UserRoundPlus, BadgeDollarSign, ClipboardList } from "lucide-react";

// Dummy data for All Payouts and Disputes
const payouts = [
  {
    id: "#P-1048",
    name: "Emery Dokidis",
    points: "500 pts",
    date: "28-4-2024",
    reward: "Spring Boost",
    status: "Paid",
  },
  {
    id: "#P-1047",
    name: "Kadin Lipshutz",
    points: "250 pts",
    date: "27-5-2024",
    reward: "Summer Referral Program",
    status: "Paid",
  },
  {
    id: "#P-1046",
    name: "Randy Culhane",
    points: "300 pts",
    date: "29-5-2024",
    reward: "Early Bird Special",
    status: "Disputed",
  },
  {
    id: "#P-1045",
    name: "Jaxson Vaccaro",
    points: "100 pts",
    date: "30-6-2024",
    reward: "Early Bird Special",
    status: "Paid",
  },
  {
    id: "#P-1044",
    name: "Jocelyn Levin",
    points: "200 pts",
    date: "01-7-2024",
    reward: "Summer Referral Program",
    status: "Disputed",
  },
  {
    id: "#P-1043",
    name: "Maren Septimus",
    points: "300 pts",
    date: "03-7-2024",
    reward: "Summer Referral Program",
    status: "Paid",
  },
  {
    id: "#P-1042",
    name: "Haylie Saris",
    points: "220 pts",
    date: "05-7-2024",
    reward: "Spring Boost",
    status: "Paid",
  },
  {
    id: "#P-1041",
    name: "Randy Herwitz",
    points: "400 pts",
    date: "10-7-2024",
    reward: "Spring Boost",
    status: "Disputed",
  },
];
const disputes = [
  {
    id: "DPT-001",
    name: "Jane Doe",
    points: 150,
    date: "2025-04-10",
    reward: "Referred John Smith",
    status: "Under Review",
  },
  {
    id: "DPT-002",
    name: "Alex Johnson",
    points: 200,
    date: "2025-04-12",
    reward: "Shared on LinkedIn",
    status: "Resolved",
  },
  {
    id: "DPT-003",
    name: "Maya Patel",
    points: 100,
    date: "2025-04-15",
    reward: "Referred Emily Chen",
    status: "Under Review",
  },
  {
    id: "DPT-004",
    name: "Chris Evans",
    points: 180,
    date: "2025-04-17",
    reward: "Completed Survey",
    status: "Resolved",
  },
  {
    id: "DPT-005",
    name: "Sophia Lee",
    points: 250,
    date: "2025-04-18",
    reward: "Referred Daniel Kim",
    status: "Under Review",
  },
];


export default function PayoutsDashboard() {
  const [activeTab, setActiveTab] = useState("allPayouts");
  const [enabled, setEnabled] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showDisputeForm, setShowDisputeForm] = useState(false);
  const [disputeSubmitted, setDisputeSubmitted] = useState(false);


  // const [showDisputeForm, setShowDisputeForm] = useState(false);
const [showViewDetails, setShowViewDetails] = useState(true);
  const renderStatusBadge = (status) => {
    const base = "px-3 py-1 rounded-full text-xs font-medium";
    if (status === "Paid" || status === "Resolved") return `${base} bg-green-100 text-green-700`;
    return `${base} bg-orange-100 text-orange-700`;
  };

  return (
    <div className="p-8 space-y-6">
      {/* Top Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-6 rounded-xl shadow">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-gray-200 p-3">
            <UserRoundPlus className="w-5 h-5 text-black" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Points Given</p>
            <p className="text-xl font-bold text-black">12,500</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border-l border-gray-200 pl-6">
          <div className="rounded-full bg-rose-100 p-3">
            <BadgeDollarSign className="w-5 h-5 text-black" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Current Point Balance</p>
            <p className="text-xl font-bold text-black">1,250</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border-l border-gray-200 pl-6">
          <div className="rounded-full bg-pink-300 p-3">
            <ClipboardList className="w-5 h-5 text-black" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Last Points Transfer</p>
            <p className="text-lg font-bold text-black">April 9, 2025</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex items-center border-b border-gray-200 mb-4">
          <button
            onClick={() => setActiveTab("allPayouts")}
            className={`px-4 py-2 font-semibold ${
              activeTab === "allPayouts"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-black"
            }`}
          >
            All Payouts
          </button>
          <button
            onClick={() => setActiveTab("disputes")}
            className={`px-4 py-2 font-semibold ${
              activeTab === "disputes"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Disputes
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-4 py-2 font-semibold ${
              activeTab === "settings"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Payout Settings
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "allPayouts" && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">All Payouts</h2>
              <div className="flex items-center gap-2">
                <button className="border border-gray-300 rounded-md px-3 py-1 text-sm hover:bg-gray-50">
                  Filter
                </button>
                <button
                  className="bg-blue-600 text-white rounded-md px-3 py-1 text-sm hover:bg-blue-700"
                  onClick={() => setShowModal(true)}
                >
                  + New Payout
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead className="text-gray-500 border-b bg-gray-50">
                  <tr>
                    <th className="py-3 px-4">Payout ID</th>
                    <th className="py-3 px-4">Promoter Name</th>
                    <th className="py-3 px-4">Points</th>
                    <th className="py-3 px-4">Reward Date</th>
                    <th className="py-3 px-4">Reward Earned For</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {payouts.map((p, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{p.id}</td>
                      <td className="py-3 px-4">{p.name}</td>
                      <td className="py-3 px-4">{p.points}</td>
                      <td className="py-3 px-4">{p.date}</td>
                      <td className="py-3 px-4">{p.reward}</td>
                      <td className="py-3 px-4">
                        <span className={renderStatusBadge(p.status)}>{p.status}</span>
                      </td>
                      <td className="py-3 px-4 flex items-center gap-2 text-sm text-blue-600">
                        <Eye className="w-4 h-4 cursor-pointer text-gray-700 hover:text-black" />
                        |
                        <span className="cursor-pointer hover:underline">
                          {p.status === "Disputed" ? "Track Dispute" : "Request Dispute"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
         {/* Modal */}
         {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
    <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative border border-gray-200">
      {/* Close Button */}
      <button
        className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        onClick={() => {
          setShowModal(false);
          setShowDisputeForm(false); // Reset form state on close
        }}
      >
        &times;
      </button>

      {/* Toggle Views Based on State */}
      {!showDisputeForm && !disputeSubmitted ? (
        <>
          {/* View Details */}
          <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">View Details</h3>

          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex justify-between"><span className="font-medium">Payout ID:</span><span>#P-1048</span></div>
            <div className="flex justify-between"><span className="font-medium">Promoter Name:</span><span>Emery Dokidis</span></div>
            <div className="flex justify-between"><span className="font-medium">Points:</span><span>500 points</span></div>
            <div className="flex justify-between"><span className="font-medium">Reward Date:</span><span>Apr 5, 2025</span></div>
            <div className="flex justify-between"><span className="font-medium">Reward Earned For:</span><span>Spring Boost</span></div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Status:</span>
              <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">Paid</span>
            </div>
            <div className="flex justify-between"><span className="font-medium">Transaction ID:</span><span>TXN-90218371</span></div>
          </div>

          {/* Request Dispute Button */}
          <div className="mt-6">
            <button
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium py-2 rounded hover:opacity-90"
              onClick={() => setShowDisputeForm(true)}
            >
              Request Dispute
            </button>
          </div>
        </>
      ) : showDisputeForm && !disputeSubmitted ? (
        <>
  <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Dispute Form</h3>

  <form
  className="space-y-6 text-sm text-gray-700"
  onSubmit={(e) => {
    e.preventDefault();
    setDisputeSubmitted(true);
  }}
>
    {/* Row: Payout ID & Promoter Name */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block mb-1 text-gray-600">Payout ID</label>
        <input
          type="text"
          value="#P-1048"
          readOnly
          className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100"
        />
      </div>
      <div>
        <label className="block mb-1 text-gray-600">Promoter Name</label>
        <input
          type="text"
          value="Emery Dokidis"
          readOnly
          className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100"
        />
      </div>
    </div>

    {/* Reason for Dispute */}
    <div>
      <label className="block mb-1 text-gray-600">Reason for Dispute</label>
      <textarea
        rows="4"
        className="w-full border border-gray-300 rounded-md px-3 py-2"
        placeholder="Write here..."
      ></textarea>
    </div>

    {/* Upload Section */}
    <div>
      <label className="block mb-2 text-gray-600">Upload Evidence</label>
      <div className="w-full border border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
        <div className="flex flex-col items-center space-y-2">
          <svg
            className="w-10 h-10 text-blue-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 15a4 4 0 004 4h10a4 4 0 004-4M7 10l5-5m0 0l5 5m-5-5v12"
            />
          </svg>
          <p className="text-sm">Drag and drop files here</p>
          <p className="text-sm text-gray-400">or</p>
          <button
            type="button"
            className="px-4 py-1 text-sm border border-blue-500 text-blue-600 rounded hover:bg-blue-50"
          >
            Browse Files
          </button>
        </div>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-between gap-4">
      <button
        type="button"
        onClick={() => setShowDisputeForm(false)}
        className="w-1/2 border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-100"
      >
        Back
      </button>
      <button
        type="submit"
        className="w-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-md hover:opacity-90"
      >
        Submit Dispute Request
      </button>
    </div>
  </form>
</>

) : (
  <>
  <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">View Details</h3>
  <div className="space-y-4 text-sm text-gray-700">
    <div className="flex justify-between"><span className="font-medium">Dispute ID:</span><span>D-3014</span></div>
    <div className="flex justify-between"><span className="font-medium">Payout ID:</span><span>#P-1048</span></div>
    <div className="flex justify-between"><span className="font-medium">Promoter Name:</span><span>Emery Dokidis</span></div>
    <div className="flex justify-between"><span className="font-medium">Points:</span><span>500 points</span></div>
    <div className="flex justify-between"><span className="font-medium">Submitted on:</span><span>Apr 5, 2025</span></div>
    <div className="flex justify-between"><span className="font-medium">Reward Earned For:</span><span>Spring Boost</span></div>
    <div className="flex justify-between items-center">
      <span className="font-medium">Status:</span>
      <span className="bg-orange-100 text-orange-600 text-xs font-medium px-2 py-1 rounded">Under Review</span>
    </div>
    <div className="flex justify-between"><span className="font-medium">Reason Provided:</span><span>Promoter claimed reward not received</span></div>
  </div>
</>

)}
    </div>
  </div>
)}

        {activeTab === "disputes" && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Disputes</h2>
              <button className="border border-gray-300 rounded-md px-3 py-1 text-sm hover:bg-gray-50">
                Filter
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead className="text-gray-500 border-b bg-gray-50">
                  <tr>
                    <th className="py-3 px-4">Dispute ID</th>
                    <th className="py-3 px-4">Promoter Name</th>
                    <th className="py-3 px-4">Points</th>
                    <th className="py-3 px-4">Submitted On</th>
                    <th className="py-3 px-4">Reward Earned For</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {disputes.map((d, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{d.id}</td>
                      <td className="py-3 px-4">{d.name}</td>
                      <td className="py-3 px-4">{d.points}</td>
                      <td className="py-3 px-4">{d.date}</td>
                      <td className="py-3 px-4">{d.reward}</td>
                      <td className="py-3 px-4">
                        <span className={renderStatusBadge(d.status)}>{d.status}</span>
                      </td>
                      <td className="py-3 px-4 flex items-center gap-2 text-sm text-blue-600">
                        <Eye className="w-4 h-4 cursor-pointer text-gray-700 hover:text-black" />
                        {d.status === "Under Review" && "|"}
                        {d.status === "Under Review" && (
                          <span className="cursor-pointer hover:underline">Resolve</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === "settings" && (
          <div className="space-y-6 px-4 py-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-md font-medium">Preload Money</p>
                <p className="text-sm text-gray-500">Use Points to Reward Promoters Instantly</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={enabled}
        onChange={() => setEnabled(!enabled)}
      />
      <div className="w-11 h-6 bg-gray-200 peer-checked:bg-green-500 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
    </label>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">Current Point Balance: <span className="text-blue-600 font-bold text-lg">1,250</span> Points</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Enter Amount</label>
              <input
                type="number"
                placeholder="Enter amount..."
                className="w-full border rounded-lg p-2"
              />
              <p className="text-xs text-gray-500 mt-1">You’ll receive 10 points per $1</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Payment Methods</label>
              <div className="flex flex-wrap gap-4">
                {["Credit/Debit/ATM Card", "Paypal account", "Bank Transfer", "UPI"].map((method) => (
                  <label key={method} className="flex items-center gap-2">
                    <input type="radio" name="payment" defaultChecked={method === "Credit/Debit/ATM Card"} />
                    {method}
                  </label>
                ))}
              </div>
            </div>

            <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-lg mt-4 hover:opacity-90">
              Buy Points
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
