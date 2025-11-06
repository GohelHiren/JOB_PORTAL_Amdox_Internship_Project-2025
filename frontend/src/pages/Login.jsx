import React, { useState, useContext } from "react";
import { Mail, Lock, User, Briefcase, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext"; // ✅ Import Auth Context

const Login = () => {
  const [role, setRole] = useState("jobseeker");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext); // ✅ Now we can set logged-in user globally

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }, // ✅ No role sent manually
        { withCredentials: true }
      );

      if (response.data.success) {
        const userRole = response.data.user.role; // ✅ Real role from backend
        setUser(response.data.user); // ✅ Save in global context

        // ✅ Redirect to dashboard based on actual role
        if (userRole === "jobseeker") {
          navigate("/jobseeker/dashboard");
        } else {
          navigate("/employer/dashboard");
        }
      }
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Login failed. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Login to JobPortal</h1>
            <p className="text-gray-600 mt-2">Choose your role and continue</p>
          </div>

          {/* Role Selector (UI Only - Not sent to backend) */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Select Your Role</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setRole("jobseeker")}
                className={`flex items-center justify-center py-3 border-2 rounded-lg ${
                  role === "jobseeker"
                    ? "border-gray-900 bg-gray-50 text-gray-900"
                    : "border-gray-200 text-gray-600"
                }`}
              >
                <User size={18} className="mr-2" /> Job Seeker
              </button>
              <button
                onClick={() => setRole("employer")}
                className={`flex items-center justify-center py-3 border-2 rounded-lg ${
                  role === "employer"
                    ? "border-gray-900 bg-gray-50 text-gray-900"
                    : "border-gray-200 text-gray-600"
                }`}
              >
                <Briefcase size={18} className="mr-2" /> Employer
              </button>
            </div>
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="text-red-600 bg-red-100 px-4 py-2 mb-4 rounded-lg text-sm">
              {errorMsg}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition font-medium"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-gray-900 font-medium hover:underline cursor-pointer"
            >
              Register
            </span>
          </p>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          © 2024 JobPortal. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
