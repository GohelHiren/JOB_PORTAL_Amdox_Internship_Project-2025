import React, { useState } from 'react';
import {
  LayoutDashboard,
  Search,
  Bookmark,
  FileText,
  User,
  LogOut,
  Menu,
  X,
  Briefcase,
  Calendar,
  CheckCircle,
  Building2,
  Send
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JobSeekerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const stats = [
    {
      label: 'Applied Jobs',
      value: '24',
      icon: Send,
      color: 'text-blue-600'
    },
    {
      label: 'Saved Jobs',
      value: '12',
      icon: Bookmark,
      color: 'text-purple-600'
    },
    {
      label: 'Interviews Scheduled',
      value: '3',
      icon: Calendar,
      color: 'text-green-600'
    },
    {
      label: 'Profile Completion',
      value: '85%',
      icon: CheckCircle,
      color: 'text-orange-600'
    }
  ];

  const recentApplications = [
    {
      id: 1,
      jobTitle: 'Senior Frontend Developer',
      jobType: 'Full-time • Remote',
      company: 'TechCorp Inc.',
      status: 'Pending',
      dateApplied: 'Jan 15, 2025'
    },
    {
      id: 2,
      jobTitle: 'UX/UI Designer',
      jobType: 'Full-time • Hybrid',
      company: 'DesignHub',
      status: 'Accepted',
      dateApplied: 'Jan 12, 2025'
    },
    {
      id: 3,
      jobTitle: 'Product Manager',
      jobType: 'Full-time • On-site',
      company: 'StartupXYZ',
      status: 'Rejected',
      dateApplied: 'Jan 10, 2025'
    },
    {
      id: 4,
      jobTitle: 'Backend Engineer',
      jobType: 'Full-time • Remote',
      company: 'CloudSystems',
      status: 'Pending',
      dateApplied: 'Jan 8, 2025'
    },
    {
      id: 5,
      jobTitle: 'Data Analyst',
      jobType: 'Full-time • Hybrid',
      company: 'DataCo',
      status: 'Accepted',
      dateApplied: 'Jan 5, 2025'
    }
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'find-jobs', label: 'Find Jobs', icon: Search },
    { id: 'saved-jobs', label: 'Saved Jobs', icon: Bookmark },
    { id: 'applications', label: 'Applications', icon: FileText },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const getStatusBadge = (status) => {
    const statusStyles = {
      Pending: 'bg-yellow-100 text-yellow-800',
      Accepted: 'bg-green-100 text-green-800',
      Rejected: 'bg-red-100 text-red-800'
    };

    return (
      <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200 flex items-center">
            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-3">
              <Briefcase size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">JobPortal</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition ${
                    activeTab === item.id
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} className="mr-3" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-200">
            <button 
              onClick={() => navigate("/login")} 
              className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              <LogOut size={20} className="mr-3" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden mr-4 text-gray-600 hover:text-gray-900"
              >
                <Menu size={24} />
              </button>
              <h2 className="text-2xl font-bold text-gray-900">Job Seeker Dashboard</h2>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-xs text-gray-600">Software Engineer</p>
              </div>
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">SJ</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Sarah</h1>
              <p className="text-gray-600">Here's what's happening with your job search today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 bg-gray-50 rounded-lg ${stat.color}`}>
                        <Icon size={24} />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Recent Applications Section */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Recent Applications</h3>
                  <p className="text-sm text-gray-600 mt-1">Track your application status</p>
                </div>
                <button className="mt-4 sm:mt-0 bg-gray-900 text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition font-medium flex items-center">
                  <Search size={18} className="mr-2" />
                  Find Jobs
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Job Title
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Company
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Date Applied
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentApplications.map((application) => (
                      <tr key={application.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-semibold text-gray-900">{application.jobTitle}</p>
                            <p className="text-sm text-gray-600">{application.jobType}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <Building2 size={16} className="text-gray-400 mr-2" />
                            <span className="text-gray-900">{application.company}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {getStatusBadge(application.status)}
                        </td>
                        <td className="px-6 py-4 text-gray-600">{application.dateApplied}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* View All Link */}
              <div className="p-6 border-t border-gray-200 text-center">
                <button className="text-gray-900 font-medium hover:underline flex items-center justify-center mx-auto">
                  View all applications
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;