import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ success: false, message: "Not authorized, no token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, role }
    next();

  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

// ✅ FIX: Add this export for role-based protection
export const checkRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ success: false, message: "Access Denied: Insufficient Permissions" });
    }
    next();
  };
};
