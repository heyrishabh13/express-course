const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasks");
const connectDB = require("./db/connect");

// middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasksRouter);

const port = 3000;

const start = async () => {
  await connectDB();
  app.listen(3000, () => console.log(`Server is listening on port ${port}...`));
};
