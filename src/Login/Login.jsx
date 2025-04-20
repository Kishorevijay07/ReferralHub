import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import googleIcon from './../images/google-icon.png';
import FacebookIcon from './../images/facebook-icon.png';
import xIcon from "./../images/x-icon.png";
import linkedinIcon from "./../images/linkedinicon.png";

export default function LoginPage({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Optionally add validation logic here
    setIsLoggedIn(true);      // 🔹 Mark user as logged in
    navigate("/");            // 🔹 Redirect to home/dashboard
  };

  const handleRegister = () => {
    navigate("/registerpage");
  };

  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden flex flex-col items-center justify-center px-4">
      <svg
        width="1442"
        height="634"
        viewBox="0 0 1442 634"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none"
      >
        <path
          d="M0 200 C400 500 1040 300 1442 600"
          stroke="#305AFF"
          strokeOpacity="0.65"
          strokeWidth="2"
          strokeDasharray="6,10"
          strokeLinecap="round"
        />
      </svg>

      <h2 className="relative z-10 text-2xl font-semibold text-center mb-4">
        Login to <span className="text-blue-600">ReferralHub</span>
      </h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full max-w-md bg-white shadow-2xl rounded-2xl p-6"
      >
        <button className="w-full mb-4 py-2 border border-blue-400 rounded-md text-blue-600 font-medium hover:bg-blue-50 transition text-sm">
          Continue with Google/Microsoft
        </button>

        <div className="mb-3">
          <label className="block text-xs font-semibold">Magic Link Login</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-1 p-2 border rounded text-sm"
          />
          <button
            className="w-full mt-2 py-2 px-4 rounded-lg text-white font-medium shadow-md 
                       bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 
                       hover:from-blue-800 hover:via-blue-600 hover:to-blue-400 
                       transition duration-300 ease-in-out text-sm"
          >
            Send Magic Link
          </button>
        </div>

        <div className="text-center my-3 text-gray-400 text-xs">or</div>

        <div className="mb-2">
          <label className="block text-xs font-semibold">Email</label>
          <input
            type="email"
            placeholder="enter your email"
            className="w-full mt-1 p-2 border rounded text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block text-xs font-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full mt-1 p-2 border rounded text-sm"
          />
        </div>

        <div className="flex justify-between items-center mb-4 text-xs">
          <label className="flex items-center">
            <input type="checkbox" className="mr-1" />
            Remember Me
          </label>
          <a href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          onClick={handleLogin}
          className="w-full mt-2 py-2 px-4 rounded-lg text-white font-medium shadow-md 
                     bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 
                     hover:from-blue-800 hover:via-blue-600 hover:to-blue-400 
                     transition duration-300 ease-in-out text-sm"
        >
          Login
        </button>

        <div className="my-3 text-center text-gray-400 text-xs">or</div>

        <div className="flex justify-center space-x-3">
          <img src={googleIcon} alt="Google" className="w-5 h-5" />
          <img src={FacebookIcon} alt="Facebook" className="w-5 h-5" />
          <img src={xIcon} alt="X" className="w-5 h-5" />
          <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
        </div>

        <p className="mt-5 text-center text-xs text-gray-500">
          Don’t have an account?{" "}
          <button
            onClick={handleRegister}
            className="text-blue-600 hover:underline"
          >
            Register now
          </button>
        </p>
      </motion.div>
    </div>
  );
}
