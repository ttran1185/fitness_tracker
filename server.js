const express = require("express");
const mongoose = require("mongoose")
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

app.listen(PORT, function() {
    console.log(`App listening on Port ${PORT}`);
  });
