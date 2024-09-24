const jwt = require("jsonwebtoken");

const createToken = (user) => {
  return jwt.sign(user, process.env.JWT_SEC, {
    expiresIn: "30 days", // 30 day token life
  });
};

// verifyToken function to verify the token
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SEC);
};

module.exports = { createToken,verifyToken };
