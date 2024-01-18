const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = 9000;
app.use(express.json());
app.use(cors());

app.get("/user", async (req, res) => {
  const userInfo = await axios("https://jsonplaceholder.typicode.com/posts");
  userData = userInfo.data;

  let response = [];

  userData.forEach((user) => {
    let userPostData = {};
    userPostData.userId = user.userId;
    userPostData.id = user.id;
    userPostData.title = user.title;
    userPostData.body = user.body;

    response.push(userPostData);
  });
  res.send(response);
});

app.get("/user/:id", async (req, res) => {
  const userInfo = await axios("https://jsonplaceholder.typicode.com/posts");
  const userData = userInfo.data;
  const id = parseInt(req.params.id);

  const userPost = userData.find((user) => user.id === id);

  if (userPost) {
    // If the post is found, return it
    res.json({
      userId: userPost.userId,
      id: userPost.id,
      title: userPost.title,
      body: userPost.body,
    });
  } else {
    res.send({ message: "No Data Found" }).status(404);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});
