import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaGoogle,
    FaFacebook,
    FaXTwitter,
    FaLinkedin,
  }from "react-icons/fa6";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/PlatformSetup');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Register for ReferralHub
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Id
            </label>
            <input
              type="email"
              placeholder="robert.fox@myemail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Create Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <img 
                  src={showPassword ? "/assets/eye-off.svg" : "/assets/eye.svg"} 
                  alt="toggle password" 
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <img 
                  src={showConfirmPassword ? "/assets/eye-off.svg" : "/assets/eye.svg"} 
                  alt="toggle password" 
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white font-medium rounded-md py-2 transition"
          >
            Register
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <FaLinkedin className=" w-5 h-5" />
                          </button>
                          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            <FaFacebook className=" w-5 h-5" />
                          </button>
                          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            <FaXTwitter className=" w-5 h-5"/>
                          </button>
                          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            <FaGoogle className=" w-5 h-5"/>
                          </button>
                        </div>

          <p className="text-center text-gray-600">
            Already have an account?{' '}
            <a href="/PlatformSetup" className="w text-blue-600 font-medium rounded-md py-2 hover:bg-blue-50 transition">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;