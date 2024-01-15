const PORT = 8000;
const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.get("/", (req,res)=>{
    res.status(200).send("Data is ok")
})
app.listen(PORT, () => {
 console.log(`Server running at port ${PORT}`)
});
