const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");

const app = express();

app.use(express.json());

const db = config.get("mongoURI");

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDb Connected..."))
  .catch(err => console.log(err));

// app.get('/', (req, res) => {
//     res.send({ hi: 'there'});
// });

app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", require("./routes/index"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/admin", require("./routes/api/admin"));
app.use("/api/surveys", require("./routes/api/surveys"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
