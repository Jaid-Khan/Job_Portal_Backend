const jwt = require("jsonwebtoken");

exports.loginAdmin = (req, res) => {
  const { email, password } = req.body;

  const ADMIN = {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD
  };

  // check credentials
  if (email === ADMIN.email && password === ADMIN.password) {

    // ✅ CREATE TOKEN HERE (inside function)
    const token = jwt.sign(
      { email: ADMIN.email },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    return res.json({
      success: true,
      message: "Login successful",
      token
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials"
  });
};