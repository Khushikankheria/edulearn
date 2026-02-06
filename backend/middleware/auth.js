const jwt = require("jsonwebtoken");

/**
 * Verify JWT token and authenticate user
 */
const authenticateToken = (req, res, next) => {
  try {
    // Get token from headers
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        success: false,
        error: "Access denied. No token provided.",
      });
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET || "your_jwt_secret_key", (err, user) => {
      if (err) {
        return res.status(403).json({
          success: false,
          error: "Invalid or expired token.",
        });
      }

      req.user = user;
      next();
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server error during authentication.",
    });
  }
};

/**
 * Check if user is admin
 */
const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      error: "Admin access required.",
    });
  }
  next();
};

module.exports = { authenticateToken, authorizeAdmin };
