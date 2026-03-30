const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "No token provided",
    });
  }

  // ✅ FIX: remove "Bearer "
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token format invalid",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};