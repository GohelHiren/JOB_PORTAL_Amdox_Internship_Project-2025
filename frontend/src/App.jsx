import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import JobSeekerDashboard from './pages/dashboard/JobSeekerDashboard';
import EmployerDashboard from './pages/dashboard/EmployerDashboard';
import PrivateRoute from './components/privateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Role-Based Protected Dashboards */}
        <Route
          path="/jobseeker/dashboard"
          element={
            <PrivateRoute role="jobseeker">
              <JobSeekerDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/employer/dashboard"
          element={
            <PrivateRoute role="employer">
              <EmployerDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
