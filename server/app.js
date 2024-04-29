const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
   origin:'http://localhost:5173',
  // origin:'https://auth-project-client.vercel.app',
  credentials:true,
}))
app.use(cookieParser());





app.get("/", (req, res) => {
    res.send("home page");
  });
  
  module.exports = app;