const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://rishabhkamboj13:1234@nodeexpressprojects.yqwxpip.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose
    .connect(connectionString)
    .then(() => console.log("CONNECTED TO THE DB..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
