import React, { useState } from 'react';
import {
  LayoutDashboard,
  PlusCircle,
  Briefcase,
  FileText,
  User,
  LogOut,
  Menu,
  X,
  ClipboardList,
  CheckCircle,
  Clock,
  Users,
  Edit2,
  Trash2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EmployerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const stats = [
    {
      label: 'Total Jobs Posted',
      value: '24',
      icon: ClipboardList,
      color: 'text-blue-600'
    },
    {
      label: 'Total Applications',
      value: '156',
      icon: FileText,
      color: 'text-green-600'
    },
    {
      label: 'Active Jobs',
      value: '18',
      icon: CheckCircle,
      color: 'text-purple-600'
    },
    {
      label: 'Pending Applications',
      value: '42',
      icon: Clock,
      color: 'text-orange-600'
    }
  ];

  const recentJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      type: 'Full-time • Remote',
      status: 'Active',
      applications: 23,
      date: 'Mar 15, 2024'
    },
    {
      id: 2,
      title: 'Product Manager',
      type: 'Full-time • San Francisco',
      status: 'Active',
      applications: 31,
      date: 'Mar 12, 2024'
    },
    {
      id: 3,
      title: 'UX Designer',
      type: 'Contract • Remote',
      status: 'Closed',
      applications: 18,
      date: 'Mar 8, 2024'
    },
    {
      id: 4,
      title: 'Backend Engineer',
      type: 'Full-time • New York',
      status: 'Active',
      applications: 15,
      date: 'Mar 5, 2024'
    },
    {
      id: 5,
      title: 'Data Scientist',
      type: 'Full-time • Remote',
      status: 'Active',
      applications: 27,
      date: 'Mar 1, 2024'
    }
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'post-job', label: 'Post Job', icon: PlusCircle },
    { id: 'my-jobs', label: 'My Jobs', icon: Briefcase },
    { id: 'applications', label: 'Applications', icon: FileText },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const handleEdit = (jobId) => {
    console.log('Edit job:', jobId);
  };

  const handleDelete = (jobId) => {
    console.log('Delete job:', jobId);
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
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">JobPortal</h1>
            <p className="text-sm text-gray-600 mt-1">Employer Dashboard</p>
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
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
                <p className="text-sm text-gray-600">Welcome back, manage your job postings</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-semibold text-gray-900">TechCorp Inc.</p>
                <p className="text-xs text-gray-600">Employer Account</p>
              </div>
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                <User size={20} className="text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`p-3 bg-gray-50 rounded-lg ${stat.color}`}>
                        <Icon size={24} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recent Job Posts Section */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Recent Job Posts</h3>
                  <p className="text-sm text-gray-600 mt-1">Manage your posted positions</p>
                </div>
                <button className="mt-4 sm:mt-0 bg-gray-900 text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition font-medium flex items-center">
                  <PlusCircle size={18} className="mr-2" />
                  Post New Job
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
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Applications
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Posted Date
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentJobs.map((job) => (
                      <tr key={job.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-semibold text-gray-900">{job.title}</p>
                            <p className="text-sm text-gray-600">{job.type}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                              job.status === 'Active'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {job.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-semibold text-gray-900">{job.applications}</span>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{job.date}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => handleEdit(job.id)}
                              className="text-gray-600 hover:text-blue-600 transition"
                              title="Edit"
                            >
                              <Edit2 size={18} />
                            </button>
                            <button
                              onClick={() => handleDelete(job.id)}
                              className="text-gray-600 hover:text-red-600 transition"
                              title="Delete"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmployerDashboard;