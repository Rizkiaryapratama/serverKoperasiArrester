require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userAccountRoutes = require("./routes/userAccounts");
const authRoutes = require("./routes/auth");
const eventRoute = require("./routes/eventRoute");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userAccountRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoute);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
