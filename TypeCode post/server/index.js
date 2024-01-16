const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

app.get("/user", async (req, res) => {
  const userInfo = await axios("https://jsonplaceholder.typicode.com/posts");
  const userData = userInfo.data;

  let response = [];

  userData.forEach((user) => {
    let userPostData = {};
    userPostData.userid = user.userId;
    userPostData.id = user.id;
    userPostData.title = user.title;
    userPostData.body = user.body;

    response.push(userPostData)
  });
  res.send(response).status(200)
});

app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});

