import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    { id: 1, title: 'Platform Setup', icon: '/icons/platform-setup.svg', path: '/PlatformSetup' },
    { id: 2, title: 'AI Agent', icon: '/icons/ai-agent.svg', path: '/ai-agent' },
    { id: 3, title: 'Dashboard', icon: '/icons/dashboard.svg', path: '/dashboard' },
    { id: 4, title: 'Campaign', icon: '/icons/campaign.svg', path: '/campaign' },
    { id: 5, title: 'Promoters', icon: '/icons/promoters.svg', path: '/promoters' },
    { id: 6, title: 'Leads', icon: '/icons/leads.svg', path: '/leads' },
    { id: 7, title: 'Payouts', icon: '/icons/payouts.svg', path: '/payouts' }
  ];

  const bottomMenuItems = [
    { id: 8, title: 'Settings', icon: '/icons/settings.svg', path: '/settings' },
    { id: 9, title: 'Help', icon: '/icons/help.svg', path: '/help' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed Sidebar */}
      <div className="w-64 h-screen bg-white shadow-lg flex flex-col fixed left-0 top-0">
        <div className="flex-1 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center px-4 py-2 my-1 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <img src={item.icon} alt={item.title} className="w-5 h-5 mr-3" />
              <span className="text-sm font-medium">{item.title}</span>
            </Link>
          ))}
        </div>

        <div className="p-4 border-t">
          {bottomMenuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="flex items-center px-4 py-2 my-1 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <img src={item.icon} alt={item.title} className="w-5 h-5 mr-3" />
              <span className="text-sm font-medium">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {children}
      </div>
    </div>
  );
};

export default Layout;