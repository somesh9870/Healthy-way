const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token, process.env.secretKey);

    if (decoded) {
      req.body.userID = decoded.userID;
      next();
    } else {
      res.status(400).send({ message: "Please login first" });
    }
  } else {
    res.status(400).send({ message: "Please login first" });
  }
};

module.exports = auth;
