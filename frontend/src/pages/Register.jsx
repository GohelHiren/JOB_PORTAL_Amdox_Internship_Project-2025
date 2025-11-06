import React, { useState } from 'react';
import { User, Mail, Lock, Building2, Phone, Briefcase, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [role, setRole] = useState("jobseeker");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        { ...formData, role },
        { withCredentials: true } // important for cookies
      );

      if (response.data.success) {
        alert("Registration successful!");
        navigate('/login');
      }
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Registration failed. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-lg w-full">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Create an Account</h1>
            <p className="text-gray-600">Join JobPortal and find your next opportunity</p>
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="text-red-600 bg-red-100 px-4 py-2 mb-4 rounded-lg text-sm">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Role Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Select Your Role</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole('jobseeker')}
                  className={`flex items-center justify-center px-4 py-3 border-2 rounded-lg transition ${
                    role === 'jobseeker'
                      ? 'border-gray-900 bg-gray-50 text-gray-900'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <User size={18} className="mr-2" /> Job Seeker
                </button>
                <button
                  type="button"
                  onClick={() => setRole('employer')}
                  className={`flex items-center justify-center px-4 py-3 border-2 rounded-lg transition ${
                    role === 'employer'
                      ? 'border-gray-900 bg-gray-50 text-gray-900'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <Briefcase size={18} className="mr-2" /> Employer
                </button>
              </div>
            </div>

            {/* Name */}
            <div className="mb-5">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900"
                />
              </div>
            </div>

            {/* Company Name (for Employers only) */}
            {role === "employer" && (
              <div className="mb-5">
                <label className="text-sm font-medium text-gray-700">Company Name</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div className="mb-5">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="mb-5">
              <label className="text-sm font-medium text-gray-700">Phone Number (Optional)</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition font-medium"
            >
              {loading ? "Registering..." : `Register as ${role === "jobseeker" ? "Job Seeker" : "Employer"}`}
            </button>

            {/* Redirect to Login */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{" "}
              <span onClick={() => navigate('/login')} className="text-gray-900 font-medium hover:underline cursor-pointer">
                Login
              </span>
            </p>
          </form>

        </div>

        <p className="text-center text-sm text-gray-600 mt-6">© 2024 JobPortal. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Register;
