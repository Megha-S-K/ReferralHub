import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const steps = [
    { id: 1, title: 'Set Up Business Profile', status: 'Completed' },
    { id: 2, title: 'Sync Your Customer Data', status: 'In Progress' },
    { id: 3, title: 'Set Up AI Agent Rules', status: 'Not Started' },
    { id: 4, title: 'Set Up First Campaign', status: 'Not Started' }
  ];

  const handleLogout = () => {
    // Clear any authentication tokens or session data here (if needed)
    navigate("/");  // Redirect to login page (update route as needed)
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">Welcome to Your Dashboard!</h1>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-blue-600 mb-6">Business Setup Progress</h2>
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 ${step.status === 'Completed' ? 'border-green-500' : 'border-gray-300'} mr-3`} />
                  <div>
                    <p className="font-medium">{step.title}</p>
                    <p className={`text-sm ${step.status === 'Completed' ? 'text-green-500' : 'text-gray-500'}`}>{step.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
