const express = require("express");
const app = express();
const peopleRouter = require("./routes/people");
const authRouter = require("./routes/auth");
const mongoose = require('./')

// static assets
app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));

// parse json data
app.use(express.json());

app.use("/api/people", peopleRouter);
app.use("/login", authRouter);

const port = 5000;
app.listen(port, () => console.log(`Server listening to port ${port}...`));
