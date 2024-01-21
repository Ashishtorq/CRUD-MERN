const express = require("express");
const cors = require("cors");
const axios = require("axios");
const PORT = 4000;
const app = express();

app.use(express());
app.use(cors());

app.get("/user", async (req, res) => {
  const userInfo = await axios("https://jsonplaceholder.typicode.com/users");
  const userData = userInfo.data;

  let respose = [];
  userData.forEach((user) => {
    let userObj = {};
    userObj.id = user.id;
    userObj.name = user.name;
    userObj.username = user.username;
    userObj.email = user.email;
    userObj.phone = user.phone;
    userObj.website = user.website;
    userObj.address = `${user.address.city}, ${user.address.street}`;
    userObj.company = `${user.company.name},${user.company.bs} `;

    respose.push(userObj);
  });
  res.send(respose);
});

app.get("/user/:id", async (req, res) => {
  const userInfo = await axios("http://localhost:4000/user");
  const userData = userInfo.data;
  const userid = parseInt(req.params.id);
  const userFeild = userData.find((user) => user.id === userid);
  if (userFeild) {
    res.send(userFeild).status(201);
  } else {
    res.send({ message: "NO Data " }).status(404);
  }
}); 
app.get("/username/:username", async (req, res) => {
  const userInfo = await axios("http://localhost:4000/user");
  const userData = userInfo.data;
  const username = req.params.username;
  console.log(username);
  const userField = userData.find(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );
  console.log(userField);
  if (userField) {
    res.status(200).send(userField);
  } else {
    res.status(404).send({ message: "No user found with the given username" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
