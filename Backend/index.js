const express = require("express");
require("dotenv").config();
const connection = require("./config/db");
const cors = require("cors");

const session = require("express-session");
const userRouter = require("./routes/user.routes");
const userDataRouter = require("./routes/userdata.route");
const auth = require("./middlewares/auth.middleware");
const adminRouter = require("./routes/admin.routes");
const nutriRouter = require("./routes/nutrient.route");

const app = express();
app.use(cors());

// Middleware --
app.use(express.json());
app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/admin", adminRouter);
app.use("/users", userRouter);
app.use("/nutrient", nutriRouter); // to get all data

// to make relationship between users and data
app.use(auth);
app.use("/userdata", userDataRouter); // dashboard and diary -- with token

// listening to server --
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (err) {
    console.log("Error in connectiong to db");
  }
  console.log(`Server listening on ${process.env.port}`);
});
