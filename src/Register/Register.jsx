import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googleIcon from './../images/google-icon.png';
import FacebookIcon from './../images/facebook-icon.png';
import xIcon from "./../images/x-icon.png";
import linkedinicon from './../images/linkedinicon.png';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // API call or validation logic here
    navigate("/"); // Redirect to homepage after registration
  };

  const handleLoginRedirect = () => {
    navigate("/loginpage");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-white flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
        Join <span className="text-violet-600">ReferralHub</span>
      </h2>

      <div className="w-full max-w-lg bg-white p-10 rounded-3xl shadow-2xl border border-violet-200">
        <form className="space-y-6" onSubmit={handleRegister}>
          <div>
            <label className="label font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="robert.fox@myemail.com"
              className="input input-bordered w-full h-12 text-base"
            />
          </div>

          <div>
            <label className="label font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter password"
                className="input input-bordered w-full h-12 text-base pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div>
            <label className="label font-medium text-gray-700 mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                placeholder="Re-enter password"
                className="input input-bordered w-full h-12 text-base pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold text-base 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
            hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 
            transition duration-300 shadow-md"
          >
            Register
          </button>
        </form>

        <div className="divider text-center my-6">or</div>

        <div className="flex justify-center gap-4 mb-4">
          <button className="btn btn-circle bg-white border border-gray-300 shadow-sm">
            <img src={googleIcon} alt="Google" className="w-5 h-5" />
          </button>
          <button className="btn btn-circle bg-white border border-gray-300 shadow-sm">
            <img src={FacebookIcon} alt="Facebook" className="w-5 h-5" />
          </button>
          <button className="btn btn-circle bg-white border border-gray-300 shadow-sm">
            <img src={xIcon} alt="X" className="w-5 h-5" />
          </button>
          <button className="btn btn-circle bg-white border border-gray-300 shadow-sm">
            <img src={linkedinicon} alt="LinkedIn" className="w-5 h-5" />
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={handleLoginRedirect}
            className="text-blue-600 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
