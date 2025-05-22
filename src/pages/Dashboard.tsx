import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../lib/auth';
import { 
  MessageSquare, 
  Users, 
  BarChart3, 
  Settings,
  PlusCircle
} from 'lucide-react';

export const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Total Conversations', value: '0', icon: MessageSquare },
    { label: 'Active Users', value: '0', icon: Users },
    { label: 'Response Rate', value: '0%', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img 
                  src="https://i.postimg.cc/Bnj2bFC1/Sasa-BOT-Logo-X-blue-mini.png"
                  alt="SasaBot Logo"
                  className="h-8 w-auto"
                />
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-md text-gray-400 hover:text-gray-500">
                <Settings className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
            <Link
              to="/flow-builder"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-700"
            >
              <PlusCircle className="h-5 w-5 mr-2" />
              New Chat Flow
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <stat.icon className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {stat.label}
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">
                          {stat.value}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Getting Started</h2>
            <div className="border-l-4 border-blue-900 pl-4 py-2">
              <p className="text-gray-600">
                Welcome to your SasaBot dashboard! To get started, click the "New Chat Flow" button 
                to create your first automated conversation flow. Need help? Check out our 
                <a href="#" className="text-blue-600 hover:text-blue-800 ml-1">quick start guide</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};