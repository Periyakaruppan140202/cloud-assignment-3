const express = require("express");
const app = express();
// const cors = require("cors");
var cors = require("cors");
const mongoose = require("mongoose");
const BookList = require("./routes/booklist");
require("dotenv/config");

//Middlewares
// app.use("/", cors);
app.use(cors());
app.use(express.json());
app.use("/booklist", BookList);
app.get("/", (req, res) => {
  res.send("<h1>BackEnd!</h1>");
});
//Connecting to Database
mongoose.connect(
  "mongodb+srv://admin:helloworld@cluster0.j1wda.mongodb.net/BookFinder?retryWrites=true&w=majority",
  () => {
    console.log("Connected to DB!");
  }
);

//Listening to Server
app.listen(5000, () => {
  console.log("Server listening at port 5000...");
});
