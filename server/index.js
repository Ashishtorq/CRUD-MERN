const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 8000;
const Database = require("./models/user");


const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/CRUD")
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.post("/createuser", async (req, res) => {
  Database.create(req.body)
    .then((users) => res.json(users))
    .catch((e) => res.json(e));
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
