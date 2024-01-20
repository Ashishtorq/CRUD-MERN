const express = require("express");
const cors = require("cors");
const axios = require("axios");
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express());

app.get("/user", async (req, res) => {
  const userInfo = await axios("https://jsonplaceholder.typicode.com/users");
  const userDate = userInfo.data;

  let response = [];

  userDate.forEach((user) => {
    let userObj = {};
    userObj.id = user.id;
    userObj.name = user.name;
    userObj.username = user.username;
    userObj.email = user.email;
    userObj.phone = user.phone;
    userObj.address = `${user.address.city}, ${user.address.street}`;
    userObj.website = user.website;
    response.push(userObj);
  });
  res.send(response);
});

app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});
