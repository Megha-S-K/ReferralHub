"use client";
import React, { useState } from "react";
import {
  FaGoogle,
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import AIAssistantPopup from "./AIAssistantPopup"; // Make sure the path is correct
import Registeration from "./Registeration";
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  function handleClick(event) {
    navigate('/Registeration');
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#F5F5F5] px-4">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-10">
        <h1 className="text-center text-2xl font-semibold text-zinc-800 mb-6">
          Login to ReferralHub
        </h1>

        {/* SSO Button */}
        <button 
          className="w-full border border-blue-500 text-blue-600 font-medium rounded-md py-2 hover:bg-blue-50 transition"
          onClick={handleClick} // Changed from onSubmit to onClick
        >
          <FaGoogle className="inline mr-2" />
          Continue with Google/Microsoft
        </button>

        {/* Magic Link */}
        <div className="mt-6">
          <label className="text-sm font-medium text-zinc-700 block mb-1">
            Magic Link Login
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-zinc-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <button className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white font-medium rounded-md py-2 transition">
            Send Magic Link
          </button>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center justify-center text-sm text-zinc-500">
          <span className="w-full h-px bg-zinc-300"></span>
          <span className="px-2">or</span>
          <span className="w-full h-px bg-zinc-300"></span>
        </div>

        {/* Email + Password Login */}
        <div>
          <label className="text-sm font-medium text-zinc-700 block mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-zinc-300 rounded-md px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <label className="text-sm font-medium text-zinc-700 block mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border border-zinc-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-2 transition">
            Login
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
            <a href="/login" className="text-[#4F46E5] font-medium hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Floating AI Assistant Chat */}
      <AIAssistantPopup />
    </div>
  );
}