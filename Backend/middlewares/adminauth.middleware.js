const jwt = require("jsonwebtoken");
require("dotenv").config();

const adminauth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const decoded = jwt.verify(token, process.env.adminSecretKey);
    if (decoded) {
      next();
    } else {
      res.status(400).send({ message: "Invalid Token inside decoded" });
    }
  } else {
    res.status(400).send({ message: "Invalid Token inside token" });
  }
};

module.exports = adminauth;
