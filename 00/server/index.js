const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 8000;
const Database = require("./models/user");

const app = express();
app.use(express.json());
app.use(cors());
// db connection
mongoose
  .connect("mongodb://127.0.0.1:27017/CRUD")
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.log(e);
  });
// create api
app.post("/createuser", (req, res) => {
  Database.create(req.body)
    .then((users) => res.json(users))
    .catch((e) => res.json(e));
});
// get data
app.get("/", (req, res) => {
  Database.find({})
    .then((result) => res.json(result))
    .catch((e) => res.json(e));
});
//delete
app.delete('/delete/:id', (req,res)=>{
  const ID = req.params.id;
Database.findByIdAndDelete({_id:ID})
.then(result => res.json(result))
.catch(e => res.json(e));

})
// server
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
