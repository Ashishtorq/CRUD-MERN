const express = require("express");
const axios = require("axios");
const cors = require("cors");
const PORT = 3000;
const app = express();

app.use(express());
app.use(cors());

app.get("/user",async(req,res)=>{
    const userInfo = await axios("https://jsonplaceholder.typicode.com/users")
    const userData = userInfo.data;

    let response = []

    userData.forEach((user)=>{
        let userObj = {}
        userObj.id = user.id
        userObj.name = user.name
        userObj.username = user.username
        userObj.email = user.email
        userObj.phone = user.phone
        userObj.website = user.website
        userObj.address = `${user.address.city},${user.address.street} `;
        userObj.company = `${user.company.name},${user.company.bs} `;
        response.push(userObj)
    })
    res.send(response)
    // console.log(response)
})

app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});
