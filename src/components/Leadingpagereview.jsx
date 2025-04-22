import React, { useState, useEffect } from "react";

const Leadingpagereview = () => {
  const [progress, setProgress] = useState(0);
  const [claiming, setClaiming] = useState(false);
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    let timer;
    if (claiming && progress < 100) {
      timer = setTimeout(() => {
        setProgress((prev) => Math.min(prev + 10, 100));
      }, 200);
    } else if (progress === 100) {
      setClaiming(false);
      setClaimed(true);
    }
    return () => clearTimeout(timer);
  }, [progress, claiming]);

  const handleClaimReward = () => {
    setProgress(0);
    setClaimed(false);
    setClaiming(true);
  };

  return (
    <div className="max-w-md mx-auto mb-8">
      {/* Inputs */}
      <div className="mb-2">
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Full Name"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Email Address"
        />
      </div>

      {/* Claim Button */}
      <button
        onClick={handleClaimReward}
        disabled={claiming || claimed}
        className={`w-full ${
          claimed
            ? "bg-green-500"
            : claiming
            ? "bg-blue-300"
            : "bg-blue-500 hover:bg-blue-700"
        } text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition`}
      >
        {claimed ? "🎉 Reward Claimed!" : claiming ? `Claiming... ${progress}%` : "Claim Your Reward"}
      </button>

      {/* Progress Bar */}
      {claiming && (
        <div className="w-full mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Leadingpagereview;
