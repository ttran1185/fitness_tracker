const express = require("express");
const mongoose = require("mongoose")
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./models");


app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));


