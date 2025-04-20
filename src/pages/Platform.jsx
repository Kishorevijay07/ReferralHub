import React, { useState, useRef } from 'react';
import SideBar from './SideBar';
import BusinessIdentityForm from './../components/BusinessProfile'
const PlatformSetup = () => {
  const steps = [
    "Set Up Business Profile",
    "Sync Your Customer Data",
    "Set Up AI Agent Rules",
    "Set Up First Campaign",
  ];

  const [selectedStep, setSelectedStep] = useState(steps[0]);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [autoOfferHelp, setAutoOfferHelp] = useState(false);
  const [autoOfferHelp1, setAutoOfferHelp1] = useState(false);

  const [isZapierConnected, setIsZapierConnected] = useState(false);

  const handleZapierClick = () => {
    setIsZapierConnected(!isZapierConnected);
  };

  
  const [isCsvUploaded, setIsCsvUploaded] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [uploadedFileSize, setUploadedFileSize] = useState('');
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click(); // Triggers the file input
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
      setUploadedFileName(file.name);
      setUploadedFileSize((file.size / 1024).toFixed(2) + ' KB'); // Size in KB
      setIsCsvUploaded(true);
      // Further file processing (reading CSV, etc.) can be done here
    } else {
      alert('Please upload a valid CSV file.');
    }
  };

  const handleReupload = () => {
    setIsCsvUploaded(false);
    setUploadedFileName('');
    setUploadedFileSize('');
  };

  const handleRemove = () => {
    setIsCsvUploaded(false);
    setUploadedFileName('');
    setUploadedFileSize('');
  };

 

  const handleNext1 = () => {
    // Your next-step logic here
    console.log("Next clicked");
  };

  const handleNext = () => {
    if (!completedSteps.includes(selectedStep)) {
      setCompletedSteps([...completedSteps, selectedStep]);
    }
    const currentIndex = steps.indexOf(selectedStep);
    if (currentIndex < steps.length - 1) {
      setSelectedStep(steps[currentIndex + 1]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">


      <div className="flex flex-1">
      
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="flex gap-8 max-w-7xl mx-auto">
            <div className="w-72 bg-white p-6 rounded-xl border">
              <h3 className="text-base font-semibold text-blue-600 mb-2">Get Started with ReferralHub</h3>
              <p className="text-sm text-gray-500 mb-4">
                To get started with better referrals & rewards, complete your account setup in a few easy steps.
              </p>
              <div className="space-y-4">
                {steps.map((step) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 cursor-pointer"
                    onClick={() => setSelectedStep(step)}
                  >
                    <div
                      className={`w-5 h-5 mt-1 flex-shrink-0 rounded-full border text-white flex items-center justify-center text-xs font-bold ${
                        completedSteps.includes(step)
                          ? "bg-green-500 border-green-500"
                          : "border-gray-400 text-gray-400"
                      }`}
                    >
                      {completedSteps.includes(step) ? "✓" : ""}
                    </div>
                    <div>
                      <p
                        className={`text-sm ${
                          selectedStep === step ? "text-blue-600 font-semibold" : "text-gray-700"
                        }`}
                      >
                        {step}
                      </p>
                      <p className="text-xs text-gray-400">
                        {completedSteps.includes(step) ? "Completed" : "Not Started"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 bg-white p-8 rounded-xl border">
    
            {selectedStep === "Sync Your Customer Data" && (
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">
            Import Customer Data: Sync with Zapier or Upload CSV
          </h2>

          {/* Zapier Connected */}
          {isZapierConnected ? (
            <>
              <p className="text-green-600 text-sm mb-2">
                Zapier Integration Connected Successfully!
              </p>
              <button
                onClick={handleZapierClick}
                className="border border-blue-500 text-blue-600 font-medium px-4 py-2 rounded-md mb-4"
              >
                Disconnect with Zapier
              </button>
            </>
          ) : (
            <button
              onClick={handleZapierClick}
              className="border border-blue-500 text-blue-600 font-medium px-4 py-2 rounded-md mb-4"
            >
              Connect with Zapier
            </button>
          )}

          <div className="my-4 text-sm text-gray-500 text-center">or</div>

          {/* CSV Upload Section */}
          {isCsvUploaded ? (
        <div className="border-2 border-dashed border-gray-300 rounded-md p-6 mb-4 text-center">
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md border">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                📄
              </div>
              <div className="text-left">
                <p className="text-sm font-medium">{uploadedFileName}</p>
                <p className="text-xs text-gray-400">{uploadedFileSize}</p>
              </div>
            </div>
            <div className="text-sm text-blue-600 cursor-pointer" onClick={handleReupload}>
              Re-upload
            </div>
            <div className="text-red-500 cursor-pointer text-xl" onClick={handleRemove}>
              ×
            </div>
          </div>
          <div className="text-green-600 text-sm mt-2">
            CSV File Uploaded Successfully!
          </div>
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-md p-6 mb-4 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="text-4xl text-blue-400">☁️</div>
            <p className="text-gray-600 text-sm">Drag and drop files here</p>
            <p className="text-sm text-gray-400">or</p>
            <button
              className="text-blue-600 underline text-sm"
              onClick={handleUploadClick}
            >
              Click to Upload CSV File
            </button>
            <input
              type="file"
              accept=".csv"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </div>
        </div>
      )}


          <button
            className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md w-full"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      )}


              {selectedStep === "Set Up Business Profile" && (
                <BusinessIdentityForm handleNext={handleNext} />
              )}

            {selectedStep === "Set Up AI Agent Rules" && (
            <div>
                <h2 className="text-lg font-semibold text-center mb-6">
                Set Up AI Agent Rules
                </h2>

                <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                    Tone of Communication
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2">
                    <option>Select</option>
                    <option>Friendly</option>
                    <option>Professional</option>
                    <option>Casual</option>
                </select>
                </div>

                <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Response Style</label>
                <select className="w-full border border-gray-300 rounded-md p-2">
                    <option>Select</option>
                    <option>Concise</option>
                    <option>Detailed</option>
                    <option>Conversational</option>
                </select>
                </div>

                <div className="mb-4 space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                    <p className="text-sm font-medium">Auto-offer help</p>
                    <p className="text-xs text-gray-500">
                        AI pops up suggestions automatically when user lands on a page.
                    </p>
                    </div>
                    <label className="inline-flex items-center cursor-pointer relative">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={autoOfferHelp}
                            onChange={() => setAutoOfferHelp(!autoOfferHelp)}
                        />
                        <div className="w-10 h-5 bg-gray-300 peer-checked:bg-blue-500 rounded-full transition-all duration-300"></div>
                        <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-5"></div>
                    </label>

                </div>

                <div className="flex items-center justify-between">
                    <div>
                    <p className="text-sm font-medium">User-initiated only</p>
                    <p className="text-xs text-gray-500">
                        AI only responds when clicked or messaged.
                    </p>
                    </div>
                    <label className="inline-flex items-center cursor-pointer relative">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={autoOfferHelp1}
                            onChange={() => setAutoOfferHelp1(!autoOfferHelp1)}
                        />
                        <div className="w-10 h-5 bg-gray-300 peer-checked:bg-blue-500 rounded-full transition-all duration-300"></div>
                        <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-5"></div>
                    </label>
                </div>
                </div>
                <div className="col-span-2 flex justify-center mt-6">
                <button
                    className="w-60 text-center py-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-md"
                    onClick={handleNext}
                >
                    Next
                </button>
                </div>
            </div>
            )}


              {selectedStep === "Set Up First Campaign" && (
                <div className="bg-white p-6 rounded-2xl shadow-md space-y-8">
                  {/* Campaign Header */}
                  <div>
                    <h2 className="text-xl font-semibold mb-1">Create New Campaign</h2>
                    <p className="text-sm text-gray-500 mb-4">Create a new referral campaign in just few steps.</p>
                    <hr className="mb-6" />
                  </div>

                  {/* Campaign Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Campaign Name</label>
                    <input
                      type="text"
                      placeholder="e.g., Summer Referral Special"
                      className="w-full border border-gray-300 rounded-lg p-3 text-sm"
                    />
                  </div>

                  {/* Promoter Settings */}
                  <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl space-y-4">
                    <h3 className="text-md font-semibold">Promoter Settings</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Reward Type */}
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Reward Type<span className="text-red-500">*</span>
                        </label>
                        <div className="bg-blue-100 text-blue-700 text-sm font-semibold text-center py-2 rounded-lg border border-blue-300">
                          Points <span className="text-xs block font-normal">($1 is equivalent to 10 points)</span>
                        </div>
                      </div>

                      {/* Reward Value */}
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Reward Value<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., 200 points"
                          className="w-full border border-gray-300 rounded-lg p-3 text-sm"
                        />
                      </div>
                    </div>

                    {/* Promoter Message */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Promoter Message<span className="text-red-500">*</span>
                      </label>
                      <textarea
                        placeholder='e.g., “Hey! Share this with your friends and get $20 for each successful signup!”'
                        className="w-full border border-gray-300 rounded-lg p-3 text-sm h-24 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Follow-Up Strategy */}
                  <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl space-y-4">
                    <h3 className="text-md font-semibold mb-2">Follow-Up Strategy<span className="text-red-500">*</span></h3>

                    {/* Action Flow UI */}
                    <div className="flex flex-col items-start space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="bg-green-100 text-green-700 px-4 py-1 rounded-lg text-sm font-medium">SMS</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="bg-blue-100 text-blue-700 px-4 py-1 rounded-lg text-sm font-medium">Wait: 5 days</div>
                      </div>
                    </div>

                    {/* Action Form */}
                    <div className="bg-white border rounded-xl p-4 shadow-sm">
                      <label className="block text-sm font-medium mb-2">Action Type</label>
                      <div className="flex items-center space-x-4 mb-4">
                        <label className="flex items-center space-x-1">
                          <input type="radio" name="action" defaultChecked /> <span>Email</span>
                        </label>
                        <label className="flex items-center space-x-1">
                          <input type="radio" name="action" /> <span>SMS</span>
                        </label>
                        <label className="flex items-center space-x-1">
                          <input type="radio" name="action" /> <span>Wait Duration</span>
                        </label>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <select className="w-full border border-gray-300 rounded-lg p-2 text-sm">
                          <option>Select</option>
                        </select>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Follow-Up Message</label>
                        <textarea
                          placeholder="Enter message..."
                          className="w-full border border-gray-300 rounded-lg p-3 text-sm h-24 resize-none"
                        ></textarea>
                      </div>

                      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-xl font-semibold">
                        + Add Action
                      </button>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div>
                    <h3 className="text-md font-semibold mb-2">Form Fields<span className="text-red-500">*</span></h3>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked /> <span>Full Name</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked /> <span>Email Address</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked /> <span>Phone Number</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked /> <span>Agree</span>
                      </label>
                    </div>
                  </div>

                  {/* Lead Settings */}
                  <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl space-y-4">
                    <h3 className="text-md font-semibold">Leads Settings</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Reward Type<span className="text-red-500">*</span>
                        </label>
                        <div className="bg-blue-100 text-blue-700 text-sm font-semibold text-center py-2 rounded-lg border border-blue-300">
                          Discount
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Reward Value<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., 20%"
                          className="w-full border border-gray-300 rounded-lg p-3 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Referred Message<span className="text-red-500">*</span>
                      </label>
                      <textarea
                        placeholder='e.g., “You’ve been invited! Sign up now and get 15% off your first order.”'
                        className="w-full border border-gray-300 rounded-lg p-3 text-sm h-24 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Launch Button */}
                  <div className="pt-4">
                    <button
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition"
                      onClick={handleNext}
                    >
                      Launch
                    </button>
                  </div>
                </div>
              )}


            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PlatformSetup;


// import React, { useState } from "react";

// const PlatformSetup = () => {
//   const steps = [
//     "Set Up Business Profile",
//     "Sync Your Customer Data",
//     "Set Up AI Agent Rules",
//     "Set Up First Campaign",
//   ];

//   const [selectedStep, setSelectedStep] = useState(steps[0]);
//   const [completedSteps, setCompletedSteps] = useState([]);

//   const handleNext = () => {
//     const currentIndex = steps.indexOf(selectedStep);

//     if (!completedSteps.includes(selectedStep)) {
//       setCompletedSteps((prev) => [...prev, selectedStep]);
//     }

//     if (currentIndex < steps.length - 1) {
//       const nextStep = steps[currentIndex + 1];
//       setSelectedStep(nextStep);
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-50">
//       <header className="w-full flex justify-between items-center px-6 py-4 border-b bg-white">
//         <h1 className="text-xl font-semibold">Platform Setup</h1>
//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 text-gray-600"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 17h5l-1.405-1.405C18.21 14.79 18 14.21 18 13.586V11a6 6 0 10-12 0v2.586c0 .624-.21 1.204-.595 1.621L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//               />
//             </svg>
//           </div>
//           <div className="flex items-center space-x-2">
//             <img
//               src="https://i.pravatar.cc/40"
//               alt="User Avatar"
//               className="w-8 h-8 rounded-full"
//             />
//             <div className="text-right">
//               <p className="text-sm font-medium">Kadin Stanton</p>
//               <p className="text-xs text-gray-500">kadinstanton@gmail.com</p>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="flex flex-1">
//         <aside className="w-56 bg-white border-r p-4 space-y-4">
//           {[
//             "Platform Setup",
//             "AI Agent",
//             "Dashboard",
//             "Campaign",
//             "Promoters",
//             "Leads",
//             "Payouts",
//             "Settings",
//             "Help",
//           ].map((item) => (
//             <div
//               key={item}
//               className={`px-3 py-2 rounded-lg cursor-pointer text-sm flex items-center gap-2 ${
//                 item === "Platform Setup"
//                   ? "bg-blue-100 text-blue-600 font-semibold"
//                   : "text-gray-600 hover:bg-gray-100"
//               }`}
//             >
//               {item}
//             </div>
//           ))}
//         </aside>

//         <main className="flex-1 p-8 overflow-y-auto">
//           <div className="flex gap-8 max-w-7xl mx-auto">
//             <div className="w-72 bg-white p-6 rounded-xl border">
//               <h3 className="text-base font-semibold text-blue-600 mb-2">
//                 Get Started with ReferralHub
//               </h3>
//               <p className="text-sm text-gray-500 mb-4">
//                 To get started with better referrals & rewards, complete your
//                 account setup in a few easy steps.
//               </p>
//               <div className="space-y-4">
//                 {steps.map((step) => (
//                   <div
//                     key={step}
//                     className="flex items-start gap-3 cursor-pointer"
//                     onClick={() => setSelectedStep(step)}
//                   >
//                     <div
//                       className={`w-5 h-5 mt-1 flex-shrink-0 rounded-full border text-white flex items-center justify-center text-xs font-bold ${
//                         completedSteps.includes(step)
//                           ? "bg-green-500 border-green-500"
//                           : "border-gray-400 text-gray-400"
//                       }`}
//                     >
//                       {completedSteps.includes(step) ? "✓" : ""}
//                     </div>
//                     <div>
//                       <p
//                         className={`text-sm ${
//                           selectedStep === step
//                             ? "text-blue-600 font-semibold"
//                             : "text-gray-700"
//                         }`}
//                       >
//                         {step}
//                       </p>
//                       <p className="text-xs text-gray-400">
//                         {completedSteps.includes(step)
//                           ? "Completed"
//                           : "Not Started"}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex-1 bg-white p-8 rounded-xl border">
//               {selectedStep === "Sync Your Customer Data" && (
//                 <div>
//                   <h2 className="text-lg font-semibold mb-4">
//                     Import Customer Data: Sync with Zapier or Upload CSV
//                   </h2>
//                   <button className="border border-blue-500 text-blue-600 font-medium px-4 py-2 rounded-md mb-4">
//                     Connect with Zapier
//                   </button>
//                   <div className="my-4 text-sm text-gray-500 text-center">or</div>

//                   <div className="border-2 border-dashed border-gray-300 rounded-md p-6 mb-4 text-center">
//                     <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md border">
//                       <div className="flex items-center gap-2">
//                         <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
//                           📄
//                         </div>
//                         <div className="text-left">
//                           <p className="text-sm font-medium">Leads.csv</p>
//                           <p className="text-xs text-gray-400">428KB</p>
//                         </div>
//                       </div>
//                       <div className="text-sm text-blue-600 cursor-pointer">
//                         Re-upload
//                       </div>
//                       <div className="text-red-500 cursor-pointer text-xl">
//                         ×
//                       </div>
//                     </div>
//                     <div className="text-green-600 text-sm mt-2">
//                       CSV File Uploaded Successfully!
//                     </div>
//                   </div>

//                   <button
//                     className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md"
//                     onClick={handleNext}
//                   >
//                     Next
//                   </button>
//                 </div>
//               )}

//               {selectedStep === "Set Up Business Profile" && (
//                 <div>
//                   <h2 className="text-lg font-semibold text-center mb-1">
//                     Build Your Business Identity
//                   </h2>
//                   <p className="text-sm text-gray-500 text-center mb-6">
//                     Help us tailor the referral experience by adding key details
//                     about your business
//                   </p>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div className="col-span-2">
//                       <label className="block text-sm font-medium mb-1">
//                         Business Logo
//                       </label>
//                       <button className="px-4 py-2 border rounded-md">
//                         Choose Image
//                       </button>
//                     </div>
//                     <div className="col-span-2">
//                       <label className="block text-sm font-medium mb-1">
//                         Business Description
//                       </label>
//                       <textarea
//                         className="w-full border rounded-md p-2"
//                         placeholder="Enter business description..."
//                       />
//                     </div>
//                     <input
//                       className="border rounded-md p-2"
//                       placeholder="Enter business name"
//                     />
//                     <input
//                       className="border rounded-md p-2"
//                       placeholder="e.g., robert.fox@myemail.com"
//                     />
//                     <input
//                       className="border rounded-md p-2"
//                       placeholder="Enter phone no."
//                     />
//                     <select className="border rounded-md p-2">
//                       <option>Select</option>
//                     </select>
//                     <input
//                       className="border rounded-md p-2"
//                       placeholder="Enter services.."
//                     />
//                     <input
//                       className="border rounded-md p-2"
//                       placeholder="Enter products..."
//                     />
//                     <select className="border rounded-md p-2">
//                       <option>Select (Optional)</option>
//                     </select>
//                     <select className="border rounded-md p-2">
//                       <option>Select</option>
//                     </select>
//                     <select className="border rounded-md p-2">
//                       <option>Select</option>
//                     </select>
//                     <input
//                       className="border rounded-md p-2"
//                       placeholder="Enter zip code"
//                     />
//                   </div>
//                   <button
//                     className="mt-6 px-6 py-2 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md"
//                     onClick={handleNext}
//                   >
//                     Next
//                   </button>
//                 </div>
//               )}

//               {selectedStep === "Set Up AI Agent Rules" && (
//                 <div>
//                   <h2 className="text-lg font-semibold mb-4">
//                     AI Agent Setup
//                   </h2>
//                   <textarea
//                     placeholder="Describe agent behavior or rules..."
//                     className="w-full border border-gray-300 rounded-md p-2 mb-4"
//                   />
//                   <button
//                     className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md"
//                     onClick={handleNext}
//                   >
//                     Next
//                   </button>
//                 </div>
//               )}

//               {selectedStep === "Set Up First Campaign" && (
//                 <div>
//                   <h2 className="text-lg font-semibold mb-4">
//                     First Campaign Setup
//                   </h2>
//                   <input
//                     type="text"
//                     placeholder="Campaign Name"
//                     className="input input-bordered w-full mb-4 border rounded-md p-2"
//                   />
//                   <button
//                     className="btn bg-blue-600 text-white px-6 py-2 rounded-md"
//                     onClick={handleNext}
//                   >
//                     Create Campaign
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default PlatformSetup;
