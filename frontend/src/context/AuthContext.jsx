// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          withCredentials: true,  // ✅ important: send cookies
        });
        console.log("✅ User from /api/auth/me:", res.data.user);
        setUser(res.data.user);
      } catch (err) {
        console.log("❌ Not logged in");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
