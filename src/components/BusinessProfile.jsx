import React from "react";

export default function BusinessIdentityForm({ handleNext }) {
  return (

    
    <div>
      <h2 className="text-lg font-semibold text-center mb-1">Build Your Business Identity</h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Help us tailor the referral experience by adding key details about your business
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Business Logo</label>
          <button className="px-4 py-2 border rounded-md">Choose Image</button>
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Business Description</label>
          <textarea
            className="w-full border rounded-md p-2"
            placeholder="Enter business description..."
          />
        </div>

        <input className="border rounded-md p-2" placeholder="Enter business name" />
        <input className="border rounded-md p-2" placeholder="e.g., robert.fox@myemail.com" />
        <input className="border rounded-md p-2" placeholder="Enter phone no." />
        <select className="border rounded-md p-2">
          <option>Select</option>
        </select>
        <input className="border rounded-md p-2" placeholder="Enter services.." />
        <input className="border rounded-md p-2" placeholder="Enter products..." />
        <select className="border rounded-md p-2">
          <option>Select (Optional)</option>
        </select>
        <select className="border rounded-md p-2">
          <option>Select</option>
        </select>
        <select className="border rounded-md p-2">
          <option>Select</option>
        </select>
        <input className="border rounded-md p-2" placeholder="Enter zip code" />
      </div>

      <button
        className="mt-6 px-6 py-2 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}
