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

app.get("/user/:id", async (req, res) => {
  try {
    const userInfo = await axios("http://localhost:3000/user");
    const userData = userInfo.data;
    const userid = parseInt(req.params.id);
    const userFeild = userData.find((user) => user.id === userid);
    if (userFeild) {
      res.send(userFeild).status(200);
    } else {
      res.send({ message: "No Data Found" }).status(404);
    }
  } catch (e) {
    console.log(e);
    res.send({ message: "An Error Occured" });
  }
});

app.get("/user/username", async (req, res) => {
  const userInfo = await axios("http://localhost:3000/user");
  const userData = userInfo.data;
  console.log(`userData ${userData}`);
  const usersnames = req.query.username;
  console.log(`username ${usersnames}`);
  const userFeild = userData.find(
    (user) => user.username.toLowerCase() === usersnames.toLowerCase()
  );
  console.log(`userFelid ${userFeild}`);
  if (userFeild) {
    res.status(200).send(userFeild);
  } else {
    res.status(404).send({ message: "No Data Found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});
