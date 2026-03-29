const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided"
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid token"
    });
  }
};