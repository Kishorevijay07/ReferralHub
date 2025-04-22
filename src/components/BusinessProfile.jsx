import React, { useState } from "react";

export default function BusinessIdentityForm({ handleNext }) {
  const [logoPreview, setLogoPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setLogoPreview(imageUrl);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-center mb-1">Build Your Business Identity</h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Help us tailor the referral experience by adding key details about your business
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Business Logo Upload */}
        <div className="col-span-2 space-y-2">
          <label className="block text-sm font-medium">Business Logo</label>
          {logoPreview && (
            <img src={logoPreview} alt="Logo Preview" className="h-20 w-20 object-cover rounded-md border" />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 
              file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 
              hover:file:bg-blue-100 cursor-pointer"
          />
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Business Description</label>
          <textarea
            className="w-full border rounded-md p-2"
            placeholder="Enter business description..."
          />
        </div>

        {/* Other Inputs */}
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
