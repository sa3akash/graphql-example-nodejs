const { verifyToken } = require("../utils/auth");

const authenticate = (req, res, next) => {
  // implement JWT token verification here
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) next("No token provided");
  // if token is valid, add user to request object
  const user = verifyToken(token);
  // if token is invalid, return an error
  if (!user) next("Invalid token");
  req.user = user;
  next();
};

module.exports = authenticate;
