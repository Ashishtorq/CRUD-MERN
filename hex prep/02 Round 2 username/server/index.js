const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 3000;
const jwt = require("jsonwebtoken")
const jwtKey = "hexa-decimal"

app.use(cors());
app.use(express.json());

app.get("/user", async (req, res) => {
  const userInfo = await axios("https://jsonplaceholder.typicode.com/users");
  const userData = userInfo.data;

  let response = [];

  userData.forEach((user) => {
    let userObj = {};
    userObj.id = user.id;
    userObj.name = user.name;
    userObj.username = user.username;
    userObj.email = user.email;
    userObj.phone = user.phone;
    userObj.website = user.website;
    userObj.address = `${user.address.street}, ${user.address.city}`;
    userObj.company = `${user.company.name}, ${user.company.bs}`;

    response.push(userObj);
  });
  jwt.sign({ response }, jwtKey, { expiresIn: "2h" }, (err, token) => {
    res.send({ response, auth: token }).status(200);
  });
});

app.get("/username/:username", async (req, res) => {
  const userInfo = await axios("http://localhost:3000/user");
  const userData = userInfo.data;
  const userName = req.params.username;

  const userFeild = userData.find(
    (user) => user.username.toLowerCase() === userName.toLowerCase()
  );
  if (userFeild) {
    jwt.sign({userFeild}, jwtKey,{expiresIn:"2h"},(err, token)=>{
    res.send({userFeild,auth:token}).status(200);
    })
    
  } else {
    res.send({ message: "No Data Found" }).status(404);
  }
});
app.get("/userid/:id", async (req, res) => {
  const userInfo = await axios("http://localhost:3000/user");
  const userData = userInfo.data;
  const userid = parseInt(req.params.id);
  const userFeild = userData.find(user => user.id === userid);
  console.log(userFeild)
  if (userFeild) {
     jwt.sign({ userFeild }, jwtKey, { expiresIn: "2h" }, (err, token) => {
       res.send({ userFeild, auth: token }).status(200);
     });
  } else {
    res.send({ message: "No Data" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});
