const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/user", async (req, res) => {
  const userInfo = await axios("https://jsonplaceholder.typicode.com/users");
  const userData = userInfo.data;

  let response = [];

  userData.forEach((user) => {
    let userObj = {};
    userObj.id = user.id;
    userObj.username = user.username;
    userObj.name = user.name;
    userObj.email = user.email;
    userObj.phone = user.phone;

    response.push(userObj);
  });
  res.send(response);
});

app.get("/user/username", async (req, res) => {
  const userInfo = await axios("https://jsonplaceholder.typicode.com/users");
  const userData = userInfo.data;
  const userName = req.query.username;
  console.log(userName);
  const userFeild = userData.find((user) => user.username === userName);

  if (userFeild) {
    res.send({
      id: userFeild.id,
      username: userFeild.username,
      name: userFeild.name,
      email: userFeild.email,
      phone: userFeild.phone,
    });
  } else {
    res.send("No Data found").status(404);
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
