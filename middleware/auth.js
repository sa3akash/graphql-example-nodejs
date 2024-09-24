const { verifyToken } = require("../utils/auth");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if(token){
    const user = verifyToken(token);
    req.user = user;
  }
  next();
};

module.exports = {authenticate};
