import React, { useEffect, useState } from 'react';
import { getSubscriptionDetails } from './../API/subscriptionApi';

const SubscriptionAndBilling = () => {
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    getSubscriptionDetails().then((res) => {
      if (res.success) {
        setSubscription(res.data);
      }
    });
  }, []);

  if (!subscription) return <p>Loading...</p>;

  const {
    currentPlan,
    paymentMethods,
    cards,
    billingHistory,
  } = subscription;

  const progress =
    (currentPlan.daysUsed / currentPlan.totalDays) * 100;

  return (
    <div className="space-y-10 text-sm text-gray-700">
      {/* Current Plan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <h3 className="font-semibold text-base">Current Plan</h3>
          <p>Your Current Plan is <span className="font-medium">{currentPlan.name}</span></p>
          <p className="text-gray-500">{currentPlan.description}</p>
          <p className="text-gray-500">
            Active until <span className="font-medium text-black">{currentPlan.renewDate}</span><br />
            We will send you a notification upon Subscription expiration
          </p>
          <p>
            <span className="font-medium">{currentPlan.price} Per Month</span>{' '}
            {currentPlan.isPopular && (
              <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded">Popular</span>
            )}
          </p>
          <p className="text-gray-500">Standard plan for small to medium businesses</p>
          <div className="flex space-x-4 pt-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:opacity-90">Upgrade Plan</button>
            <button className="bg-red-100 text-red-500 px-4 py-2 rounded hover:bg-red-200">Cancel Subscription</button>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>Days</span>
            <span>{currentPlan.daysUsed} of {currentPlan.totalDays} Days</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-gray-500">{currentPlan.totalDays - currentPlan.daysUsed} days remaining until your plan requires update</p>
        </div>
      </div>

      <hr />

      {/* Payment Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="font-semibold text-base">Payment Methods</h3>
          <div className="flex items-center space-x-4">
            {paymentMethods.map((method, i) => (
              <label key={i} className="flex items-center space-x-2">
                <input type="radio" name="payment" defaultChecked={i === 0} />
                <span>{method === 'card' ? 'Credit/Debit/ATM Card' : 'Paypal Account'}</span>
              </label>
            ))}
          </div>
          <div className="space-y-3">
            <input type="text" placeholder="Card Number" className="w-full border p-2 rounded" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="border p-2 rounded" />
              <input type="text" placeholder="CVV" className="border p-2 rounded" />
            </div>
            <input type="text" placeholder="MM/YY" className="border p-2 rounded w-full" />
            <label className="flex items-center space-x-2 text-sm pt-2">
              <input type="checkbox" />
              <span>Save card for future billing?</span>
            </label>
            <div className="flex space-x-4 pt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:opacity-90">Save Changes</button>
              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        </div>

        {/* My Cards */}
        <div className="space-y-4">
          <h3 className="font-semibold text-base">My Cards</h3>
          <div className="space-y-4">
            {cards.map((card, i) => (
              <div key={i} className="bg-gray-50 border rounded p-4 space-y-1">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center space-x-2">
                      {card.img ? (
                        <img src={card.img} alt="card" className="w-8 h-5 object-contain" />
                      ) : (
                        <div className={`w-5 h-5 ${card.color} rounded-full`} />
                      )}
                      <span className="font-medium">{card.name}</span>
                      {card.label && (
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">{card.label}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{card.mask}</p>
                  </div>
                  <div className="space-x-2">
                    <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded hover:bg-gray-200">Edit</button>
                    <button className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded hover:bg-red-200">Delete</button>
                  </div>
                </div>
                <p className="text-xs text-gray-500">Card expires at {card.expires}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="space-y-4">
        <h3 className="font-semibold text-base">Billing History</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-500 uppercase border-b">
              <tr>
                <th className="px-4 py-3">Plan Name</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Issued Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {billingHistory.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-3">{item.plan}</td>
                  <td className="px-4 py-3">{item.amount}</td>
                  <td className="px-4 py-3">{item.date}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${item.color}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="p-1 hover:text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center text-sm text-gray-500 pt-4">
          <span>Showing 1 to 5 of {billingHistory.length} entries</span>
          <div className="flex items-center space-x-1">
            <button className="px-2 py-1 rounded bg-gray-100 text-gray-400" disabled>&lt;</button>
            {[1, 2, 3, 4, 5].map(num => (
              <button
                key={num}
                className={`px-3 py-1 rounded ${num === 1 ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              >
                {num}
              </button>
            ))}
            <span className="px-2">...</span>
            <button className="px-3 py-1 rounded bg-gray-100">20</button>
            <button className="px-2 py-1 rounded bg-gray-100 text-gray-700">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionAndBilling;
