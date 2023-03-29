const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token, "somesh");

    if (decoded) {
      req.user.userID = decoded.userID;
      next();
    } else {
      res.status(400).send({ message: "Please login first" });
    }
  } else {
    res.status(400).send({ message: "Please login first" });
  }
};

module.exports = auth;
