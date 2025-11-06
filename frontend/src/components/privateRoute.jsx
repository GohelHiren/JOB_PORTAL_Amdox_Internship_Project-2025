import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children, role }) => {
  const { user, loading } = useContext(AuthContext);
  if (!loading) {
  console.log("🔍 PrivateRoute Check → Logged in user:", user);
  console.log("🔍 Required role for this route:", role);
}

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  // If no user logged in
  if (!user) return <Navigate to="/login" replace />;

  // If user role doesn't match required role
  if (role && user.role !== role) return <Navigate to="/" replace />;

  return children;
};

export default PrivateRoute;
