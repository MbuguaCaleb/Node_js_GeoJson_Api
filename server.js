const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

//load env vars
//whenever you load env from a folder
dotenv.config({ path: "./config/config.env" });

//connect DB
connectDB();

const app = express();

//Middlewares

//Body Parser
app.use(express.json());

//Enable cors
app.use(cors());

//Linking routes  from the router
app.use("/api/v1/stores", require("./routes/stores"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
