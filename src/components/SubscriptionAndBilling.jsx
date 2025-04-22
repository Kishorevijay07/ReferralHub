import React, { useState } from "react";

export default function SubscriptionBillingUI() {
  const [cards, setCards] = useState([
    { name: "Tom McBride", number: "**** **** 9856", expires: "12/26", primary: true },
    { name: "Mildred Wagner", number: "**** **** 5896", expires: "10/27", primary: false },
  ]);

  const handleSave = () => {
    alert("Changes saved!");
  };

  const handleCancel = () => {
    alert("Cancelled!");
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this card?");
    if (confirmDelete) {
      setCards(cards.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="space-y-10 text-sm text-gray-700 p-6">
      {/* Current Plan Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <h3 className="font-semibold text-base">Current Plan</h3>
          <p>Your Current Plan is <span className="font-medium">Basic</span></p>
          <p className="text-gray-500">A simple start for everyone</p>
          <p className="text-gray-500">
            Active until <span className="font-medium text-black">May 09, 2025</span><br />
            We will send you a notification upon Subscription expiration
          </p>
          <p>
            <span className="font-medium">$25 Per Month</span>{' '}
            <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded">Popular</span>
          </p>
          <p className="text-gray-500">Standard plan for small to medium businesses</p>

          <div className="flex space-x-4 pt-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:opacity-90">Upgrade Plan</button>
            <button className="bg-red-100 text-red-500 px-4 py-2 rounded hover:bg-red-200">Cancel Subscription</button>
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>Days</span>
            <span>12 of 30 Days</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-blue-500 rounded-full" style={{ width: '40%' }}></div>
          </div>
          <p className="text-gray-500">18 days remaining until your plan requires update</p>
        </div>
      </div>

      <hr />

      {/* Payment Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="font-semibold text-base">Payment Methods</h3>

          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" defaultChecked />
              <span>Credit/Debit/ATM Card</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" />
              <span>Paypal account</span>
            </label>
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
              <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded hover:opacity-90">Save Changes</button>
              <button onClick={handleCancel} className="bg-gray-200 text-gray-600 px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        </div>

        {/* My Cards */}
        <div className="space-y-4">
          <h3 className="font-semibold text-base">My Cards</h3>

          <div className="space-y-4">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-gray-50 border rounded p-4 space-y-1">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                      <span className="font-medium">{card.name}</span>
                      {card.primary && (
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">Primary</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{card.number}</p>
                  </div>
                  <div className="space-x-2">
                    <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded hover:bg-gray-200">Edit</button>
                    <button onClick={() => handleDelete(idx)} className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded hover:bg-red-200">Delete</button>
                  </div>
                </div>
                <p className="text-xs text-gray-500">Card expires at {card.expires}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
