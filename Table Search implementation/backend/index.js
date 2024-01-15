const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

app.get("/user", async (req, res) => {
  const userData = await axios("https://jsonplaceholder.typicode.com/users");
  const users = await userData.data;

  let response = [];

  users.forEach((user) => {
    let userInfo = {};
    userInfo.id = user.id;
    userInfo.name = user.name;
    userInfo.username = user.username;
    userInfo.address = `${user.address.city}, ${user.address.street}`
    userInfo.email = user.email;
    userInfo.phone = user.phone;
    userInfo.company = `${user.company.name}`
    userInfo.website = user.website
    response.push(userInfo);
  });
  res.status(200).send(response);
});
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
