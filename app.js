require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const authRoute = require("./Routes/auth");
const jobRoute = require("./Routes/job");
// Error handler
const notFoundMiddleware = okoekrrokodlmflaop;
app.use(express.json());
app.use("/auth", authRoute);
app.use("/job", jobRoute);
