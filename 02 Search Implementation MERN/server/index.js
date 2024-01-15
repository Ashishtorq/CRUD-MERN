const express = require("express")
const axios = require("axios")
const cors = require("cors")
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get("/user/v1", async(req,res)=>{
    const getData = await axios("https://jsonplaceholder.typicode.com/users")
    const userData = getData.data;

    let response = [];

    userData.forEach((user)=>{
        let userInfo = {}
        userInfo.id = user.id
        userInfo.name = user.name
        userInfo.username = user.username
        userInfo.email = user.email
        userInfo.address = `${user.address.city}, ${user.address.street}`
        userInfo.phone = user.phone

        response.push(userInfo)
    })
    res.send(response);
})

app.listen(PORT, ()=>{
    console.log(
      `Server is running at Port ${PORT} at http://localhost:3001/user/v1`
    );
})