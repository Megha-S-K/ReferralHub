import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlatformSetup = () => {
  const [businessLogo, setBusinessLogo] = useState(null);
  const navigate = useNavigate();

  const steps = [
    { id: 1, title: 'Set Up Business Profile', status: 'Not Started' },
    { id: 2, title: 'Sync Your Customer Data', status: 'Not Started' },
    { id: 3, title: 'Set Up AI Agent Rules', status: 'Not Started' },
    { id: 4, title: 'Set Up First Campaign', status: 'Not Started' }
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBusinessLogo(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">Platform Setup</h1>
            <div className="flex items-center">
              <img src="/icons/notification.svg" className="w-5 h-5 mr-4" />
              <img src="/avatar.jpg" className="w-8 h-8 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Left Column - Get Started */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold text-blue-600 mb-2">
                Get Started with ReferralHub
              </h2>
              <p className="text-gray-600 mb-6">
                To get started with better referrals & rewards, complete your account setup in a few easy steps.
              </p>

              <div className="space-y-4">
                {steps.map((step) => (
                  <div key={step.id} className="flex items-center">
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300 mr-3" />
                    <div>
                      <p className="font-medium">{step.title}</p>
                      <p className="text-sm text-gray-500">{step.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Business Identity Form */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold mb-6">
                Build Your Business Identity
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Logo
                  </label>
                  <button
                    type="button"
                    onClick={() => document.getElementById('logo-upload').click()}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
                  >
                    Choose Image
                  </button>
                  <input
                    id="logo-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder="Enter business description..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-2"
                      placeholder="Enter business name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Email
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-lg p-2"
                      placeholder="e.g., robert.fox@myemail.com"
                    />
                  </div>
                </div>

                {/* Additional form fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Phone No.
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 rounded-lg p-2"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Industry
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg p-2">
                      <option value="">Select</option>
                      {/* Add industry options */}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformSetup;