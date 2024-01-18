const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name:String,
    Email:String,
    Age:Number
})


const userModel = mongoose.model("crud_collection",userSchema);

module.exports = userModel;