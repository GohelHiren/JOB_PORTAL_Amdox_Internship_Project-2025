import React, { useState } from 'react';
import { MapPin, Building2, Bookmark, Search, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">JobPortal</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a onClick={() => navigate('/')} className="text-gray-700 hover:text-gray-900 transition hover:cursor-pointer">Home</a>
            <a onClick={() => navigate('/jobs')} className="text-gray-700 hover:text-gray-900 transition hover:cursor-pointer">Jobs</a>
            <a onClick={() => navigate('/login')} className="text-gray-700 hover:text-gray-900 transition hover:cursor-pointer">Login</a>
            <button  onClick={() => navigate('/register')} className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition hover:cursor-pointer">
              Register
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a href="#" className="block text-gray-700 hover:text-gray-900 py-2">Home</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 py-2">Jobs</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 py-2">Login</a>
            <button className="w-full bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const JobCard = ({ job }) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <Building2 className="text-gray-600" size={24} />
        </div>
        <button 
          onClick={() => setIsSaved(!isSaved)}
          className="text-gray-400 hover:text-blue-600 transition"
        >
          <Bookmark 
            size={20} 
            fill={isSaved ? "currentColor" : "none"}
            className={isSaved ? "text-blue-600" : ""}
          />
        </button>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
      
      <div className="flex items-center text-gray-600 mb-2">
        <Building2 size={16} className="mr-2" />
        <span className="text-sm">{job.company}</span>
      </div>

      <div className="flex items-center text-gray-600 mb-4">
        <MapPin size={16} className="mr-2" />
        <span className="text-sm">{job.location}</span>
      </div>

      <div className="mb-4">
        <span className="text-lg font-semibold text-gray-900">{job.salary}</span>
        <span className="text-sm text-gray-500"> / year</span>
      </div>

      <button className="w-full bg-gray-900 text-white py-2.5 rounded-lg hover:bg-gray-800 transition font-medium">
        Apply Now
      </button>
    </div>
  );
};

const Home = () => {
  const [category, setCategory] = useState('all');
  const [location, setLocation] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      salary: '$120k - $150k'
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'Creative Studio',
      location: 'Remote',
      salary: '$90k - $110k'
    },
    {
      id: 3,
      title: 'Marketing Manager',
      company: 'Growth Labs',
      location: 'New York, NY',
      salary: '$100k - $130k'
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'DataTech Solutions',
      location: 'Boston, MA',
      salary: '$130k - $160k'
    },
    {
      id: 5,
      title: 'Mobile App Developer',
      company: 'AppWorks',
      location: 'Austin, TX',
      salary: '$110k - $140k'
    },
    {
      id: 6,
      title: 'Product Manager',
      company: 'Innovation Hub',
      location: 'Seattle, WA',
      salary: '$140k - $170k'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Find Your Dream Job
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Search across top companies and apply instantly.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                >
                  <option value="all">All Categories</option>
                  <option value="engineering">Engineering</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="City or Remote"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-end">
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center">
                  <Search size={20} className="mr-2" />
                  Search Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Jobs Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Latest Jobs
            </h2>
            <p className="text-gray-600">
              Explore opportunities from top companies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div className="text-center">
            <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition font-medium">
              View All Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2024 JobPortal. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                Contact
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;